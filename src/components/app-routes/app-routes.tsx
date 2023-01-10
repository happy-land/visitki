import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../../pages';
import { Layout } from '../layout/layout';

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/profile' element={<div>Страница профиля</div>}/>
        </Route>
      </Routes>
    </div>
  )
}