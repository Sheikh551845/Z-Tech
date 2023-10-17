// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZLcTzKS14XA-FbxeTA3PL79zltrCANts",
  authDomain: "z-tech-125f3.firebaseapp.com",
  projectId: "z-tech-125f3",
  storageBucket: "z-tech-125f3.appspot.com",
  messagingSenderId: "675414382172",
  appId: "1:675414382172:web:25ae9f3ad4e4e0f1d03899"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);