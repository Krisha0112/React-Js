// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFir4AztYkVfQ_XK-3VeOmNcHybNx5xNE",
  authDomain: "pr-11-firebase-database-ac146.firebaseapp.com",
  projectId: "pr-11-firebase-database-ac146",
  storageBucket: "pr-11-firebase-database-ac146.firebasestorage.app",
  messagingSenderId: "973215524659",
  appId: "1:973215524659:web:e5bf80660b82c6c2c28046",
  measurementId: "G-2XWESVFTVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);