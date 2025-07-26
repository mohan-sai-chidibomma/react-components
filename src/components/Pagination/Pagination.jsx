import React, { useState } from "react";
import PropTypes from "prop-types";

import "./pagination.css";

export default function Pagination({ totalPages }) {
  // if (totalPages < 1) {
  //   // throw new Error("totalPages prop should be greater than zero.");
  // }
  const [currentPage, setCurrentPage] = useState(1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const noPages = totalPages < 1;
  let showStartingDots = false;
  let showEndingDots = false;
  const showedPageNumbers = [];
  for (let i = currentPage - 2; i <= currentPage + 2; i++) {
    if (i > 1 && i <= totalPages - 1) showedPageNumbers.push(i);
  }
  if (showedPageNumbers.at(-1) <= totalPages - 2) {
    showEndingDots = true;
  }

  if (showedPageNumbers.at(0) >= 3) {
    showStartingDots = true;
  }

  console.log("reload");

  return (
    <div className="pagination">
      <button
        type="button"
        className={`pagination-left-button ${
          isFirstPage || noPages ? "pagination-left-button--disabled" : ""
        }`}
        onClick={() => setCurrentPage((page) => page - 1)}
        disabled={isFirstPage || noPages}
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
      {noPages && <div className="no-pages">No pages to show</div>}
      {totalPages > 0 && (
        <button
          className={`page-number ${isFirstPage ? "page-number--active" : ""}`}
          key={1}
          onClick={() => setCurrentPage(1)}
        >
          {1}
        </button>
      )}
      {showStartingDots && <span className="dots">...</span>}
      {showedPageNumbers.map((pageNumber) => (
        <button
          className={`page-number ${
            pageNumber === currentPage ? "page-number--active" : ""
          }`}
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      {showEndingDots && <span className="dots">...</span>}
      {totalPages > 1 && (
        <button
          className={`page-number ${isLastPage ? "page-number--active" : ""}`}
          key={totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </button>
      )}
      <button
        type="button"
        className={`pagination-right-button ${
          isLastPage || noPages ? "pagination-right-button--disabled" : ""
        }`}
        onClick={() => setCurrentPage((page) => page + 1)}
        disabled={isLastPage || noPages}
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
