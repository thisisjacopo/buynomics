import React, { createContext, useState, useEffect } from "react";
import db from "../util/firebase";
import { collection, onSnapshot, getDocs } from "firebase/firestore";

export const ManufactorsContext = createContext();

const ManufactorsProvider = (props) => {
  const [manufactors, setManufactors] = useState([]);
  const manufactorsRef = collection(db, "manufacturers");

  //GETTING THE MANUFACTORS COLLECTION FROM DB
  useEffect(() => {
    const getManufactors = async () => {
      const data = await getDocs(manufactorsRef);
      setManufactors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getManufactors();
  }, []);

  return (
    <ManufactorsContext.Provider value={{ manufactors, setManufactors }}>
      {props.children}
    </ManufactorsContext.Provider>
  );
};

export default ManufactorsProvider;
