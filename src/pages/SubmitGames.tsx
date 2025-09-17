import React from "react";
import { useOutletContext } from "react-router-dom";
import { useForm } from 'react-hook-form'

type FormValues = {
  title: string,
  embed: string
  image: string,
  description: string
};

const SubmitGames = () => {
  const { handleNewGame, games } = useOutletContext<any>();
  const { register, handleSubmit, reset, formState: { errors, isDirty, isValid } } = useForm<FormValues>({
    defaultValues: {
      title: "",
      embed: "",
      image: "",
      description: ""
    }
  })

  const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;

  const onSubmit = (data: FormValues) => {
    handleNewGame(data);
    reset();
  }

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

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-700">
                  Game Name
                </label>
                <input
                  {...register("title", { required: {value: true, message: "Title is required"} })}
                  type="text"
                  placeholder="Enter Game Name Here"
                  className="w-full p-3 rounded-lg bg-white border border-purple-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                />
                <p className="text-red-500 text-sm mt-1">{errors.title?.message}</p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-700">
                  Game Link
                </label>
                <input
                  {...register("embed", { 
                    required: "Game link is required",
                    pattern: {
                      value: urlPattern,
                      message: "Enter a valid URL"
                    },
                    validate: (fieldValue: string) => {
                      const duplicateGame = games.some((game: any) => 
                        game.embed === fieldValue
                      );
                      return duplicateGame ? "Game already exists" : undefined;
                    }
                  })}
                  type="url"
                  placeholder="Enter HTML5 Link Here"
                  className="w-full p-3 rounded-lg bg-white border border-purple-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                />
                <p className="text-red-500 text-sm mt-1">{errors.embed?.message}</p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-700">
                  Game Image
                </label>
                <input
                  {...register("image", { 
                    required: "Image link is required",
                    pattern: {
                      value: urlPattern,
                      message: "Enter a valid URL"
                    }
                  })}
                  type="url"
                  placeholder="Enter Image Link Here"
                  className="w-full p-3 rounded-lg bg-white border border-purple-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                />
                <p className="text-red-500 text-sm mt-1">{errors.image?.message}</p>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-purple-700">
                  Game Description
                </label>
                <textarea
                  {...register("description", { required: {value: true, message: "Description is required"}})}
                  rows={3}
                  placeholder="Enter Game Description Here"
                  className="w-full p-3 rounded-lg bg-white border border-purple-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                ></textarea>
                <p className="text-red-500 text-sm mt-1">{errors.description?.message}</p>
              </div>

              <button
                disabled={!isDirty || !isValid}
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
