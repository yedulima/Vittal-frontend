import { FIREBASE_STORAGE } from '@/FirebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const formatAndUploadImage = async (imageURL: string, userUID: string) => {
	let finalPhotoURL: string | null = null;
	const responseBlob = await fetch(imageURL);
	const blob = await responseBlob.blob();

	const storageRef = ref(FIREBASE_STORAGE, `/profile_photos/${userUID}.jpg`);
	await uploadBytes(storageRef, blob);

	const downloadURL = await getDownloadURL(storageRef);
	finalPhotoURL = downloadURL;
	return finalPhotoURL;
};
