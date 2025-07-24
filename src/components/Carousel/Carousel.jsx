import React from "react";
import "./carousel.css";

export default function Carousel() {
  return (
    <div className="carousel">
      <img className="profile-pic" src="/images/pp.jpg" alt="profile picture" />
      <blockquote className="blockquote">
        <p className="review">
          &quot;Mohan Sai is a very good UI developer. He worked as a Senior
          React JS Developer for USAA from TCS.&quot;
        </p>
        <div className="by">Mohan Sai Chidibomma.</div>
      </blockquote>
      <button className="btn btn-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4"
          stroke="currentColor"
          className="btn-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button className="btn btn-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="4"
          stroke="currentColor"
          className="btn-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className="dot-group">
        <button className="dot dot-filled">&nbsp;</button>
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
        <button className="dot">&nbsp;</button>
      </div>
    </div>
  );
}
