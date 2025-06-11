import axios from "axios";
import type { Animal } from "../models/Animal";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export const fetchAllAnimals = async () => {
  const response = await axios.get<Animal[]>(BASE_URL);
  return response.data;
};

export const fetchAnimalById = async (id: number) => {
  const response = await axios.get<Animal>(`${BASE_URL}/${id}`);
  return response.data;
};
