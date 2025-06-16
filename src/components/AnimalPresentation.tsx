import { Link } from "react-router";
import type { Animal } from "../models/Animal";
import dayjs from "dayjs";

type AnimalPresentationProps = {
  animal: Animal;
};

export const AnimalPresentation = ({ animal }: AnimalPresentationProps) => {
  const lastFedTime = dayjs(animal.lastFed);
  const now = dayjs();

  const hoursSinceFed = now.diff(lastFedTime, "hour");
  const feedNow = hoursSinceFed >= 5;
  const feedSoon = hoursSinceFed >= 3 && hoursSinceFed < 5;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col items-center p-6 space-y-4">
        <h1 className="text-2xl font-extrabold text-center">{animal.name}</h1>
        <h2 className="text-lg italic text-gray-500 text-center">
          "{animal.latinName}"
        </h2>
        <p className="text-left text-gray-700 flex-1">
          {animal.shortDescription}
        </p>
        <img
          src={animal.imageUrl}
          alt={`Vi har tyvärr ingen bild på ${animal.name}`}
          className="w-48 h-48 object-cover rounded-lg shadow-md"
        />
      </div>

      <div className="p-6 flex flex-col">
        {feedSoon && (
          <p className="text-yellow-600 font-medium">
            Snart behöver {animal.name} matas
          </p>
        )}
        {feedNow && (
          <p className="text-red-600 font-semibold">
            {animal.name} behöver matas nu!
          </p>
        )}

        <Link
          to={`/animal/${animal.id}`}
          className={`text-center py-2 font-semibold rounded-lg transition mr-10 ml-10            ${
            feedNow
              ? "bg-amber-400 hover:bg-amber-500 text-white"
              : "bg-amber-400 hover:bg-amber-500 text-white"
          }`}
        >
          {feedNow ? `Mata ${animal.name}` : `Läs mer om ${animal.name}`}
        </Link>
      </div>
    </div>
  );
};
