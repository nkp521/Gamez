import React from "react";
import { useForm } from 'react-hook-form'

const SearchBar = ({ setSearchedGame }: { setSearchedGame: (value: string) => void }) => {

  const { register } = useForm()

  return (
    <input
      {...register("search", {
        onChange: (e) => setSearchedGame(e.target.value)
      })}
      type="text"
      placeholder="Search games..."
      className="w-full max-w-xs px-3 py-1.5 text-sm text-gray-900 placeholder-gray-500 bg-white border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
    />
  );
};

export default SearchBar;
