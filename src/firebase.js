// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
// Change this to according your firebase file
const firebaseConfig = {
  apiKey: "example",
  authDomain: "oticaltextutils.firebaseapp.com",
  projectId: "example",
  storageBucket: "example.firebasestorage.app",
  messagingSenderId: "example",
  appId: "1:example:web:example"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
