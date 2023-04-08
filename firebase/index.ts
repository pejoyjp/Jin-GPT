// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.FIRE_BASE_API,
    authDomain: "jingpt-3d187.firebaseapp.com",
    projectId: "jingpt-3d187",
    storageBucket: "jingpt-3d187.appspot.com",
    messagingSenderId: "279355665706",
    appId: "1:279355665706:web:29d6215b81014484dd8253",
    measurementId: "G-78L04628KK"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)