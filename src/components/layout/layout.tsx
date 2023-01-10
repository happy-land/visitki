import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";

export const Layout: FC = () => {

  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}