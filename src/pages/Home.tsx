import { Link } from "react-router";

export const Home = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url(/zoo-bg.jpg" }}
        className="w-screen h-screen flex justify-center items-center bg-no-repeat bg-cover"
      >
        {" "}
        <Link
          to={"/animals"}
          className="bg-green-500 p-2 rounded-md mr-5 hover:bg-green-600 text-white font-semibold transition"
        >
          Besök Zoo
        </Link>
      </div>
    </>
  );
};
