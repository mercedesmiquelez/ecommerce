import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAm5xwmCOIRnqW1n-yrSjiKUdAZT27qAjQ",
  authDomain: "ecommercemiquelez.firebaseapp.com",
  projectId: "ecommercemiquelez",
  storageBucket: "ecommercemiquelez.appspot.com",
  messagingSenderId: "34537754913",
  appId: "1:34537754913:web:55317dfac676adce686e60"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)