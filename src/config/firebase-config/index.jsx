// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase} from "firebase/database";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC14_RFsJNFOU69pm3p68iOatt6ANBoyLQ",
  authDomain: "ramdomside.firebaseapp.com",
  databaseURL: "https://ramdomside-default-rtdb.firebaseio.com",
  projectId: "ramdomside",
  storageBucket: "ramdomside.appspot.com",
  messagingSenderId: "696707331961",
  appId: "1:696707331961:web:0d6c44a7e625ecd39f21a8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
