import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const GameCard = ({ game }) => {
  const { description, embed, image, title } = game;
  const { favoritedGames, handleFavorite } = useOutletContext();

  const [showDescription, setShowDescription] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const toggleDescription = () => setShowDescription(!showDescription);
  const toggleGame = () => setShowIframe(!showIframe);

  return (
    <>
      <div className="self-start bg-white/10 backdrop-blur-md text-white rounded-2xl shadow-xl p-4 w-[320px] mx-auto flex flex-col items-center border border-white/20 hover:scale-105 transition-all duration-300">
        <div className="w-full flex justify-end">
          <p
            className="text-2xl cursor-pointer text-slate-400 hover:text-pink-400 transition"
            onClick={() => handleFavorite(game)}
          >
            {favoritedGames.some(
              (favoritedGame) => favoritedGame.id === game.id
            )
              ? "🩷"
              : "♡"}
          </p>
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-xl mb-2 bg-white/10"
        />
        <h2 className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text mb-3 text-center">
          {title}
        </h2>
        <div className="flex flex-col gap-2 w-full">
          <button
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-1.5 rounded-md font-semibold hover:brightness-110 transition"
            onClick={toggleGame}
          >
            Play Game
          </button>
          <button
            className="border border-pink-400 text-pink-300 py-1.5 rounded-md font-semibold hover:bg-pink-500 hover:text-white transition"
            onClick={toggleDescription}
          >
            Game Details
          </button>
        </div>
        {showDescription && (
          <p className="mt-2 text-sm leading-snug text-purple-500 text-center">
            {description}
          </p>
        )}
      </div>

      {showIframe && (
        <>
          <div
            className="fixed inset-0 bg-black z-[9998]"
            onClick={toggleGame}
          ></div>

          <div className="fixed inset-0 z-[9999] bg-black">
            <div className="relative w-full h-full">
              <iframe src={embed} className="w-full h-full" allowFullScreen />
              <button
                className="absolute top-4 right-4 bg-red-500 text-white text-sm px-4 py-1.5 rounded-md hover:bg-red-600 transition z-[10000]"
                onClick={toggleGame}
              >
                Close Game
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GameCard;
