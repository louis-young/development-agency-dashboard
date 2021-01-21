import React from "react";

import "./Search.scss";

const Search = ({ search, setSearch, placeholder }) => {
  return (
    <input
      name="search"
      type="text"
      className="search"
      placeholder={placeholder}
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
  );
};

export default Search;
