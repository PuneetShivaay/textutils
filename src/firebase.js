// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1QjfyL6XBjAmOQetvEANRbNQSwWXBy2s",
  authDomain: "oticaltextutils.firebaseapp.com",
  projectId: "oticaltextutils",
  storageBucket: "oticaltextutils.firebasestorage.app",
  messagingSenderId: "204654097808",
  appId: "1:204654097808:web:939eb5423ae1eb99de6f15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);