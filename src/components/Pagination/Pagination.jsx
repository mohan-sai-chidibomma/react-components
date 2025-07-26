import React, { useState } from "react";
import PropTypes from "prop-types";

import "./pagination.css";

export default function Pagination({ totalPages = 15 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  let showDots = false;
  const showedPageNumbers = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i > 0 && i <= totalPages - 1) showedPageNumbers.push(i);
  }
  if (showedPageNumbers.at(-1) <= totalPages - 2) {
    showDots = true;
  }

  return (
    <div className="pagination">
      <button
        type="button"
        className={`pagination-left-button ${
          isFirstPage ? "pagination-left-button--disabled" : ""
        }`}
        onClick={() => setCurrentPage((page) => page - 1)}
        disabled={isFirstPage}
      >
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
      {showedPageNumbers.map((pageNumber) => (
        <a
          href="#"
          className={`page-number ${
            pageNumber === currentPage ? "page-number--active" : ""
          }`}
          key={pageNumber}
        >
          {pageNumber}
        </a>
      ))}
      {showDots && <span className="dots">...</span>}
      <a
        href="#"
        className={`page-number ${isLastPage ? "page-number--active" : ""}`}
        key={totalPages}
      >
        {totalPages}
      </a>
      <button
        type="button"
        className={`pagination-right-button ${
          isLastPage ? "pagination-right-button--disabled" : ""
        }`}
        onClick={() => setCurrentPage((page) => page + 1)}
        disabled={isLastPage}
      >
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

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
};
