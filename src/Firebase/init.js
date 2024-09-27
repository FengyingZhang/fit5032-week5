// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore}from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADpfevxbSF5OoPnV10q0EOHOJ1MUfh6d8",
  authDomain: "week7-fengying.firebaseapp.com",
  projectId: "week7-fengying",
  storageBucket: "week7-fengying.appspot.com",
  messagingSenderId: "137642033434",
  appId: "1:137642033434:web:0af1beff059ef1e5c5aca3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db