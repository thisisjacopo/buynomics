import React, { useState, useEffect, useContext } from "react";
import "./mainScreen.css";
import { ManufactorsContext } from "../context/ManufactorsContext";

const MainScreen = () => {
  const { manufactors, setManufactors } = useContext(ManufactorsContext);
  useEffect(() => {
    console.log(manufactors, "manufactors");
  }, [manufactors]);

  return (
    <div className="main-screen-container">
      <h1>HI</h1>
    </div>
  );
};

export default MainScreen;
