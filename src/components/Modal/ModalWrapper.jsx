import React, { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

export default function ModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    console.log("close function executed");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <h1>Please try again</h1>
        <p>Something went wrong</p>
      </Modal>
      <Button type="button" buttonType="secondary" onClick={handleClick}>
        Open Modal
      </Button>
    </>
  );
}
