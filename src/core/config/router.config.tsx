import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const CalendarDayPage = lazy(() => import("../../pages/CalendarDayPage/CalendarDayPage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="calendar/day" replace />
            },
            {
                path: 'calendar/day',
                element: <CalendarDayPage />,
            },
        ],
    },
    {
        path: 'auth',
        element: <AuthPage />
    }
]);

export default router;