import { createContext, type Dispatch } from "react";
import type { Animal } from "../models/Animal";
import type { Action } from "../reducers/AnimalReducer";

interface IAnimalContexts {
  animals: Animal[];
  dispatch: Dispatch<Action>;
}

export const AnimalContext = createContext<IAnimalContexts>({
  animals: [],
  dispatch: () => {},
});
