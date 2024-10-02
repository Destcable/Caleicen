import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const CalendarDayPage = lazy(() => import("../../pages/CalendarDayPage/CalendarDayPage"));
// const AuthPage = lazy(() => import("@pages/Auth/AuthPage"))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'calendar/day',
                element: <CalendarDayPage />,
            },
        ],
    },
    // {
    //     path: 'auth',
    //     element: <AuthPage />
    // }
]);

export default router;