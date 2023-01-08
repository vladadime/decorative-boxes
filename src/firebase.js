import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1T-0o-Vt0U5HSnR_-nLSYprs57Os4vkc",
  authDomain: "decorative-boxes-6255a.firebaseapp.com",
  projectId: "decorative-boxes-6255a",
  storageBucket: "decorative-boxes-6255a.appspot.com",
  messagingSenderId: "45048077042",
  appId: "1:45048077042:web:f94c35a090738c23330e6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);