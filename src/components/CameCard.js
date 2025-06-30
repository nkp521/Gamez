import React, { useState } from "react";

const CameCard = ({ game }) => {
  const { description, embed, image, tags, title } = game;
  const [showDescription, setShowDescription] = useState(false);

  const descriptionToggle = () => setShowDescription(!showDescription);

  return (
    <div className="w-[364px] h-[384px] border rounded p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-[192px] object-cover rounded"
      />
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <button onClick={descriptionToggle}>Game Details</button>
      {showDescription && <p>{description}</p>}
    </div>
  );
};

export default CameCard;
