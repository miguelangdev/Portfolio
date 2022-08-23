// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-storage.js"

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
const storage = getStorage(app);

export const onAboutme = (callback) => onSnapshot(collection(db, 'Aboutme'), callback);
export const onCarousel = (callback) => onSnapshot(collection(db, 'Carousel'), callback);
export const onExperience = (callback) => onSnapshot(collection(db, 'Experience'), callback);
export const onFormacion = (callback) => onSnapshot(collection(db, 'Formacion'), callback);
export const onPortfolio = (callback) => onSnapshot(collection(db, 'Portfolio'), callback);
export const onIcono = (callback) => onSnapshot(collection(db, 'Icono'), callback);
export const onCV = (callback) => onSnapshot(collection(db, 'CV'), callback);

export const downloadSpanish = (callback) => getDownloadURL(ref(storage, 'cv/Miguel ángel gonzález álvarez CV 082022.pdf'))
.then((url) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = (event) => {
    const blob = xhr.response;
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "Miguel ángel gonzález álvarez CV";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 7000);
  };
  xhr.open('GET', url);
  xhr.send();
}).catch((error) => {
  console.log(error);
  switch (error.code) {
    case 'storage/object-not-found':
      break;
    case 'storage/unauthorized':
      break;
    case 'storage/canceled':
      break;
    case 'storage/unknown':
      break;
  }
});

export const downloadEnglish = (callback) => getDownloadURL(ref(storage, 'cv/Miguel ángel gonzález álvarez CV ingles.pdf'))
.then((url) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = (event) => {
    const blob = xhr.response;
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "Miguel ángel gonzález álvarez CV ingles";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 7000);
  };
  xhr.open('GET', url);
  xhr.send();
}).catch((error) => {
  switch (error.code) {
    case 'storage/object-not-found':
      break;
    case 'storage/unauthorized':
      break;
    case 'storage/canceled':
      break;
    case 'storage/unknown':
      break;
  }
});