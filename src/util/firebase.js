//SET UP AND SECRETS FOR OUR DB IN THE FIREBASE PROJECT

require("dotenv").config();
import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID,
  appId: process.env.REACT_APP_APPID,
};
firebase.initializeApp(firebaseConfig);

const storageRef = firebase.storage();

export { storageRef, firebase as default };
