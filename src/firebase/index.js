// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkCPrd5D0cN6Lh-89rxtlRqyyrQw-Pxp4",
  authDomain: "quest-wimates.firebaseapp.com",
  databaseURL: "https://quest-wimates-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quest-wimates",
  storageBucket: "quest-wimates.appspot.com",
  messagingSenderId: "415385241401",
  appId: "1:415385241401:web:400a1b7fce84124c9b8ae8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);