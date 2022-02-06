import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import ManufactorsProvider from "./context/ManufactorsContext";

ReactDOM.render(
  <ManufactorsProvider>
    <Router>
      <div>
        <App />
      </div>
    </Router>
  </ManufactorsProvider>,
  document.getElementById("root")
);
