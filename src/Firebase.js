// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API,
  authDomain:import.meta.env.AUTH_DOMAIN ,
  projectId: import.meta.env.PROJECT_ID,
  storageBucket: import.meta.env.STORAGE_BUCKET,
  messagingSenderId:import.meta.env.MESSAGING_ID  ,
  appId: import.meta.env.APP_ID,
  measurementId:import.meta.env.MEASUREMENT_ID 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();