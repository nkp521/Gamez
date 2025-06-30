import React from "react";
import Header from "../components/Header";
import GameCard from "../components/CameCard";

const Home = ({ games }) => {
  const renderGames = () =>
    games.map((game) => <GameCard key={game.title} game={game} />);

  return (
    <div>
      <header>
        <div className="grid grid-cols-3 gap-4">{renderGames()}</div>
      </header>
    </div>
  );
};

export default Home;
