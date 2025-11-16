export interface UserInterface {
	email: string;
	name: string;
	photoURL: string;
	role: string;
	birthday: string;
	phoneNumber?: string;
}

export interface Medicine {
	name: {
		datePeriod: {
			start: Date;
			end: Date;
		};
		dosage: string;
		description: string;
		schedules: string[];
		instructions: string;
		status: string;
	};
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
	technical_sheet?: TecnicalSheet[];
	status?: string;
}

export interface CuidadorInterface {
	user_ref: string;
	idosos?: string[];
}

export interface CloudFunctionDataResponse {
	message: string;
	data: any;
}

export interface ContactInterface extends UserInterface, IdosoInterface {
	id: string;
}
