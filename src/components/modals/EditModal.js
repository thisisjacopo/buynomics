import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import db from "../../util/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

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

const EditModal = ({
  editModalIsOpen,
  setEditModalIsOpen,
  documentId,
  categoryToEdit,
}) => {
  const [editName, setEditName] = useState("");
  const [editOrder, setEditOrder] = useState(0);
  const [newType, setNewType] = useState("");
  const [receivedDoc, setReceivedDoc] = useState({});

  const closeModal = () => {
    setEditModalIsOpen(false);
  };

  const handleEditSubmit = async () => {
    try {
      const data = {
        name: editName,
        order: editOrder,
        type: newType,
        category: categoryToEdit,
      };
      const editedDoc = doc(db, categoryToEdit, documentId);
      console.log(data, documentId, "here");
      await updateDoc(editedDoc, data);
    } catch (err) {
      console.log(err);
    }
    setEditModalIsOpen(false);
    window.location.reload();
  };
  const handleDetails = async (documentId, categoryToEdit) => {
    try {
      const docRef = doc(db, categoryToEdit, documentId);
      const docSnap = await getDoc(docRef);
      setReceivedDoc(docSnap.data());
      setEditName(receivedDoc.name);
      setEditOrder(receivedDoc.order);
      if (receivedDoc.type !== undefined) {
        setNewType(receivedDoc.type);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (editModalIsOpen === true) {
      handleDetails(documentId, categoryToEdit);
    }
  }, [documentId, categoryToEdit]);
  return (
    <Modal
      style={customStyles}
      isOpen={editModalIsOpen}
      onRequestClose={closeModal}
    >
      <div className="modal-container">
        <Form.Label>
          Category: <b>{categoryToEdit}</b>{" "}
        </Form.Label>
        <br></br>

        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="name"
          maxLength="255"
          placeholder={receivedDoc.name}
          onChange={(e) => setEditName(e.target.value)}
        />
        {editName === "" ? <Form.Text>Please enter a name...</Form.Text> : null}
        <br></br>
        <Form.Label>Order:</Form.Label>
        <Form.Select onChange={(e) => setEditOrder(e.target.value)}>
          <option>Select order: {receivedDoc.order}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Form.Select>
        <br></br>
        <Form.Label>Type:</Form.Label>
        {receivedDoc.type !== undefined ? (
          <Form.Select onChange={(e) => setNewType(e.target.value)}>
            <option value={newType}>Type: {receivedDoc.type}</option>
            <option value="Range">Range</option>
            <option value="Dropdown">Dropdown</option>
          </Form.Select>
        ) : (
          <Form.Select onChange={(e) => setNewType(e.target.value)}>
            <option>Type:</option>
            <option value="Range">Range</option>
            <option value="Dropdown">Dropdown</option>
          </Form.Select>
        )}
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
            onClick={() => handleEditSubmit()}
          >
            Save Changes
          </Button>
          <Button
            variant="danger"
            className="w-50"
            onClick={() => setEditModalIsOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
