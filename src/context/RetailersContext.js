import React, { createContext, useState, useEffect } from "react";
import db from "../util/firebase";
import { collection, onSnapshot, getDocs } from "firebase/firestore";

export const RetailersContext = createContext();

const RetailersProvider = (props) => {
  const [retailers, setRetailers] = useState([]);
  const retailersRef = collection(db, "retailers");

  useEffect(() => {
    const getRetailers = async () => {
      const data = await getDocs(retailersRef);
      setRetailers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getRetailers();
  }, []);

  return (
    <RetailersContext.Provider value={{ retailers, setRetailers }}>
      {props.children}
    </RetailersContext.Provider>
  );
};

export default RetailersProvider;
