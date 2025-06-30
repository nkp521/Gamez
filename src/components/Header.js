import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2">NKP's Arcade</h1>
      <div className="flex gap-6">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/favorite-games" className="hover:underline">
          Favorite Games
        </NavLink>
        <NavLink to="/submit-game" className="hover:underline">
          Submit Game
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
