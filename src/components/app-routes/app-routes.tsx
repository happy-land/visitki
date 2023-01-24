import { Route, Routes } from "react-router-dom";
import { LoginPage, DetailPage, HomePage, MapPage } from "../../pages";
import { Layout } from "../layout/layout";
import { useState, useEffect } from "react";
import {AdminPage} from '../../pages/AdminPage/AdminPage'

export const AppRoutes = () => {
  const [jwt, setJwt] = useState(null);
  // const location = useLocation();

  useEffect(() => {
    if (/access_token=([^&]+)/.test(document.location.hash)) {
      const reg: any = /access_token=([^&]+)/;
      setJwt(reg.exec(document.location.hash)[1]);
    }
  }, []);
  console.log(jwt);

  // useEffect(() => {
  //   console.log(location.hash);
  //   const tokenHash = location.hash.split("&")[0].split("=")[1] || null;
  //   if (tokenHash) {
  //     localStorage.setItem("access_token", tokenHash);
  //     console.log(tokenHash);
  //   }
  // }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<div>Страница профиля</div>} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </div>
  );
};