import firebase from "firebase/compat/app"
import { getDatabase } from "firebase/database"
import "firebase/auth"
import "firebase/database"
import {getAuth} from "firebase/auth"

/*const firebaseConfig = {
    apiKey: process.env.REACT_FIREBASE_API_KEY,
    authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_FIREBASE_APP_ID
}*/
const firebaseConfig = {
    apiKey: "AIzaSyDFrqpbtJODbymMwRsP4xTJduuas1UMMUk",
    authDomain: "bruinfessions-e55f6.firebaseapp.com",
    databaseURL: "https://bruinfessions-e55f6-default-rtdb.firebaseio.com",
    projectId: "bruinfessions-e55f6",
    storageBucket: "bruinfessions-e55f6.appspot.com",
    messagingSenderId: "215295177115",
    appId: "1:215295177115:web:566792c3641e84e8b3313e",
    measurementId: "G-6GTHX36MWS"
  };

const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
