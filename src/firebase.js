// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBI_TDmRop7s2O7sb5tJDMXXuaQFzSUxAM",
  authDomain: "kapa-dashboard.firebaseapp.com",
  projectId: "kapa-dashboard",
  storageBucket: "kapa-dashboard.appspot.com",
  messagingSenderId: "182266452115",
  appId: "1:182266452115:web:052db47cbae9476cc79566",
  measurementId: "G-1MQ4WX888N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();
