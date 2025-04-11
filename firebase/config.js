// firebase/config.js
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJwqPdZ4ko9sD8yLX6jZda-txmnvj_sKo",
  authDomain: "vocesqueviajan.firebaseapp.com",
  projectId: "vocesqueviajan",
  storageBucket: "vocesqueviajan.appspot.com",
  messagingSenderId: "79489478148",
  appId: "1:79489478148:web:666696d5e389f37307cf51",
  measurementId: "G-5EHYL2JZZS",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);

// Analytics opcional y seguro
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics };
