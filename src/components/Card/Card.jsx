import styles from "./card.module.css";
import React from "react";
import PropTypes from "prop-types";

export default function Card({ children }) {
  return (
    <div className={styles.card}>
      {/* <img
        src="public\meal-1.jpg"
        alt="An image of a Vegetarian meal"
        className={styles.img}
      />
      <div className={styles.body}>
        <h3>This is a heading</h3>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div> */}
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
