// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdeNFZKfKQSg5g--XJ5Y6fSb5xk4fwmo4",
  authDomain: "course-39226.firebaseapp.com",
  databaseURL: "https://course-39226-default-rtdb.firebaseio.com",
  projectId: "course-39226",
  storageBucket: "course-39226.appspot.com",
  messagingSenderId: "898822153038",
  appId: "1:898822153038:web:8ec6e6407dc58e7607741f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export {db,app};


