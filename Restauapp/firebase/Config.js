import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD2Yiu2oQs_Ai85i6qpQ_5Is0PovFCdWkw",
  authDomain: "js-project-a0dca.firebaseapp.com",
  projectId: "js-project-a0dca",
  storageBucket: "js-project-a0dca.appspot.com",
  messagingSenderId: "507313056295",
  appId: "1:507313056295:web:470cc2a9eb0e500e317c02",
  measurementId: "G-NPBXBLZ1MM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore database instance
const db = firebase.firestore();

// Authentication instance
const projectAuth = firebase.auth();

// Google authentication provider
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Export the instances for use in other parts of the application
export { db, projectAuth, googleProvider};







