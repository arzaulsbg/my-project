import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import AddBookForm from "./AddBookForm";
import BookList from "./BookList";

/**
 * Main container: manages state and passes handlers down.
 */
const LibraryManagement = () => {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // add book
  const addBook = () => {
    const title = newTitle.trim();
    const author = newAuthor.trim();
    if (!title || !author) return;

    setBooks((prev) => [...prev, { title, author }]);
    setNewTitle("");
    setNewAuthor("");
  };

  // remove by index
  const removeBook = (index) => {
    setBooks((prev) => prev.filter((_, i) => i !== index));
  };

  // filter
  const filteredBooks = books.filter((b) => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return true;
    return (
      b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
    );
  });

  return (
    <div className="container">
      <Header title="Library Management" />

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <AddBookForm
        title={newTitle}
        author={newAuthor}
        onTitleChange={setNewTitle}
        onAuthorChange={setNewAuthor}
        onAdd={addBook}
      />

      <BookList books={filteredBooks} onRemove={removeBook} />
    </div>
  );
};

export default LibraryManagement;
