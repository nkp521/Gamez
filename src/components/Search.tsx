import React, { useState } from "react";

const SearchBar = ({ setSearchedGame }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    setSearchedGame(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search games..."
      value={searchValue}
      onChange={handleChange}
      className="w-full max-w-xs px-3 py-1.5 text-sm text-gray-900 placeholder-gray-500 bg-white border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
    />
  );
};

export default SearchBar;
