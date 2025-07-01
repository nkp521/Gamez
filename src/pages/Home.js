import React from "react";
import { useOutletContext } from "react-router-dom";
import GameCard from "../components/CameCard";

const Home = () => {
  const { games, searchedGame } = useOutletContext();

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchedGame.toLowerCase())
  );

  const renderGames = () =>
    filteredGames.map((game) => <GameCard key={game.id} game={game} />);

  return (
    <div>
      <header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
          {renderGames()}
        </div>
      </header>
    </div>
  );
};

export default Home;
