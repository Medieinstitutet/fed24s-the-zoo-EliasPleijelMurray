import { Link } from "react-router";
import type { Animal } from "../models/Animal";

type AnimalPresentationProps = {
  animal: Animal;
};

export const AnimalPresentation = ({ animal }: AnimalPresentationProps) => {
  return (
    <>
      <div key={animal.id} className="bg-amber-200">
        <h1>{animal.name}</h1>
        <h2>"{animal.latinName}"</h2>
        <div className="text-left mb-6">
          <span>{animal.shortDescription}</span>
        </div>
        <div className="">
          <img
            src={animal.imageUrl}
            alt={animal.name}
            // className="block mx-auto w-60 h-60 object-cover rounded-lg mb-6"
          />
        </div>

        <Link to={`/animal/${animal.id}`}>Läs mer om {animal.name}</Link>
      </div>
    </>
  );
};
