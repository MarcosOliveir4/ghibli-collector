import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from '../src/environments/environment';

const app = initializeApp(environment.firebaseConfig);
const db = getFirestore(app);

export { db };
