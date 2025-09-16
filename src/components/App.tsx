import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const gameUrl = "https://games-api-2wkh.onrender.com/games/";
  const favoriteUrl = "https://games-api-2wkh.onrender.com/favorites/";
  const [games, setGames] = useState<any[]>([]);
  const [favoritedGames, setFavoritedGames] = useState<any[]>([]);
  const [searchedGame, setSearchedGame] = useState("");

  useEffect(() => {
    fetch(gameUrl)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  const addFavoritedGame = (game: any) => {
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

  const removeFavoritedGame = (game: any) => {
    fetch(`${favoriteUrl}${game.id}`, {
      method: "DELETE",
    }).then(() =>
      setFavoritedGames((unfavoritedGame) =>
        unfavoritedGame.filter((g) => g.id !== game.id)
      )
    );
  };

  const handleFavorite = (game: any) => {
    const alreadyFavorited = favoritedGames.some((g) => g.id === game.id);
    alreadyFavorited ? removeFavoritedGame(game) : addFavoritedGame(game);
  };

  const handleNewGame = (formValues: any) => {
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
    <div className="min-h-screen flex flex-col">
      <Header setSearchedGame={setSearchedGame} />

      <main className="flex-grow">
        <Outlet
          context={{
            games,
            favoritedGames,
            setFavoritedGames,
            handleFavorite,
            handleNewGame,
            searchedGame,
          }}
        />
      </main>

      <Footer />
    </div>
  );
};

export default App;
