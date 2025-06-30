import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import FavoriteGames from "./pages/FavoriteGames";
import SubmitGames from "./pages/SubmitGames";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/favorite-games", element: <FavoriteGames /> },
      { path: "/submit-game", element: <SubmitGames /> },
    ],
  },
]);

export default routes;
