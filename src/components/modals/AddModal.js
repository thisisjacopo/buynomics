import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import db from "../../util/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "70%",
    backgroundColor: "white",
  },
};

const AddModal = ({ addModalIsOpen, setAddModalIsOpen }) => {
  const [category, setCategory] = useState("");
  const [newName, setNewName] = useState("");
  const [newOrder, setNewOrder] = useState(0);
  const [newType, setNewType] = useState("");

  const closeModal = () => {
    setAddModalIsOpen(false);
  };

  const handleNewSubmit = async () => {
    //Creating a DB reference for the appropriete collection based on category selected
    let refToCollection;
    let generatedID;
    if (category === "Manufactor") {
      refToCollection = collection(db, "manufacturers");
    } else if (category === "Distributor") {
      refToCollection = collection(db, "distributors");
    } else if (category === "Retailer") {
      refToCollection = collection(db, "retailers");
    }
    try {
      await addDoc(refToCollection, {
        name: newName,
        order: newOrder,
        createdAt: Timestamp.fromDate(new Date()),
        type: newType,
      });
    } catch (err) {
      console.log(err);
    }

    setAddModalIsOpen(false);
    window.location.reload();
  };

  useEffect(() => {}, []);
  return (
    <Modal
      style={customStyles}
      isOpen={addModalIsOpen}
      onRequestClose={closeModal}
    >
      <div className="modal-container">
        <Form.Label>Category:</Form.Label>
        <Form.Select onChange={(e) => setCategory(e.target.value)}>
          <option>Select the Category:</option>
          <option value="Manufactor">Manufactor</option>
          <option value="Distributor">Distributor</option>
          <option value="Retailer">Retailer</option>
        </Form.Select>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="name"
          maxLength="255"
          onChange={(e) => setNewName(e.target.value)}
        />
        {newName === "" ? <Form.Text>Please enter a name...</Form.Text> : null}
        <br></br>
        <Form.Label>Order:</Form.Label>
        <Form.Select onChange={(e) => setNewOrder(e.target.value)}>
          <option>Select order:</option>
          {/* I suppose here we would need to check what are the previously taken order numbers and filter to avoid
           having the same value.*/}
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Form.Select>
        <br></br>
        <Form.Label>Type:</Form.Label>
        <Form.Select onChange={(e) => setNewType(e.target.value)}>
          <option>Type:</option>
          <option value="Range">Range</option>
          <option value="Dropdown">Dropdown</option>
        </Form.Select>
        <br></br>
        <div
          className="btns-modal-div"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            marginTop: "10%",
          }}
        >
          <Button
            variant="success"
            className="w-50"
            onClick={() => handleNewSubmit()}
          >
            Save
          </Button>{" "}
          <Button
            variant="danger"
            className="w-50"
            onClick={() => setAddModalIsOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddModal;
