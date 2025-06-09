import type { Animal } from "../models/Animal";

const BASE_URL = "https://animals.azurewebsites.net/api/animals";

export async function fetchAllAnimals(): Promise<Animal[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function fetchAnimalById(id: string): Promise<Animal> {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
