import { RouterProvider } from "react-router";
import { AnimalContext } from "./contexts/AnimalContext";
import { router } from "./Router";
import { ActionTypes, AnimalReducer } from "./reducers/AnimalReducer";
import { useEffect, useReducer } from "react";
import { fetchAllAnimals } from "./services/animalService";

export const App = () => {
  const [animals, dispatch] = useReducer(AnimalReducer, []);

  useEffect(() => {
    if (animals.length > 0) return;

    const getData = async () => {
      const animals = await fetchAllAnimals();
      dispatch({
        type: ActionTypes.LOADED,
        payload: JSON.stringify(animals),
      });
    };
    getData();
  });

  return (
    <>
      <AnimalContext.Provider value={{ animals, dispatch }}>
        <RouterProvider router={router}></RouterProvider>
      </AnimalContext.Provider>
    </>
  );
};
