import React, { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

import styles from "./modalwrapper.module.css";

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
      <main className={styles.main}>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem iure non ullam iste nostrum adipisci corrupti saepe
          sint repudiandae molestiae, cupiditate vel, molestias.
        </h1>
        <Button type="button" buttonType="primary" onClick={handleClick}>
          Open Modal
        </Button>
      </main>
    </>
  );
}
