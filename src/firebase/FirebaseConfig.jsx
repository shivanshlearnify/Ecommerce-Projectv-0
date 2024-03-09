// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6hyAY9nJx6XtPM9809gqxtCQMZmun7Zg",
  authDomain: "ecommerce-projectv-0.firebaseapp.com",
  projectId: "ecommerce-projectv-0",
  storageBucket: "ecommerce-projectv-0.appspot.com",
  messagingSenderId: "912259008991",
  appId: "1:912259008991:web:1dd846a4d103d989921c6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }