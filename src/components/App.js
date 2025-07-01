import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";

const App = () => {
  const [games, setGames] = useState([]);
  const [favoritedGames, setFavoritedGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  const handleFavorite = (game) =>
    setFavoritedGames((prev) =>
      prev.some((g) => g.id === game.id)
        ? prev.filter((g) => g.id !== game.id)
        : [...prev, game]
    );

  console.log(favoritedGames);

  return (
    <>
      <Header />
      <Outlet
        context={{ games, favoritedGames, setFavoritedGames, handleFavorite }}
      />
    </>
  );
};

export default App;
