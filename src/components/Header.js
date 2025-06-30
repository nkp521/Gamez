import React from "react";

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex space-x-4">
        <h3>Home</h3>
        <h3>Favorite Games</h3>
        <h3>Submit Games</h3>
      </div>
    </nav>
  );
};

export default Header;
