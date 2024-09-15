// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2-CnS-6p7sw7lh9oFzKSxNn5CJmlSm64",
  authDomain: "clone-65705.firebaseapp.com",
  projectId: "clone-65705",
  storageBucket: "clone-65705.appspot.com",
  messagingSenderId: "876766170473",
  appId: "1:876766170473:web:09e8dd99fd609cc23241f8",
  measurementId: "G-JK2XYR7E73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);

export const provider = new GoogleAuthProvider();