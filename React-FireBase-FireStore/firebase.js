// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0sNsUQ_3H9s1bxartLRjbQuXpHpDd1k0",
  authDomain: "react-firebase-firestore-a54c5.firebaseapp.com",
  projectId: "react-firebase-firestore-a54c5",
  storageBucket: "react-firebase-firestore-a54c5.firebasestorage.app",
  messagingSenderId: "403052220214",
  appId: "1:403052220214:web:aee4b084a368e4d5e56d97",
  measurementId: "G-L6CTPQ7D7X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);