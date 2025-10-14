import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AccordionContext } from "./Accordion";
import { AccordionItemContext } from "./AccordionItem";

export default function AccordionContent({ children }) {
  const { openId } = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);
  const isOpen = openId === item.id;
  return (
    <div className={`accordion-item-content ${isOpen ? "open" : ""}`}>
      {children}
    </div>
  );
}

AccordionContent.propTypes = {
  children: PropTypes.node.isRequired,
};
