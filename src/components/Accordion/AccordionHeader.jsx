import React, { useContext } from "react";
import { AccordionItemContext } from "./AccordionItem";
import { AccordionContext } from "./Accordion";

export default function AccordionHeader() {
  const { openId, setOpenId } = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);
  const isOpen = openId === item.id;
  const handleIconClick = () => {
    isOpen ? setOpenId(null) : setOpenId(item.id);
  };

  return (
    <>
      <p className="accordion-item-serial-number">
        {item.id.toString().padStart(2, "0")}
      </p>
      <h4 className="accordion-item-title">{item.title}</h4>
      <button
        type="button"
        className="accordion-item-toggle"
        onClick={handleIconClick}
        aria-label="Toggle accordion item"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 accordion-item-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 accordion-item-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>
    </>
  );
}
