import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
