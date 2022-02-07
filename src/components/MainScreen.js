import React, { useState, useEffect, useContext } from "react";
import "./mainScreen.css";
import { ManufactorsContext } from "../context/ManufactorsContext";
import { DistributorsContext } from "../context/DistributorsContext";
import { RetailersContext } from "../context/RetailersContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import AddModal from "./modals/AddModal";

const MainScreen = () => {
  //CONTEXTS
  const { manufactors, setManufactors } = useContext(ManufactorsContext);
  const { distributors, setDistributors } = useContext(DistributorsContext);
  const { retailers, setRetailers } = useContext(RetailersContext);
  //STATES
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);

  useEffect(() => {}, [manufactors, distributors, retailers]);

  return (
    <div className="main-screen-container">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Created at:</th>
            <th>Name:</th>
            <th>Order:</th>
            <th>
              {" "}
              <Button
                className="w-50"
                variant="primary"
                onClick={() => setAddModalIsOpen(true)}
              >
                Add +
              </Button>
            </th>
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
      <AddModal
        addModalIsOpen={addModalIsOpen}
        setAddModalIsOpen={setAddModalIsOpen}
      />
    </div>
  );
};

export default MainScreen;
