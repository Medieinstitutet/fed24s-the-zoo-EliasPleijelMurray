import { Link } from "react-router";

export const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url(/zoo-bg.jpg" }}
        className="w-screen h-screen flex justify-center items-center bg-no-repeat bg-cover"
      >
        {" "}
        <Link to={"/animals"} className="bg-green-300 p-4 rounded-md">
          Besök Zoo
        </Link>
      </div>
    </>
  );
};
