import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Search from "./Search";

const Header = ({ setSearchedGame }: { setSearchedGame: (value: string) => void }) => {
  const location = useLocation();
  const submitGame = location.pathname === "/submit-game";

  return (
    <nav className="backdrop-blur-lg bg-white/10 text-white shadow-lg px-6 py-4 flex flex-col md:flex-row items-center justify-between sticky top-0 z-50">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 md:mb-0">
        NKP's Arcade
      </h1>
      <nav className="nav-text">
        <div className="flex gap-10 text-l font-bold tracking-wide">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-pink-400 underline underline-offset-4"
                : "text-purple-400 hover:text-pink-500 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/favorite-games"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-pink-400 underline underline-offset-4"
                : "text-purple-400 hover:text-pink-500 transition"
            }
          >
            Favorite Games
          </NavLink>
          <NavLink
            to="/submit-game"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-pink-400 underline underline-offset-4"
                : "text-purple-400 hover:text-pink-500 transition"
            }
          >
            Submit Game
          </NavLink>
        </div>
      </nav>
      <div className="w-[250px]">
        {!submitGame && <Search setSearchedGame={setSearchedGame} />}
      </div>
    </nav>
  );
};

export default Header;
