import { Animals } from "../pages/Animals";

export enum ActionTypes {
  FEED_ANIMAL,
}

export type Action = {
  type: ActionTypes;
  payload: string;
};

export const AnimalReducer = () => {
  return Animals;
};
