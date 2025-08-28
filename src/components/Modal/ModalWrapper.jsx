import React, { useRef } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

export default function ModalWrapper() {
  const ref = useRef();

  const handleClick = () => {
    ref.current.open();
  };

  const handleClose = () => {
    console.log("close function executed");
  };

  return (
    <>
      <Modal ref={ref} onClose={handleClose}>
        <h1>Please try again</h1>
        <p>Something went wrong</p>
      </Modal>
      <Button type="button" buttonType="secondary" onClick={handleClick}>
        Open Modal
      </Button>
    </>
  );
}
