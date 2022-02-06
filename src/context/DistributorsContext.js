import React, { createContext, useState, useEffect } from "react";
import db from "../util/firebase";
import { collection, onSnapshot, getDocs } from "firebase/firestore";

export const DistributorsContext = createContext();

const DistributorsProvider = (props) => {
  const [distributors, setDistributors] = useState([]);

  //GETTING THE MANUFACTORS COLLECTION FROM DB

  const getDistributors = async () => {
    const querySnapshot = await getDocs(collection(db, "distributors"));
    querySnapshot.forEach((doc) => {
      setDistributors((prev) => [...prev, doc.data()]);
    });
  };

  useEffect(() => {
    getDistributors();
  }, []);

  return (
    <DistributorsContext.Provider value={{ distributors, setDistributors }}>
      {props.children}
    </DistributorsContext.Provider>
  );
};

export default DistributorsProvider;
