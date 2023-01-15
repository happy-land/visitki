import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Footer } from "../footer/footer"
import {Button} from "../../ui/button/button";

export const Layout: FC = () => {

  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
        <Button type='primary' children='Large' size='large'/>
        <Button type='primary' children='Large Disabled' size='large' disabled/>
        <Button type='primary' children='Small' size='small'/>
        <Button type='primary' children='Small Disabled' size='small' disabled/>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}