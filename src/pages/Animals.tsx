import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContext";
import { AnimalPresentation } from "../components/AnimalPresentation";
import { SignOut } from "../components/SignOut";

export const Animals = () => {
  const { animals } = useContext(AnimalContext);

  return (
    <>
      <SignOut />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
        {animals.map((a) => (
          <AnimalPresentation key={a.id} animal={a} />
        ))}
      </div>
    </>
  );
};
