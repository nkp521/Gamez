import React from "react";
import Header from "../components/Header";
import GameCard from "../components/CameCard";

const Home = ({ games }) => {
  const renderGames = () =>
    games.map((game) => <GameCard key={game.title} game={game} />);

  return (
    <div>
      <header>
        <h1>Welcome to Gamez Central</h1>
        {renderGames()}
      </header>
    </div>
  );
};

export default Home;
