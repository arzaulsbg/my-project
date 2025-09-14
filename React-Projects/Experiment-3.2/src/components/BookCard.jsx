import React from "react";

/**
 * Props:
 *  - title, author, onRemove (function)
 */
const BookCard = ({ title, author, onRemove }) => {
  return (
    <div className="book-card">
      <div className="book-info">
        <strong>{title}</strong> <span>by</span>{" "}
        <span className="author"> {author}</span>
      </div>
      <button className="remove-btn" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default BookCard;
