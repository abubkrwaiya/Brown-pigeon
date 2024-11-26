import {initializeApp} from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMiaaPJcyXRMwaHg_-IqvtOd0SmKLuANs",
  authDomain: "brown-pigeon.firebaseapp.com",
  projectId: "brown-pigeon",
  storageBucket: "brown-pigeon.firebasestorage.app",
  messagingSenderId: "332790727956",
  appId: "1:332790727956:web:366eb47ac5503299b66e01",
  measurementId: "G-FNZLS0R3KD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  auth,
  googleProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  db,
};
