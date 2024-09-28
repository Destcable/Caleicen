import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SidebarItem } from './components/Sidebar/SidebarItem';
import { Icon } from './components/Icon/Icon';
import { CalendarIcon } from './assets/icons/CalendarIcon';
import { InboxIcon } from './assets/icons/InboxIcon';
import { SettingsIcon } from './assets/icons/SettingsIcon';
import { SidebarItems } from './components/Sidebar/SidebarItems';

export const App: React.FC = () => {
    const [selectedSidebarItem, setSelectedSidebarItem] = useState<string>("Calendar");

    const handleClickSidebarItem = (value: string) => setSelectedSidebarItem(value);

    const SidebarItemsList = <SidebarItems value={selectedSidebarItem}>
        <SidebarItem
            value="Calendar"
            onClick={handleClickSidebarItem}
        >
            <Icon icon={CalendarIcon} size={14} /> Календарь
        </SidebarItem>

        <SidebarItem
            value="Inbox"
            onClick={handleClickSidebarItem}
        >
            <Icon icon={InboxIcon} size={15} color="#777776" /> Входящие
        </SidebarItem>

        <SidebarItem
            value="Settings"
            onClick={handleClickSidebarItem}
        >
            <Icon icon={SettingsIcon} size={18} color="#777776" /> Настройки
        </SidebarItem>
    </SidebarItems>;

    return (
        <div className="flex h-screen">
            <Sidebar
                items={SidebarItemsList}
            />


            <div className="flex-1 p-4">

            </div>
        </div>
    );
};