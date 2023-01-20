import { Route, Routes } from "react-router-dom";
import { LoginPage, DetailPage, HomePage } from "../../pages";
import { Layout } from "../layout/layout";
import { useState, useEffect } from "react";
export const AppRoutes = () => {
  const [jwt, setJwt] = useState(null);

  useEffect(() => {
    if (/access_token=([^&]+)/.test(document.location.hash)) {
      const reg: any = /access_token=([^&]+)/;
      setJwt(reg.exec(document.location.hash)[1]);
    }
  }, []);
  console.log(jwt);

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<div>Страница профиля</div>} />
          <Route path="/detail" element={<DetailPage />} />
        </Route>
      </Routes>
    </div>
  );
};