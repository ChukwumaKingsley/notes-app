import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDggLyp1fBmERH_iGiVSpDdqnVKpWLOA2w",
  authDomain: "react-notes-115c6.firebaseapp.com",
  projectId: "react-notes-115c6",
  storageBucket: "react-notes-115c6.appspot.com",
  messagingSenderId: "1010138231239",
  appId: "1:1010138231239:web:cf1c97a882ea60053f69e2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const notesCollection = collection(db, "notes");