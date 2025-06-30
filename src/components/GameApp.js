import React from "react";
const GameApp = () => {
  // api="https://www.onlinegames.io/media/plugins/genGames/embed.json"
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Gamez</h1>
        <div>
          <h2>Games</h2>
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
        </div>
      </header>
    </div>
  );
};

export default GameApp;
