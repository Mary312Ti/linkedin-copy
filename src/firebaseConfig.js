// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKYCaEi8nuya8Hublxr5V_GZp6QQIawj8",
  authDomain: "linkedin-copy-db637.firebaseapp.com",
  projectId: "linkedin-copy-db637",
  storageBucket: "linkedin-copy-db637.appspot.com",
  messagingSenderId: "389681486902",
  appId: "1:389681486902:web:2e0f76d2b040ed05c40c97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);