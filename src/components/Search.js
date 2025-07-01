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
      className="w-full max-w-md mx-auto block p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
    />
  );
};

export default SearchBar;
