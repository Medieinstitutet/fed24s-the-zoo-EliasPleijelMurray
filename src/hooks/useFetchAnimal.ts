// src/hooks/useFetchAnimal.ts
import { useState, useEffect } from "react";
import { fetchAnimalById } from "../services/animalService";
import type { Animal } from "../models/Animal";

export function useFetchAnimal(id: string) {
  const [data, setData] = useState<Animal | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;
    async function load() {
      setIsLoading(true);
      try {
        const animal = await fetchAnimalById(id);
        if (isMounted) setData(animal);
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
  }, [id]);

  return { data, isLoading, error };
}
