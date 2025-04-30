// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDje_LPxGfBhrm2t2OGyUC-WPvf0G7zZEA",
  authDomain: "prepwise-6d02f.firebaseapp.com",
  projectId: "prepwise-6d02f",
  storageBucket: "prepwise-6d02f.firebasestorage.app",
  messagingSenderId: "28681453701",
  appId: "1:28681453701:web:de0036832fca087dd0e9ec",
  measurementId: "G-27YQ3KWNTC"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);