import { getAuth  } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKyc7wDtP2P2gXdTyuaOqrMJFNOfXOKHU",
  authDomain: "netflix-gpt-c5bb2.firebaseapp.com",
  projectId: "netflix-gpt-c5bb2",
  storageBucket: "netflix-gpt-c5bb2.firebasestorage.app",
  messagingSenderId: "521491111035",
  appId: "1:521491111035:web:5ede0d4bf7c2f1a690d6de",
  measurementId: "G-L4MSN8FWRP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); // Since we have to call it in each API by firebase, we wanted to put it in a central place and then call it anywhere from here