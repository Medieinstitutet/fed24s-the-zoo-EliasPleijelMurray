import { useState, useEffect } from "react";
import { fetchAllAnimals } from "../services/animalService";
import type { Animal } from "../models/Animal";

export function useFetchAnimals() {
  const [data, setData] = useState<Animal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      setIsLoading(true);
      try {
        const animals = await fetchAllAnimals();
        if (isMounted) setData(animals);
      } catch (err: any) {
        if (isMounted) setError(err.message || "Något gick fel");
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading, error };
}
