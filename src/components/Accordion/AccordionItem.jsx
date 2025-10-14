import React, { createContext } from "react";
import PropTypes from "prop-types";
import "./Accordion-Item.css";
import AccordionContent from "./AccordionContent";
import { useAccordionContext } from "./Accordion";
import AccordionHeader from "./AccordionHeader";

export const AccordionItemContext = createContext();

export default function AccordionItem({ item }) {
  const { openId } = useAccordionContext();

  const isOpen = openId === item.id;

  return (
    <AccordionItemContext.Provider value={item}>
      <div className={`accordion-item ${isOpen ? "highlight" : ""}`}>
        <AccordionHeader />
        <AccordionContent>{item.content}</AccordionContent>
      </div>
    </AccordionItemContext.Provider>
  );
}

AccordionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  openId: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  setOpenId: PropTypes.func,
};
