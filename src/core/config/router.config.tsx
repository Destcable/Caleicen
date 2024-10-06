import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { APP_ROUTE_LOGIN, APP_ROUTE_MAIN } from "./app.config";

const CalendarDayPage = lazy(() => import("../../pages/CalendarDayPage/CalendarDayPage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to={APP_ROUTE_MAIN} replace />
            },
            {
                path: 'calendar/day',
                element: <CalendarDayPage />,
            },
        ],
    },
    {
        path: APP_ROUTE_LOGIN,
        element: <AuthPage />
    }
]);

export default router;