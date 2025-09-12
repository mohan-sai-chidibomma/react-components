import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./modal.module.css";

export default function Modal({ isOpen, onClose, children }) {
  const [mounted, setMounted] = useState(false);
  const modalRootRef = useRef(null);
  const dialogRef = useRef();

  useEffect(() => {
    const modal = dialogRef.current;
    if (!modal) return;
    if (isOpen) {
      modal.showModal();
    } else {
      modal.close();
    }
    // return () => {
    //   modal.close();
    // };
  }, [isOpen]);

  useEffect(() => {
    const div = document.createElement("div");
    div.setAttribute("id", "modal-root");
    document.body.appendChild(div);
    modalRootRef.current = div;
    setMounted(true);
    return () => {
      document.body.removeChild(div);
    };
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <dialog
      ref={dialogRef}
      aria-modal="true"
      className={styles.dialog}
      onClose={onClose}
    >
      <div className={styles.modal}>
        {children}
        <form method="dialog" className={styles.closeButton}>
          <Button buttonType="danger">Close</Button>
        </form>
      </div>
    </dialog>,
    modalRootRef.current
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
