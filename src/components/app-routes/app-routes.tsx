import {
  NavigationType,
  Route,
  Routes,
  useNavigate,
  useResolvedPath,
} from 'react-router-dom';
import { LoginPage, DetailPage, HomePage, MapPage, FormPage } from '../../pages';
import { Layout } from '../layout/layout';
import { useState, useEffect } from 'react';

import ProtectedRoutes from '../protected-routes';
import { userInfo } from 'os';
import userEvent from '@testing-library/user-event';

import { AdminPage } from '../../pages/AdminPage/AdminPage';

export const AppRoutes = () => {
  const navigate = useNavigate();

  const [jwt, setJwt] = useState(null);


  //тестовые данные, которые приходят с сервера
  const student = {
    email: 'Chaim.Armstrong@gmail.com',
    cohort: 'web+16',
    _id: '2cb3baaa7528a9bb5e2c20d9',
    createdAt: 1669856400806,
    updatedAt: null,
    name: 'Ricky Fadel',
    tag: 'student',
  };

  const curator = {
    email: 'I71H@VArJZgkhjEHavZtMuiasmnSmchejephX.qack',
    _id: '507f1f77bcf86cd799439011',
    createdAt: 1671899493440,
    updatedAt: 1671899493440,
    name: 'amet in tempor',
    tag: 'curator',
  };

  useEffect(() => {
    //выбираем роль вручную, записываем student или curator
    localStorage.setItem('user', JSON.stringify(student));

    if (/access_token=([^&]+)/.test(document.location.hash)) {
      const reg: any = /access_token=([^&]+)/;
      setJwt(reg.exec(document.location.hash)[1]);
      localStorage.setItem('token', reg.exec(document.location.hash)[1]);
      navigate('/');
    }
  }, []);
  console.log(jwt);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/** Public Route */}
          <Route path='/login' element={<LoginPage />} />

          {/** Protected Routes - будут разделены позже */}
          <Route path='/' element={<ProtectedRoutes roleRequired={'student' || 'curator'} />}>
            <Route path='/' element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path='/detail/:id' element={<DetailPage />} />
            <Route path='/map' element={<MapPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/admin/users' element={<div>Страница списка студентов</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
