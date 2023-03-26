import { createBrowserRouter } from 'react-router-dom';
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
    // children:[
    // //   {
    // //     path
    // //   }
    // // ]
  },
  {
    path: '/travel',
    element: <TravelPage />,
  },
]);
export default router;
