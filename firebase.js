import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtoh0IcE4WUEa46-cr3roomylniUrYW90",
  authDomain: "nepali-momo-house.firebaseapp.com",
  projectId: "nepali-momo-house",
  storageBucket: "nepali-momo-house.appspot.com",
  messagingSenderId: "191651294833",
  appId: "1:191651294833:web:eb412bb21d420a845775d0",
  measurementId: "G-C41HQG15KS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
