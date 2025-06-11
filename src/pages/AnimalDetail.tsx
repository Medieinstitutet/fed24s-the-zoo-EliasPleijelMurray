import { Link, useParams } from "react-router";
import type { Animal } from "../models/Animal";
import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";

export const AnimalDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { animals } = useContext(AnimalContext);
  const animal: Animal | undefined = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return <p>Djur med ID "{id}" kunde inte hittas.</p>;
  }

  return (
    <div>
      <h1>{animal.name}</h1>
      <h2>"{animal.latinName}"</h2>
      <img src={animal.imageUrl} alt={animal.name} />
      <p>{animal.longDescription}</p>
      <Link to={"/animals"}>← Tillbaka</Link>
    </div>
  );
};
