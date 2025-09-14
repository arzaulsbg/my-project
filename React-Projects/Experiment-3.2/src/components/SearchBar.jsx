import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search by title or author"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
