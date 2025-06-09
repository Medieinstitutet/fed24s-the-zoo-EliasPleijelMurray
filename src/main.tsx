import { StrictMode, useReducer } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router";
import { AnimalContext } from "./contexts/AnimalContext";


createRoot(document.getElementById("root")!).render(

const [animals, dispatch] = useReducer(animalReducer, []);

<StrictMode>
    <AnimalContext.Provider value={{ animals, dispatch}}>
      <RouterProvider router={router}></RouterProvider>
    </AnimalContext.Provider>
  </StrictMode>
);
