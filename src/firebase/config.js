import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "heoresapp-c57a8.firebaseapp.com",
  projectId: "heoresapp-c57a8",
  storageBucket: "heoresapp-c57a8.appspot.com",
  messagingSenderId: "1066770673937",
  appId: "1:1066770673937:web:6fe816ebd53c0283681cb0"
};


const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )