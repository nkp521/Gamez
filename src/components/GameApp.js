import React from "react";

const GameFrame = () => {
  return (
    <div>
      <h2>Highway Traffic</h2>
      <iframe
        src="https://www.onlinegames.io/games/2022/unity/highway-traffic/index.html"
        width="1060"
        height="650"
        title="Highway Traffic"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      />
      <iframe
        src="https://www.onlinegames.io/games/2023/unity/archer-hero/index.html"
        width="640"
        height="480"
        title="Stickman Destruction"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      />
    </div>
  );
};

export default GameFrame;
