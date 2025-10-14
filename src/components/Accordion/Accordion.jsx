import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const content = (
  <article>
    <h5>Hi</h5>
    <p>Hi this is Mohan Sai Chidibomma</p>
  </article>
);

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
  {
    id: 4,
    title: "Experiment",
    content,
  },
];

export const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx)
    throw new Error(
      "<Accodion.Item> component should be used inside of <Accordion> component"
    );

  return ctx;
}

export default function Accordion({ data = FAQS }) {
  const [openId, setOpenId] = useState(null);

  const ctxValue = { openId, setOpenId };

  return (
    <AccordionContext.Provider value={ctxValue}>
      <ul className="accordion">
        {data.map((item) => (
          <li key={item.id}>
            <Accordion.Item item={item} />
          </li>
        ))}
      </ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
