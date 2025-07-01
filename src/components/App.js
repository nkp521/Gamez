import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";

const App = () => {
  const gameUrl = "http://localhost:3001/games";
  const favoriteUrl = "http://localhost:3001/favorites/";
  const [games, setGames] = useState([]);
  const [favoritedGames, setFavoritedGames] = useState([]);
  const [searchedGame, setSearchedGame] = useState("");

  useEffect(() => {
    fetch(gameUrl)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  const addFavoritedGame = (game) => {
    fetch(favoriteUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })
      .then((res) => res.json())
      .then((newGame) =>
        setFavoritedGames((favorites) => [...favorites, newGame])
      );
  };

  const removeFavoritedGame = (game) => {
    fetch(`${favoriteUrl}${game.id}`, {
      method: "DELETE",
    }).then(() =>
      setFavoritedGames((unfavoritedGame) =>
        unfavoritedGame.filter((g) => g.id !== game.id)
      )
    );
  };

  const handleFavorite = (game) => {
    const alreadyFavorited = favoritedGames.some((g) => g.id === game.id);
    alreadyFavorited ? removeFavoritedGame(game) : addFavoritedGame(game);
  };

  const handleNewGame = (formValues) => {
    fetch(gameUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    })
      .then((res) => res.json())
      .then((newGame) => {
        setGames([...games, newGame]);
      });
  };

  return (
    <>
      <Header />
      <Outlet
        context={{
          games,
          favoritedGames,
          setFavoritedGames,
          handleFavorite,
          handleNewGame,
          searchedGame,
          setSearchedGame,
        }}
      />
    </>
  );
};

export default App;
