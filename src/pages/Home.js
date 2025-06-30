import React from "react";
import { useOutletContext } from "react-router-dom";
import GameCard from "../components/CameCard";

const Home = () => {
  const { games } = useOutletContext();

  const renderGames = () =>
    games.map((game) => <GameCard key={game.id} game={game} />);

  return (
    <div>
      <header>
        <div className="grid grid-cols-3 gap-4">{renderGames()}</div>
      </header>
    </div>
  );
};

export default Home;
