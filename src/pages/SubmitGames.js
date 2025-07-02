import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const defaultValues = {
  title: "",
  embed: "",
  image: "",
  description: "",
};

const SubmitGames = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  const { handleNewGame } = useOutletContext();

  const handleChange = ({ target: { name, value } }) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleNewGame(formValues);
    setFormValues(defaultValues);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-8 border border-purple-200">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Submission Guide
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  <strong className="text-purple-600">Game Name:</strong> Add
                  the Game Name
                </p>
                <p>
                  <strong className="text-purple-600">Game Link:</strong> Please
                  use an HTML5 link such as the embedded link in the games{" "}
                  <a
                    href="https://www.onlinegames.io/t/embeddable-games-for-websites/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 underline"
                  >
                    here
                  </a>
                </p>
                <p>
                  <strong className="text-purple-600">Game Image:</strong>{" "}
                  Please provide a Game Image Link
                </p>
                <p className="text-sm text-gray-600">
                  (example: https://www.xyz.com/games.jpeg)
                </p>
                <p>
                  <strong className="text-purple-600">Game Description:</strong>{" "}
                  Please include a brief and detailed Game Description
                </p>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-700">
                  Game Name
                </label>
                <input
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Game Name Here"
                  className="w-full p-3 rounded-lg bg-white border border-purple-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-700">
                  Game Link
                </label>
                <input
                  name="embed"
                  value={formValues.embed}
                  onChange={handleChange}
                  type="url"
                  placeholder="Enter HTML5 Link Here"
                  className="w-full p-3 rounded-lg bg-white border border-purple-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-700">
                  Game Image
                </label>
                <input
                  name="image"
                  value={formValues.image}
                  onChange={handleChange}
                  type="url"
                  placeholder="Enter Image Link Here"
                  className="w-full p-3 rounded-lg bg-white border border-purple-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-700">
                  Game Description
                </label>
                <textarea
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enter Game Description Here"
                  className="w-full p-3 rounded-lg bg-white border border-purple-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 ="
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full p-3 text-white font-semibold rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:brightness-110 transition shadow-lg"
              >
                Submit Game
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitGames;
