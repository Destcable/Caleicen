import { useState } from "react";
import { sidebarItemsOptions } from "../../core/config/sidebarItemsOptions.config";
import { Sidebar } from "../Sidebar/Sidebar";
import { SidebarItem } from "../Sidebar/SidebarItem";
import { SidebarItems } from "../Sidebar/SidebarItems";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [selectedSidebarItem, setSelectedSidebarItem] = useState<string>("Calendar");

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

    return (
        <div className="flex h-screen">
            <Sidebar
                items={SidebarItemsList}
            />


            <div className="flex-1 p-4">
                <Outlet />
            </div>
        </div>
    )
};

export default Layout;