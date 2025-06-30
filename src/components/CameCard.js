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
    <div className="w-[364px] border rounded p-4">
      <p
        className="cursor-pointer text-right w-fit ml-auto"
        onClick={() => handleFavorite(game)}
      >
        {favoritedGames.includes(game) ? "❤️" : "♡"}
      </p>
      <img
        src={image}
        alt={title}
        className="w-full max-h-[240px] object-contain mb-2"
      />
      <h2 className="text-lg font-semibold mb-1 text-center">{title}</h2>
      <button
        className="bg-blue-500 text-white text-sm px-3 py-1 rounded mx-auto block mt-2 hover:bg-blue-600 transition"
        onClick={toggleGame}
      >
        Play Game
      </button>
      <button
        className="bg-blue-500 text-white text-sm px-3 py-1 rounded mx-auto block mt-2 hover:bg-blue-600 transition"
        onClick={toggleDescription}
      >
        Game Details
      </button>
      {showDescription && <p className="mt-2">{description}</p>}
      {showIframe && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] z-50 bg-white border rounded shadow-lg flex flex-col">
          <iframe
            src={embed}
            className="w-full h-full rounded-t"
            allowFullScreen
          />
          <button
            className="bg-red-500 text-white text-sm px-3 py-2 rounded-b hover:bg-red-600 transition"
            onClick={toggleGame}
          >
            Close Game
          </button>
        </div>
      )}
    </div>
  );
};

export default CameCard;
