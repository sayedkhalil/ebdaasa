import firebase from "firebase/app"
import { initializeApp } from 'firebase/app';
import { getFirestore,} from 'firebase/firestore'
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: "ebdaasa-71b51",
  storageBucket: "ebdaasa-71b51.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
  };
  const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app)
   export const storage = getStorage(app);

  