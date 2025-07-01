import React from "react";

const SearchBar = ({ searchedGame, setSearchedGame }) => {
  console.log(searchedGame, setSearchedGame);
  return (
    <input
      type="text"
      placeholder="Search games..."
      value={searchedGame}
      onChange={setSearchedGame}
      className="w-full max-w-md mx-auto block p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default SearchBar;
