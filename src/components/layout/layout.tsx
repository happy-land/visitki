import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer"
import {Button} from "../../ui/button/button";
import {AdminStudentsList} from '../../components/admin-students-list/admin-students-list'
import {AdminCommentsList} from '../../components/admin-comments-list/admin-comments-list'

export const Layout: FC = () => {

  return (
    <div>
      <div>
        <Header />
      </div>
           <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}