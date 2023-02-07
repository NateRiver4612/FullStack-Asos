import firebase, { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBqhLNKkmksyF30Ue39cVPaP9VF4FBlOk",
  authDomain: "myasos.firebaseapp.com",
  projectId: "myasos",
  storageBucket: "myasos.appspot.com",
  messagingSenderId: "645490755714",
  appId: "1:645490755714:web:4e08479e6713f42254cc9b",
  measurementId: "G-BDFSZWTXJT",
};

const app = initializeApp(firebaseConfig);

export { app };
