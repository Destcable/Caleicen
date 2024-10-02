import { RouterProvider } from 'react-router-dom';
import router from './core/config/router.config';

export const App = () => {


    return <RouterProvider router={router} />
};