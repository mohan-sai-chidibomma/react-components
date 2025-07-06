import React, { useState } from "react";
import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";
export const FAQS = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    title: "What is a component?",
    content: "A component is a reusable piece of UI in a React application.",
  },
  {
    id: 3,
    title: "How do I use props?",
    content: "Props are used to pass data from parent to child components.",
  },
];

export default function Accordion({ data = FAQS }) {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          openId={openId}
          setOpenId={setOpenId}
        />
      ))}
    </div>
  );
}

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
