import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
]);
export default router;
