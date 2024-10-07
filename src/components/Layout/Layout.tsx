import { useState } from "react";
import { sidebarItemsOptions } from "../../core/config/sidebarItemsOptions.config";
import { Sidebar } from "../Sidebar/Sidebar";
import { SidebarItem } from "../Sidebar/SidebarItem";
import { SidebarItems } from "../Sidebar/SidebarItems";
import { Navigate, Outlet } from "react-router-dom";
import { APP_ROUTE_LOGIN } from "../../core/config/app.config";
import { useLocalStorage } from "../../core/hooks/useLocalStorage";
import { useQuery } from "@apollo/client";
import { VERIFY_USER_QUERY } from "../../core/api/auth/verifyUserQuery";
import { LoadingIcon } from "../../assets/icons/LoadingIcon";

const Layout = () => {
    const [selectedSidebarItem, setSelectedSidebarItem] = useState<string>("Dashboard");
    const [userToken] = useLocalStorage('user-token')
    const { data, loading } = useQuery(VERIFY_USER_QUERY, { variables: { input: { token: userToken } }})
    
    if (loading) return <LoadingIcon />

    const handleClickSidebarItem = (value: string) => setSelectedSidebarItem(value);

    const items = sidebarItemsOptions.map((item, index) => <SidebarItem
        key={index}
        value={item.value}
        icon={item.icon}
        iconSize={item.iconSize}
        onClick={handleClickSidebarItem}>
        {item.label}
    </SidebarItem>)

    const SidebarItemsList = <SidebarItems value={selectedSidebarItem}>
        {items}
    </SidebarItems>;
    
    if (!data?.data?.status) return <Navigate to={APP_ROUTE_LOGIN} replace />;
    
    return (
        <div className="flex h-screen">
                <>
                    <Sidebar
                        items={SidebarItemsList}
                    />


                    <div className="flex-1 p-4">
                        <Outlet />
                    </div>
                </>
        </div>
    )
};

export default Layout;