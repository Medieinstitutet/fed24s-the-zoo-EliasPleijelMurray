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

    case ActionTypes.FEED_ANIMAL: {
      const { id, fedAt } = JSON.parse(action.payload);

      return animals.map((a) => (a.id === id ? { ...a, lastFed: fedAt } : a));
    }

    default:
      return animals;
  }
};
