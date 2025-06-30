import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";

const App = () => {
  const [games, setGames] = useState([]);
  const [favoritedGame, setFavoritedGame] = useState([]);

  useEffect(() => {
    fetch("/embed.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  const handleFavorite = (game) =>
    setFavoritedGame((prev) =>
      prev.some((g) => g.id === game.id)
        ? prev.filter((g) => g.id !== game.id)
        : [...prev, game]
    );

  console.log(favoritedGame);

  return (
    <>
      <Header />
      <Outlet
        context={{ games, favoritedGame, setFavoritedGame, handleFavorite }}
      />
    </>
  );
};

export default App;
