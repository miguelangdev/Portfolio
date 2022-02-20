// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiXWglM415zSFxywCxnMLIGUlKlUmAf2M",
  authDomain: "portfolio-618f9.firebaseapp.com",
  projectId: "portfolio-618f9",
  storageBucket: "portfolio-618f9.appspot.com",
  messagingSenderId: "353456669296",
  appId: "1:353456669296:web:ffa98e10a91d132306eab5",
  measurementId: "G-21TF56FEXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

export const onAboutme = (callback) => onSnapshot(collection(db, 'Aboutme'), callback);
export const onCarousel = (callback) => onSnapshot(collection(db, 'Carousel'), callback);
export const onExperience = (callback) => onSnapshot(collection(db, 'Experience'), callback);
export const onFormacion = (callback) => onSnapshot(collection(db, 'Formacion'), callback);
export const onPortfolio = (callback) => onSnapshot(collection(db, 'Portfolio'), callback);
export const onIcono = (callback) => onSnapshot(collection(db, 'Icono'), callback);