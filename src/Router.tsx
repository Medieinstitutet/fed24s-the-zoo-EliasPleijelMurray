import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { AnimalDetail } from "./pages/AnimalDetail";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "animal/:id",
        element: <AnimalDetail />,
      },
    ],
  },
]);
