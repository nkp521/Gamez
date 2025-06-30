import React from "react";
import { useOutletContext } from "react-router-dom";
import GameCard from "../components/CameCard";

const FavoriteGames = () => {
  const { favoritedGames } = useOutletContext();

  const renderFavoriteGames = () =>
    favoritedGames.map((game) => <GameCard key={game.id} game={game} />);

  return (
    <div>
      <header>
        <div className="grid grid-cols-3 gap-4">{renderFavoriteGames()}</div>
      </header>
    </div>
  );
};

export default FavoriteGames;
