import { Suspense, useState } from "react";
import { Box } from "@mui/material";
import { sidebarItemsOptions } from "../../core/config/sidebarItemsOptions.config";
import { Sidebar } from "../Sidebar/Sidebar";
import { SidebarItem } from "../Sidebar/SidebarItem";
import { SidebarItems } from "../Sidebar/SidebarItems";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { APP_ROUTE_LOGIN } from "../../core/config/app.config";
import { useQuery } from "@apollo/client";
import { VERIFY_USER_QUERY } from "../../core/api/auth/verifyUserQuery";
import { LoadingIcon } from "../../assets/icons/LoadingIcon";
import { getStorageAuth } from "../../core/storage/getStorageAuth";

const Layout = () => {
    const [selectedSidebarItem, setSelectedSidebarItem] = useState<string>("Dashboard");
    const navigate = useNavigate();
    const { userToken } = getStorageAuth();
    const { data, loading } = useQuery(VERIFY_USER_QUERY, { variables: { input: { token: userToken } } });

    if (loading) return <LoadingIcon />;

    const handleClickSidebarItem = (value: string) => { 
        setSelectedSidebarItem(value);
        if (value === "Dashboard") navigate('/');
        if (value === "Calendar") navigate('/calendar/day');
    };

    const items = sidebarItemsOptions.map((item, index) => (
        <SidebarItem
            key={index}
            value={item.value}
            icon={item.icon}
            iconSize={item.iconSize}
            onClick={handleClickSidebarItem}
        >
            {item.label}
        </SidebarItem>
    ));

    const SidebarItemsList = (
        <SidebarItems value={selectedSidebarItem}>
            {items}
        </SidebarItems>
    );

    if (!data?.data?.status) return <Navigate to={APP_ROUTE_LOGIN} replace />;

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Sidebar items={SidebarItemsList} />
            <Box sx={{ flex: 1, padding: 3 }}>
                <Suspense fallback={<LoadingIcon />}>
                    <Outlet />
                </Suspense>
            </Box>
        </Box>
    );
};

export default Layout;
