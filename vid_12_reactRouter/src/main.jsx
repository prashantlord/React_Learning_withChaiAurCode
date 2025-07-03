import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Pages/Home.jsx";
import GenderGuessr from "./Pages/GenderGuessr.jsx";
import Favriote from "./Pages/Favriote.jsx";
import RandomCats from "./Pages/RandomCats.jsx";
import Giffy from "./Pages/Giffy.jsx";
import Joke from "./Pages/Joke";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "genderguessr",
        element: <GenderGuessr />,
      },
      {
        path: "favriote",
        element: <Favriote />,
      },
      {
        path: "randomcat",
        element: <RandomCats />,
      },
      {
        path: "giffy",
        element: <Giffy />,
      },
      {
        path: "jokes",
        element: <Joke />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
