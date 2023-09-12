// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDTDPlR_P71z_f8xiSJvxL9dsx7KWTaT-0",
  authDomain: "biblioinsights-12d09.firebaseapp.com",
  projectId: "biblioinsights-12d09",
  storageBucket: "biblioinsights-12d09.appspot.com",
  messagingSenderId: "132898214952",
  appId: "1:132898214952:web:09a628d5ea1f0cfce2d11d",
  measurementId: "G-TGNLGJZ67S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);