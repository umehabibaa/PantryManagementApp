// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkMv4pRD9_-wnl3YAfb6TmCaPsWf585zk",
  authDomain: "mypantry-f686f.firebaseapp.com",
  projectId: "mypantry-f686f",
  storageBucket: "mypantry-f686f.appspot.com",
  messagingSenderId: "276054248119",
  appId: "1:276054248119:web:a94ac78b4eb5b935025b32"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export{firestore}