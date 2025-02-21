import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8D8o-zne8ZiVvhqmGmhz7YS7gweiTgJ0",
  authDomain: "visualgearhub.firebaseapp.com",
  projectId: "visualgearhub",
  storageBucket: "visualgearhub.appspot.com",
  messagingSenderId: "611698815431",
  appId: "1:611698815431:web:1d80a1fead3615fe1269e2",
  measurementId: "G-LZ2K346QW0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
