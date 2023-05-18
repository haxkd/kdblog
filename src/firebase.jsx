// src.firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAbzl0zDpkSac-2v94zWpopKW7vNOOwMjg",
    authDomain: "haxkdb.firebaseapp.com",
    databaseURL: "https://haxkdb-default-rtdb.firebaseio.com",
    projectId: "haxkdb",
    storageBucket: "haxkdb.appspot.com",
    messagingSenderId: "117717862942",
    appId: "1:117717862942:web:6faa309539410f59ddfc0f"
  };
  

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}