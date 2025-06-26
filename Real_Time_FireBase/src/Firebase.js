// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAVTxQdgC5FS4CjmztbqGNP6qHXiQkoYfE",
  authDomain: "crus-realtime-database.firebaseapp.com",
  databaseURL: "https://crus-realtime-database-default-rtdb.firebaseio.com",
  projectId: "crus-realtime-database",
  storageBucket: "crus-realtime-database.firebasestorage.app",
  messagingSenderId: "330493878035",
  appId: "1:330493878035:web:24bbe07f7356e5d92ec4e6",
  measurementId: "G-15VSH5SMLE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);