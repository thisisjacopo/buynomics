import React, { createContext, useState, useEffect } from "react";
import db from "../util/firebase";
import { collection, onSnapshot, getDocs } from "firebase/firestore";

export const ManufactorsContext = createContext();

const ManufactorsProvider = (props) => {
  const [manufactors, setManufactors] = useState([]);

  //GETTING THE MANUFACTORS COLLECTION FROM DB

  const getManufactors = async () => {
    const querySnapshot = await getDocs(collection(db, "manufacturers"));
    querySnapshot.forEach((doc) => {
      setManufactors((prev) => [...prev, doc.data()]);
    });
  };

  // Later ...

  // Stop listening to changes

  useEffect(() => {
    getManufactors();
  }, []);

  return (
    <ManufactorsContext.Provider value={{ manufactors, setManufactors }}>
      {props.children}
    </ManufactorsContext.Provider>
  );
};

export default ManufactorsProvider;
