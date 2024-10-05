import { RouterProvider } from 'react-router-dom';
import router from './core/config/router.config';

export const App = () => {

    // TODO: решить какую библиотеку лучше использовать для работы со временем { Moment.js, Globalize.js, date-fns, Day.js }
    return <RouterProvider router={router} />
};