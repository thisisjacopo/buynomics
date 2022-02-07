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



const EditModal = ({ editModalIsOpen, setEditModalIsOpen }) => {
  const [editName, setEditName] = useState("");
  const [editOrder, setEditOrder] = useState(0);
  const [newType, setNewType] = useState("");

  const closeModal = () => {
    setEditModalIsOpen(false);
  };

  const handleEditSubmit = async () => {
    try {
      console.log("object");
    } catch (err) {
      console.log(err);
    }
    setEditModalIsOpen(false);
    window.location.reload();
  };

  useEffect(() => {}, []);
  return (
    <Modal
      style={customStyles}
      isOpen={editModalIsOpen}
      onRequestClose={closeModal}
    >
      <div className="modal-container">
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
