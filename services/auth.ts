import { FIREBASE_AUTH, FIRESTORE_DB } from '@/FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export async function loginWithEmailAndPassword(email: string, password: string) {
	return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
}

async function singUnpWithEmailAndPassword(email: string, password: string) {
	return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
}

export async function register(data: any, collection: string) {
	const { name, email, password, birthDay, phoneNumber } = data;

	try {
		const userCredential = await singUnpWithEmailAndPassword(email, password);
		const user = userCredential.user;

		await setDoc(doc(FIRESTORE_DB, 'users', user.uid), {
			name,
			email,
			birthDay,
			phoneNumber,
			createdAt: new Date(),
		});

		await setDoc(doc(FIRESTORE_DB, collection, user.uid), {
			...(collection === 'idosos'
				? {
						cuidadorRef: '',
						endereco: '',
						ficha_tecnica: { alergias: [], medicamentos: {}, tipo_sanguineo: '' },
						telefone_emergencia: [],
				  }
				: { idosos: [] }),
			userRef: `/users/${user.uid}`,
		});

		await loginWithEmailAndPassword(email, password);
	} catch (error: any) {
		console.error('Erro ao cadastrar!');
		throw error;
	}
}
