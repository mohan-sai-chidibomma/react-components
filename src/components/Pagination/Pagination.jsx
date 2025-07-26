import React from "react";

import "./pagination.css";

export default function Pagination() {
  return (
    <div className="pagination">
      <button type="button" className="pagination-left-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="pagination-left-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <a href="#" className="page-number">
        1
      </a>
      <a href="#" className="page-number">
        2
      </a>
      <a href="#" className="page-number page-number--active">
        3
      </a>
      <a href="#" className="page-number">
        4
      </a>
      <a href="#" className="page-number">
        5
      </a>
      <span className="dots">...</span>
      <a href="#" className="page-number">
        14
      </a>
      <button type="button" className="pagination-right-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="pagination-right-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}
