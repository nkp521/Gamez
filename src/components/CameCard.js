import React, { useState } from "react";

const CameCard = ({ game }) => {
  const { description, embed, image, tags, title } = game;
  const [showDescription, setShowDescription] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const toggleDescription = () => setShowDescription(!showDescription);
  const toggleGame = () => setShowIframe(!showIframe);

  console.log(showIframe, game);

  return (
    <div className="w-[364px] border rounded p-4">
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
        <iframe
          src={embed}
          width="100%"
          height="200"
          allowFullScreen
          className="mt-2"
        />
      )}
    </div>
  );
};

export default CameCard;
