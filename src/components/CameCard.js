import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const CameCard = ({ game }) => {
  const { description, embed, image, title, id } = game;
  const { favoritedGames, handleFavorite } = useOutletContext();

  const [showDescription, setShowDescription] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const toggleDescription = () => setShowDescription(!showDescription);
  const toggleGame = () => setShowIframe(!showIframe);

  return (
    <div className="bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-xl p-5 w-[350px] mx-auto flex flex-col items-center border border-white/20 hover:scale-105 transition-all duration-300">
      <p
        className="w-full flex justify-end text-2xl mb-2 cursor-pointer"
        onClick={() => handleFavorite(game)}
      >
        {favoritedGames.some((favoritedGame) => favoritedGame.id === game.id)
          ? "🩷"
          : "♡"}
      </p>
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-contain rounded-xl mb-3 bg-white/10 p-2"
      />
      <h2 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text mb-3 text-center">
        {title}
      </h2>
      <div className="flex flex-col gap-2 w-full">
        <button
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-md font-semibold hover:brightness-110 transition"
          onClick={toggleGame}
        >
          Play Game
        </button>
        <button
          className="border border-pink-400 text-pink-300 py-2 rounded-md font-semibold hover:bg-pink-500 hover:text-white transition"
          onClick={toggleDescription}
        >
          Game Details
        </button>
      </div>
      {showDescription && (
        <p className="mt-3 text-sm text-white/80 text-center">{description}</p>
      )}
      {showIframe && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] z-50 bg-white border border-white/20 rounded-xl shadow-2xl flex flex-col">
          <div className="relative w-full max-w-5xl h-[75vh]">
            <iframe
              src={embed}
              className="w-full h-full rounded-t-xl"
              allowFullScreen
            />
            <button
              className="bg-red-500 text-white text-sm px-4 py-2 rounded-b-xl hover:bg-red-600 transition"
              onClick={toggleGame}
            >
              Close Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameCard;
