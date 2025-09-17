import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Home from "./pages/Home";
import FavoriteGames from "./pages/FavoriteGames";
import SubmitGames from "./pages/SubmitGames";
import ErrorPage from "./pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/favorite-games", element: <FavoriteGames /> },
      { path: "/submit-game", element: <SubmitGames /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default routes;
