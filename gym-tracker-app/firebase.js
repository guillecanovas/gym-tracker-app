import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDjUC7k15lUo0uRuYoQsoreu3iOzU4b_mk",
    authDomain: "gym-tracker-app-2affc.firebaseapp.com",
    projectId: "gym-tracker-app-2affc",
    storageBucket: "gym-tracker-app-2affc.appspot.com",
    messagingSenderId: "356967580812",
    appId: "1:356967580812:web:b3d2ec28de1dfe806a27a9"
  };

let app;

if (firebase.apps.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

