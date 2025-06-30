import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Header from "./Header";

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/embed.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  console.log(games);

  return (
    <>
      <Header />
      <Outlet context={{ games }} />
    </>
  );
};

export default App;
