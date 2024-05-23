import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAnhubE2q-j6HeWZZPotvGsfDXO7GxlGcw",
  authDomain: "fireblogs-46175.firebaseapp.com",
  projectId: "fireblogs-46175",
  storageBucket: "fireblogs-46175.appspot.com",
  messagingSenderId: "809328886833",
  appId: "1:809328886833:web:ab33eae5653bff0f460110"
};
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();



export { projectFirestore};