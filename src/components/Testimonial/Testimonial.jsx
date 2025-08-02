import React from "react";
import styles from "./testimonial.module.css";
import PropTypes from "prop-types";

export default function Testimonial({
  className = "",
  src,
  alt,
  testimonialText,
  author,
}) {
  return (
    <div className={`${styles.testimonial} ${className}`}>
      <img src={src} alt={alt} className={styles.testimonialImg} />
      <blockquote className={styles.testimonialQuote}>
        {testimonialText}
      </blockquote>
      <p className={styles.customer}>&mdash; {author}</p>
    </div>
  );
}
Testimonial.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  testimonialText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
