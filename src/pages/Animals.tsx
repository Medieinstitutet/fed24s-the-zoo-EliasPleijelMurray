import { useFetchAnimals } from "../hooks/useFetchAnimals";

export const Animals = () => {
  const { data: animals, isLoading, error } = useFetchAnimals();

  if (isLoading) return <div>Loading…</div>;
  if (error) return <div>Fel: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {animals.map((a) => (
        <AnimalCard key={a.id} animal={a} />
      ))}
    </div>
  );
};
