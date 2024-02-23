// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC14_RFsJNFOU69pm3p68iOatt6ANBoyLQ",
    authDomain: "ramdomside.firebaseapp.com",
    projectId: "ramdomside",
    storageBucket: "ramdomside.appspot.com",
    messagingSenderId: "696707331961",
    appId: "1:696707331961:web:f1fca6f6b70906169f21a8"
  };

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);


export { firebase_app, auth };