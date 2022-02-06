import React, { useState, useEffect, useContext } from "react";
import "./mainScreen.css";
import { ManufactorsContext } from "../context/ManufactorsContext";
import { DistributorsContext } from "../context/DistributorsContext";
import { RetailersContext } from "../context/RetailersContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const MainScreen = () => {
  const { manufactors, setManufactors } = useContext(ManufactorsContext);
  const { distributors, setDistributors } = useContext(DistributorsContext);
  const { retailers, setRetailers } = useContext(RetailersContext);

  useEffect(() => {
    // console.log(manufactors, "manufactors");
    // console.log(distributors, "distributors");
    // console.log(retailers, "retailers");
    // retailers.forEach((retailer) => console.log(retailer.name, "hiiii"));
  }, [manufactors, distributors, retailers]);

  return (
    <div className="main-screen-container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Created at:</th>
            <th>Name:</th>
            <th>Order:</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {manufactors
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((ms) => {
              return (
                <>
                  <tr key={ms.createdAt}>
                    <td>
                      {JSON.stringify(ms.createdAt.toDate()).slice(1, 20)}
                    </td>
                    <td>Manufactor: {ms.name}</td>
                    <td>{ms.order}</td>
                    <td>
                      <Button className="w-25 h-25" variant="warning">
                        Edit
                      </Button>{" "}
                      <Button className="w-25 h-25" variant="danger">
                        Delete
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          {distributors
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((ms) => {
              return (
                <>
                  <tr key={ms.createdAt}>
                    <td>
                      {JSON.stringify(ms.createdAt.toDate()).slice(1, 20)}
                    </td>
                    <td>Distributor: {ms.name}</td>
                    <td>{ms.order}</td>
                    <td>
                      <Button className="w-25 h-25" variant="warning">
                        Edit
                      </Button>{" "}
                      <Button className="w-25 h-25" variant="danger">
                        Delete
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          {retailers
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((ms) => {
              return (
                <>
                  <tr key={ms.createdAt}>
                    <td>
                      {JSON.stringify(ms.createdAt.toDate()).slice(1, 20)}
                    </td>
                    <td>Retailer: {ms.name}</td>
                    <td>{ms.order}</td>
                    <td>
                      <Button className="w-25 h-25" variant="warning">
                        Edit
                      </Button>{" "}
                      <Button className="w-25 h-25" variant="danger">
                        Delete
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default MainScreen;