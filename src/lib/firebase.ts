// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  "projectId": "blentos-admin-console",
  "appId": "1:106612451532:web:6a5998d10a90e82f70fa69",
  "storageBucket": "blentos-admin-console.firebasestorage.app",
  "apiKey": "AIzaSyDswRNQN295277JsOWEfiOBQu4zjJubteI",
  "authDomain": "blentos-admin-console.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "106612451532"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
