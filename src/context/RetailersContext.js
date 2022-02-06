import React, { createContext, useState, useEffect } from "react";
import db from "../util/firebase";
import { collection, onSnapshot, getDocs } from "firebase/firestore";


export const RetailersContext = createContext();

const RetailersProvider = (props) => {
  const [retailers, setRetailers] = useState([]);

  //GETTING THE MANUFACTORS COLLECTION FROM DB

  const getRetailers = async () => {
    const querySnapshot = await getDocs(collection(db, "retailers"));
    querySnapshot.forEach((doc) => {
      setRetailers((prev) => [...prev, doc.data()]);
    });
  };

  useEffect(() => {
    getRetailers();
  }, []);

  return (
    <RetailersContext.Provider value={{ retailers, setRetailers }}>
      {props.children}
    </RetailersContext.Provider>
  );
};

export default RetailersProvider;
