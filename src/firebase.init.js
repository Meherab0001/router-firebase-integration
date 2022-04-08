// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5e5HjlW_sXC89YAoT_XZbVVsZ9L-Nh28",
  authDomain: "router-firebase-intigration.firebaseapp.com",
  projectId: "router-firebase-intigration",
  storageBucket: "router-firebase-intigration.appspot.com",
  messagingSenderId: "896339393557",
  appId: "1:896339393557:web:636da59c9d60026e23e21c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;