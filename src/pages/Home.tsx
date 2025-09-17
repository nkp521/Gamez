import React from "react";
import { useOutletContext } from "react-router-dom";
import GameCard from "../components/GameCard";

const Home = () => {
  const { games, searchedGame } = useOutletContext<any>();

  const filteredGames = games.filter((game: any) =>
    game.title.toLowerCase().includes(searchedGame.toLowerCase())
  );

  const renderGames = () =>
    filteredGames.map((game: any) => <GameCard key={game.id} game={game} />);

  return (
    <div>
      <header>
        <div className="flex flex-wrap justify-center gap-4">
          {renderGames()}
        </div>
      </header>
    </div>
  );
};

export default Home;
