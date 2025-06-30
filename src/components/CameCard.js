import React from "react";

const CameCard = ({ game }) => {
  const { description, embed, image, tags, title } = game;

  return (
    <div className="w-[364px] h-[384px] border rounded p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-[192px] object-cover rounded"
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default CameCard;
