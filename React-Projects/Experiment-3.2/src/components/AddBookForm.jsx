import React from "react";
const AddBookForm = ({
  title,
  author,
  onTitleChange,
  onAuthorChange,
  onAdd,
}) => {
  return (
    <div className="form">
      <input
        className="input"
        type="text"
        placeholder="New book title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        className="input"
        type="text"
        placeholder="New book author"
        value={author}
        onChange={(e) => onAuthorChange(e.target.value)}
      />
      <button
        className="btn"
        onClick={onAdd}
        disabled={!title.trim() || !author.trim()}
      >
        Add Book
      </button>
    </div>
  );
};

export default AddBookForm;
