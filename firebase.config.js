// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsQUFbb-NhB3ZdUkaoj5QaduHo9hjGoI0",
  authDomain: "task-management-128f3.firebaseapp.com",
  projectId: "task-management-128f3",
  storageBucket: "task-management-128f3.appspot.com",
  messagingSenderId: "506227377366",
  appId: "1:506227377366:web:7df09c5b488fcc1507b577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;