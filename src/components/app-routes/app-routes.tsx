import {
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import { LoginPage, DetailPage, HomePage, MapPage, FormPage, AdminPage } from '../../pages';
import { Layout } from '../layout/layout';
import { useState, useEffect } from 'react';
import { AdminCommentsList } from '../admin-comments-list/admin-comments-list';
import { AdminStudentsList } from '../admin-students-list/admin-students-list';


import ProtectedRoutes from '../protected-routes';

export const AppRoutes = () => {
  const navigate = useNavigate();

  const [jwt, setJwt] = useState(null);


  //тестовые данные, которые приходят с сервера
  const student = {
    email: 'Chaim.Armstrong@gmail.com',
    cohort: 'web+16',
    _id: 'a18ca3c1e13dd93ddded5bbc',
    createdAt: 1669856400806,
    updatedAt: null,
    name: 'Ricky Fadel',
    photo: "https://placehold.co/600",
    tag: 'student',
  };

  const curator = {
    email: 'Chaim.Armstrong@gmail.com',
    cohort: 'web+16',
    _id: 'a18ca3c1e13dd93ddded5bbc',
    createdAt: 1669856400806,
    updatedAt: null,
    name: 'Ricky Curator',
    photo: "https://placehold.co/600",
    tag: 'curator',
  };

  useEffect(() => {
    //выбираем роль вручную, записываем student или curator
    localStorage.setItem('user', JSON.stringify(curator));

    if (/access_token=([^&]+)/.test(document.location.hash)) {
      const reg: any = /access_token=([^&]+)/;
      setJwt(reg.exec(document.location.hash)[1]);
      localStorage.setItem('token', reg.exec(document.location.hash)[1]);
      let user: any
      const _user = localStorage.getItem("user")
	    if (_user) {
		    user = JSON.parse(_user)
	    }
      if(user.tag === "student") {
        navigate('/')
      } else {
        navigate('/admin')
      }
  }}, []);


  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/** Public Route */}
          <Route path='/login' element={<LoginPage />} />

          {/** Protected Routes - будут разделены позже */}
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path='/detail/:id' element={<DetailPage />} />
            <Route path='/map' element={<MapPage />} />
            <Route path="/form" element={<FormPage />} />
          </Route>
            
          <Route path='/admin' element={<ProtectedRoutes  />}>
            <Route path="/admin/" element={<AdminPage />}>
              <Route path="/admin/" element={<AdminCommentsList />} />
              <Route path='/admin/users' element={<AdminStudentsList />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
