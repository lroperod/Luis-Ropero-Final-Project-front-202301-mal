import { createBrowserRouter } from 'react-router-dom';
import CreateFormPage from '../pages/CreateForm/CreateFormPage';
import { HomePage } from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import { TravelPage } from '../pages/MyTravels/TravelPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/travel-form',
    element: <CreateFormPage />,
  },
  {
    path: '/travel',
    element: <TravelPage />,
  },
]);
export default router;
