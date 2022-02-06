import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, getDocs } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBizAb2_eC9C4jY2QxLE3mKPmm0eH-gYa0",
  authDomain: "buynomics-test.firebaseapp.com",
  projectId: "buynomics-test",
  storageBucket: "buynomics-test.appspot.com",
  messagingSenderId: "956616993739",
  appId: "1:956616993739:web:59fc924a19d03b7af1a44e",
  measurementId: "G-GG7FRQH63E",
});

const db = getFirestore();

// const querySnapshot = await onSnapshot(collection(db, "manufacturers"));
// querySnapshot.forEach((doc) => {
//   console.log(doc, "doc");
// });


export default db;
