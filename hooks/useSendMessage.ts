import { sendMessage } from '@/api/services/notification.service';

export const useSendMessage = async (dest_user: string, sender_user: string, title: string, body: string) => {
	try {
		const payload = {
			dest_user: dest_user,
			title: title,
			body: body,
			sender: sender_user,
		};
		await sendMessage(payload);
	} catch (error) {
		console.error(error);
	}
};
