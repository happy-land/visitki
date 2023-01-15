import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer"
import { ProfileList } from "../profile-list/profile-list";

export const Layout: FC = () => {

  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        {/* <ProfileList /> */}
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}