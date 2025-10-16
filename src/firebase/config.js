// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9CXUXwnnDTeJ7bVqfb4ZW2y5w6dCx1js",
  authDomain: "to-do-firebase-1bd99.firebaseapp.com",
  projectId: "to-do-firebase-1bd99",
  storageBucket: "to-do-firebase-1bd99.firebasestorage.app",
  messagingSenderId: "758821835667",
  appId: "1:758821835667:web:ee985fc2e7fe9b9b3f0e66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
