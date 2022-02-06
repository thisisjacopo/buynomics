import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import ManufactorsProvider from "./context/ManufactorsContext";
import DistributorsProvider from "./context/DistributorsContext";
import RetailersProvider from "./context/RetailersContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <ManufactorsProvider>
    <DistributorsProvider>
      <RetailersProvider>
        <Router>
          <div>
            <App />
          </div>
        </Router>
      </RetailersProvider>
    </DistributorsProvider>
  </ManufactorsProvider>,
  document.getElementById("root")
);
