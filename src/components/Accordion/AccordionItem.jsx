import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Accordion-Item.css";

export default function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion-item">
      <p className="accordion-item-serial-number">
        {item.id.toString().padStart(2, "0")}
      </p>
      <p className="accordion-item-title">{item.title}</p>
      <button
        type="button"
        className="accordion-item-toggle"
        onClick={() => setIsOpen((prevState) => !prevState)}
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
      <p className={`accordion-item-content ${isOpen ? "open" : ""}`}>
        {item.content}
      </p>
    </div>
  );
}

AccordionItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};
