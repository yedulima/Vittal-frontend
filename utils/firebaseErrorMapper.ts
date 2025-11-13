export const AUTH_ERROR_MESSAGES = {
	INVALID_CREDENTIALS: 'E-mail ou senha incorretos',
	USER_NOT_FOUND: 'Usuário não encontrado',
	GENERIC_ERROR: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
	EMAIL_ALREADY_IN_USE: 'Este e-mail já está sendo usado',
	WEAK_PASSWORD: 'Senha muito fraca',
};

const FIREBASE_ERROR_MAP = {
	'auth/invalid-credential': AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
	'auth/wrong-password': AUTH_ERROR_MESSAGES.INVALID_CREDENTIALS,
	'auth/user-not-found': AUTH_ERROR_MESSAGES.USER_NOT_FOUND,
	'auth/email-already-in-use': AUTH_ERROR_MESSAGES.EMAIL_ALREADY_IN_USE,
	'auth/weak-password': AUTH_ERROR_MESSAGES.WEAK_PASSWORD,
	'auth/too-many-requests': 'Acesso temporariamente bloqueado. Tente mais tarde.',
};

export const getFormErrorFromFirebaseError = (errorCode: string) => {
	console.log(errorCode);
	const message =
		FIREBASE_ERROR_MAP[errorCode as keyof typeof FIREBASE_ERROR_MAP] || AUTH_ERROR_MESSAGES.GENERIC_ERROR;

	return {
		type: 'manual' as const,
		message: message,
	};
};
