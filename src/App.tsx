import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SidebarItem } from './components/Sidebar/SidebarItem';
import { SidebarItems } from './components/Sidebar/SidebarItems';
import { sidebarItemsOptions } from './core/config/sidebarItemsOptions.config';
import { CalendarDayView } from './components/Calendar/Calendar';
import { TIMES_CALENDAR } from './core/config/times.config';

export const App: React.FC = () => {
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
                <CalendarDayView times={TIMES_CALENDAR}/>
            </div>
        </div>
    );
};