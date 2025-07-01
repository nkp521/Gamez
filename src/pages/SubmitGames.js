const SubmitGames = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Submission Guide
            <br />
          </h2>
          <div className="dark:text-gray-600 font-bold">
            <br />
            Game Name: Add the Game Name
            <br />
            <br />
            Game Link: Please use an HTML5 link such as the embeeded link in the
            games{" "}
            <a
              href="https://www.onlinegames.io/t/embeddable-games-for-websites/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              here
            </a>
            <br />
            <br />
            Game Description: Please include a brief and detailed Game
            Description
          </div>
        </div>
      </div>
      <form noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Game Name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="link" className="text-sm">
            Game Link
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded dark:bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Game Description
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded dark:bg-gray-100"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
        >
          Submit Game
        </button>
      </form>
    </div>
  );
};

export default SubmitGames;
