import {
	ChangeReadStatePayload,
	CloudFunctionDataResponse,
	NotificationInterface,
	SendMessagePayload,
} from '@/api/interfaces';
import { FIREBASE_FUNCTIONS, FIRESTORE_DB } from '@/FirebaseConfig';
import { doc, DocumentData, DocumentSnapshot, onSnapshot, Unsubscribe } from 'firebase/firestore';
import { httpsCallable } from 'firebase/functions';

const sendMessageCallback = httpsCallable(FIREBASE_FUNCTIONS, 'notificationsFunctions-sendMessage');
const onMessageRecivedCallback = httpsCallable(FIREBASE_FUNCTIONS, 'notificationsFunctions-onMessageRecived');
const changeReadStateCallback = httpsCallable(FIREBASE_FUNCTIONS, 'notificationsFunctions-changeReadState');

type NotificationListenerCallback = (notifications: NotificationInterface[]) => void;

export const sendMessage = async (payload: SendMessagePayload): Promise<CloudFunctionDataResponse<string>> => {
	try {
		const result = (await sendMessageCallback(payload)) as CloudFunctionDataResponse<string>;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Notification service error (sendMessage): ${error}`);
		}
		throw error;
	}
};

export const fetchNotifications = async (): Promise<CloudFunctionDataResponse<NotificationInterface[]>> => {
	try {
		const result = (await onMessageRecivedCallback()) as CloudFunctionDataResponse<NotificationInterface[]>;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Notification service error (fetchNotifications): ${error}`);
		}
		throw error;
	}
};

export const markNotificationAsRead = async (notificationId: string): Promise<CloudFunctionDataResponse<string>> => {
	try {
		const payload: ChangeReadStatePayload = { notification_id: notificationId };
		const result = (await changeReadStateCallback(payload)) as CloudFunctionDataResponse<string>;
		return result;
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(`Notification service error (markNotificationAsRead): ${error}`);
		}
		throw error;
	}
};

export const listenForNotifications = (userId: string, callback: NotificationListenerCallback): Unsubscribe => {
	const notificationRef = doc(FIRESTORE_DB, 'notifications', userId);

	const unsubscribe = onSnapshot(
		notificationRef,
		(docSnapshot: DocumentSnapshot<DocumentData>) => {
			if (docSnapshot.exists()) {
				const data = docSnapshot.data();
				const notifications = (data.notifications as NotificationInterface[]) || [];

				callback(notifications);
			} else {
				callback([]);
			}
		},
		(error) => {
			console.error('Erro no listener de notificações:', error);
			callback([]);
		}
	);

	return unsubscribe;
};
