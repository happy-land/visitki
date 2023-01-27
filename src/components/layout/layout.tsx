import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer"


export const Layout: FC = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}