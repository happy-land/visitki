import {
  NavigationType,
  Route,
  Routes,
  useNavigate,
  useResolvedPath,
} from 'react-router-dom';
import { LoginPage, DetailPage, HomePage, MapPage } from '../../pages';
import { Layout } from '../layout/layout';
import { useState, useEffect } from 'react';

import ProtectedRoutes from '../protected-routes';
import { userInfo } from 'os';
import userEvent from '@testing-library/user-event';

import { AdminPage } from '../../pages/AdminPage/AdminPage';

export const AppRoutes = () => {
  const navigate = useNavigate();

  const [jwt, setJwt] = useState(null);
  // const location = useLocation();

  //тестовые данные, которые приходят с сервера
  const student = {
    email: 'Chaim.Armstrong@gmail.com',
    cohort: 'web+16',
    _id: 'abfccdaa23e0bd1c4448d2f3',
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

          {/** Protected Routes */}
          <Route path='/' element={<ProtectedRoutes roleRequired='student' />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/profile' element={<div>Страница профиля</div>} />
            <Route path='/map' element={<MapPage />} />
          </Route>
          <Route
            path='/'
            element={<ProtectedRoutes roleRequired={'student' || 'curator'} />}
          >
            <Route path='/detail/:id' element={<DetailPage />} />
          </Route>
          <Route path='/admin' element={<ProtectedRoutes roleRequired='curator' />}>
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/admin/users' element={<div>Страница списка студентов</div>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
