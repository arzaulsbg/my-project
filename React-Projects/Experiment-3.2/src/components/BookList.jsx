import React from "react";
import BookCard from "./BookCard";

/**
 * Props:
 *  - books (array)
 *  - onRemove (index => void)
 */
const BookList = ({ books, onRemove }) => {
  if (!books.length) return <p className="empty">No books found.</p>;

  return (
    <div className="book-list">
      {books.map((b, i) => (
        <BookCard
          key={i}
          title={b.title}
          author={b.author}
          onRemove={() => onRemove(i)}
        />
      ))}
    </div>
  );
};

export default BookList;
