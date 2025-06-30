import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorite-games">Favorite Games</NavLink>
      <NavLink to="/submit-game">Submit Game</NavLink>
    </nav>
  );
};

export default Header;
