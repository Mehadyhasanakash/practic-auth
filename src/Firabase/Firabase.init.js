// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqj-rlaOk9gl28zTMI964Ph5hB626En3c",
  authDomain: "practice-auth-72d5b.firebaseapp.com",
  projectId: "practice-auth-72d5b",
  storageBucket: "practice-auth-72d5b.appspot.com",
  messagingSenderId: "1016970169217",
  appId: "1:1016970169217:web:1f49a9c3e2697dca2f7680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;