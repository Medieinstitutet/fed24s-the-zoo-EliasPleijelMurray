import { Link } from "react-router";
import type { Animal } from "../models/Animal";

type AnimalPresentationProps = {
  animal: Animal;
};

export const AnimalPresentation = ({ animal }: AnimalPresentationProps) => {
  return (
    <>
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col items-center p-6 space-y-4">
          <h1 className="text-2xl font-extrabold text-center">{animal.name}</h1>
          <h2 className="text-lg italic text-gray-500 text-center">
            "{animal.latinName}"
          </h2>

          <p className="text-left text-gray-700">{animal.shortDescription}</p>

          <img
            src={animal.imageUrl}
            alt={animal.name}
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />

          <Link
            to={`/animal/${animal.id}`}
            className="inline-block px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg transition"
          >
            Läs mer om {animal.name}
          </Link>
        </div>
      </div>
    </>
  );
};
