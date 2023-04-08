import { initializeApp } from "firebase/app";

import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyAXnRoyu5uurtR7t-PfxLWNR5gfjtyZjEo",
  authDomain: "thanks-comp-storage.firebaseapp.com",
  projectId: "thanks-comp-storage",
  storageBucket: "thanks-comp-storage.appspot.com",
  messagingSenderId: "610240686728",
  appId: "1:610240686728:web:13cfd69079074b4d59cd3d"
};


export const InitFirebaseApp = initializeApp(firebaseConfig);


