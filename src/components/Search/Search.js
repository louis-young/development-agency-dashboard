import React from "react";

const Search = ({ search, setSearch, placeholder }) => {
  return (
    <input
      name="search"
      type="text"
      placeholder={placeholder}
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
};

export default Search;
