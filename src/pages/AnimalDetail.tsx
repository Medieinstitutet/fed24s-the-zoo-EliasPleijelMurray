import { Link, useParams } from "react-router";
import type { Animal } from "../models/Animal";
import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import dayjs from "dayjs";
import { ActionTypes } from "../reducers/AnimalReducer";

export const AnimalDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { animals, dispatch } = useContext(AnimalContext);
  const animal: Animal | undefined = animals.find((a) => a.id === Number(id));

  if (!animal) {
    return <p>Djur med ID "{id}" kunde inte hittas.</p>;
  }
  const lastFedTime = dayjs(animal.lastFed);
  const now = dayjs();
  const canFeed = now.diff(lastFedTime, "hour") >= 4;
  const isNearlyTime =
    now.isAfter(lastFedTime.add(3, "hour")) &&
    now.isBefore(lastFedTime.add(4, "hour"));

  const handelClick = () => {
    dispatch({
      type: ActionTypes.FEED_ANIMAL,
      payload: JSON.stringify({
        id: animal.id,
        fedAt: now.toISOString(),
      }),
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-center">{animal.name}</h1>
        <h2 className="text-center">"{animal.latinName}"</h2>
        <img
          src={animal.imageUrl}
          alt={animal.name}
          className="w-65 h-65 object-cover rounded"
        />
        <dl className="grid grid-cols-1 gap-y-2">
          <div className="flex">
            <dt className="w-32 font-medium text-gray-600">Född</dt>
            <dd className="flex-1 text-gray-800">{animal.yearOfBirth}</dd>
          </div>
          <div className="flex">
            <dt className="w-32 font-medium text-gray-600">Mediciner</dt>
            <dd className="flex-1 text-gray-800">{animal.medicine}</dd>
          </div>
        </dl>
        <p className="text-left max-w-prose">{animal.longDescription}</p>

        {isNearlyTime && (
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 w-3xs text-center rounded">
            🕑 Snart dags att mata {animal.name}!
          </div>
        )}

        <button
          disabled={!canFeed}
          onClick={handelClick}
          className={`
        p-2 rounded text-white
        ${
          canFeed
            ? "bg-green-400 hover:bg-green-500 cursor-pointer"
            : "bg-gray-400 cursor-not-allowed"
        }
      `}
        >
          Mata {animal.name}
        </button>

        <Link to="/animals" className="text-blue-500 hover:underline">
          ← Tillbaka
        </Link>
      </div>
    </>
  );
};
