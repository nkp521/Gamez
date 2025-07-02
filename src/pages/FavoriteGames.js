import React from "react";
import { useOutletContext } from "react-router-dom";
import GameCard from "../components/GameCard";

const FavoriteGames = () => {
  const { favoritedGames, searchedGame } = useOutletContext();

  const filteredFavoriteGames = favoritedGames.filter((game) =>
    game.title.toLowerCase().includes(searchedGame.toLowerCase())
  );

  const renderFavoriteGames = () =>
    filteredFavoriteGames.map((game) => <GameCard key={game.id} game={game} />);

  return (
    <div>
      <header>
        <div className="flex flex-wrap justify-center gap-4">
          {renderFavoriteGames()}
        </div>
      </header>
    </div>
  );
};

export default FavoriteGames;
