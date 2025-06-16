import { Link } from "react-router";

export const SignOut = () => {
  return (
    <div className="h-20 flex items-center justify-end">
      <Link
        to={"/"}
        className="bg-green-500 p-2 rounded-md mr-5 hover:bg-green-600 text-white font-semibold transition"
      >
        Lämna Zoo
      </Link>
    </div>
  );
};
