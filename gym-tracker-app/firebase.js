import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDjUC7k15lUo0uRuYoQsoreu3iOzU4b_mk",
    authDomain: "gym-tracker-app-2affc.firebaseapp.com",
    projectId: "gym-tracker-app-2affc",
    storageBucket: "gym-tracker-app-2affc.appspot.com",
    messagingSenderId: "356967580812",
    appId: "1:356967580812:web:b3d2ec28de1dfe806a27a9"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore();

