import type { Animal } from "../models/Animal";

export enum ActionTypes {
  LOADED,
  FEED_ANIMAL,
}

export type Action = {
  type: ActionTypes;
  payload: string;
};

export const AnimalReducer = (animals: Animal[], action: Action) => {
  switch (action.type) {
    case ActionTypes.LOADED: {
      return JSON.parse(action.payload) as Animal[];
    }
    default:
      return animals;
  }
};
