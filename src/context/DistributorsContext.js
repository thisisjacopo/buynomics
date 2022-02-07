import React, { createContext, useState, useEffect } from "react";
import db from "../util/firebase";
import { collection, getDocs } from "firebase/firestore";

export const DistributorsContext = createContext();

const DistributorsProvider = (props) => {
  const [distributors, setDistributors] = useState([]);
  const distributionsRef = collection(db, "distributors");

  //GETTING THE MANUFACTORS COLLECTION FROM DB

  useEffect(() => {
    const getDistributors = async () => {
      const data = await getDocs(distributionsRef);
      setDistributors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDistributors();
  }, []);

  return (
    <DistributorsContext.Provider value={{ distributors, setDistributors }}>
      {props.children}
    </DistributorsContext.Provider>
  );
};

export default DistributorsProvider;
