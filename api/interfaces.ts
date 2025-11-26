export interface UserInterface {
	email: string;
	name: string;
	photoURL: string;
	role: string;
	birthday: string;
	phoneNumber?: string;
}

export interface UserData extends UserInterface {
	createdAt: Date;
}

export interface Medicine {
	id: string;
	name: string;
	datePeriod: {
		start: string;
		end: string;
	};
	dosage: string;
	description: string;
	schedules: string[];
	instructions: string;
	status: string;
}

export interface TecnicalSheet {
	allergies: string[];
	bloodType: string;
	medicines: Medicine[];
}

export interface IdosoInterface {
	user_ref: string;
	cuidador_ref?: string;
	emergency_numbers?: string[];
	address?: string;
	technical_sheet?: TecnicalSheet;
	status?: string;
}

export interface UpdateIdosoPayload {
	emergency_numbers?: string[];
	address?: string;
	technical_sheet?: TecnicalSheet;
}

export interface CuidadorInterface {
	user_ref: string;
	idosos?: string[];
}

export interface CloudFunctionDataResponse<T = any> {
	message: string;
	data: T;
}

export interface ContactInterface {
	id: string;
	name: string;
	photoURL: string;
	status: string;
}

export interface ContactCompactInterface {
	id: string;
	name: string;
	photoURL: string;
}

export interface NotificationInterface {
	id: string;
	title: string;
	body: string;
	read: boolean;
	time: string;
}

export interface SendMessagePayload {
	dest_user: string;
	title: string;
	body: string;
	sender: string;
}

export interface ChangeReadStatePayload {
	notification_id: string;
}

export interface SendMessagePayload {
	dest_user: string;
	title: string;
	body: string;
}

export interface FullContactInterface extends IdosoInterface, UserInterface {
	id: string;
}

export interface AddMedicinePayload {
	userId: string;
	name: string;
	datePeriod: {
		start: string;
		end: string;
	};
	dosage: string;
	description: string;
	schedules: string[];
	instructions: string;
}

export interface UpdateMedicinePayload extends AddMedicinePayload {
	medicationId: string;
}

export interface DeleteMedicinePayload {
	userId: string;
	medicationId: string;
}
