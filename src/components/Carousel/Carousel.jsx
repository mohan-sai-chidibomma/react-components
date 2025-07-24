import React, { useState } from "react";
import PropTypes from "prop-types";
import "./carousel.css";
import { CAROUSEL_DATA } from "./carousel.const";

export default function Carousel({ data = CAROUSEL_DATA }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const isFirstItem = activeIndex === 0;
  const isLastItem = activeIndex === data.length - 1;

  const handleLeftButtonClick = () => {
    setActiveIndex((index) => index - 1);
  };
  const handleRightButtonClick = () => {
    setActiveIndex((index) => index + 1);
  };
  return (
    <div className="carousel">
      <img
        className="profile-pic"
        src={data[activeIndex].src}
        alt={data[activeIndex].alt}
      />
      <blockquote className="blockquote">
        <p className="review">&quot;{data[activeIndex].review}&quot;</p>
        <div className="by">{data[activeIndex].by}</div>
      </blockquote>
      <button
        className="btn btn-left"
        name="left-slider"
        type="button"
        onClick={handleLeftButtonClick}
        disabled={isFirstItem}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4"
          stroke="currentColor"
          className={`btn-icon ${isFirstItem ? "btn-icon-disabled" : ""} `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="btn btn-right"
        name="right-slider"
        type="button"
        onClick={handleRightButtonClick}
        disabled={isLastItem}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4"
          stroke="currentColor"
          className={`btn-icon ${isLastItem ? "btn-icon-disabled" : ""} `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className="dot-group">
        {data.map((profile, index) => (
          <button
            key={profile.src}
            className={`dot ${activeIndex === index ? "dot-filled" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            &nbsp;
          </button>
        ))}
      </div>
    </div>
  );
}

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
};
