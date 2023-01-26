import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '../app-routes/app-routes';

const App: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
