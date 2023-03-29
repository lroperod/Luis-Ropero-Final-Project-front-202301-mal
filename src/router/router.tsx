import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout.tsx/MainLayout';
import CreateFormPage from '../pages/CreateForm/CreateFormPage';
import { HomePage } from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import { TravelPage } from '../pages/MyTravels/TravelPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'travel-form',
        element: <CreateFormPage />,
      },
      {
        path: 'travel',
        element: <TravelPage />,
      },
    ],
  },
]);
export default router;
