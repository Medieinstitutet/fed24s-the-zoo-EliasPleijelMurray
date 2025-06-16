import { Link } from "react-router";

const bgImageUrl =
  "https://images.unsplash.com/photo-1503919005314-30d93d07d823?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const Home = () => {
  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${bgImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-10">
        <div className="text-2xl font-bold text-white">TheZoo</div>
      </header>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Välkommen till TheZoo
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Upptäck fantastiska djur från hela världen och lär dig mer om deras
          liv.
        </p>
        <Link
          to="/animals"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-200"
        >
          Utforska djuren
        </Link>
      </div>
    </div>
  );
};
