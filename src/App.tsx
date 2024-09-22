import React from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SidebarItem } from './components/Sidebar/SidebarItem';
import { Icon } from './components/Icon/Icon';
import { CalendarIcon } from './assets/icons/CalendarIcon';
import { InboxIcon } from './assets/icons/InboxIcon';
import { SettingsIcon } from './assets/icons/SettingsIcon';

export const App: React.FC = () => {

    const SidebarItems = [
        <SidebarItem isActive>
            <Icon icon={CalendarIcon} size={14} /> Календарь
        </SidebarItem>,
        <SidebarItem>
            <Icon icon={InboxIcon} size={15} color="#777776" /> Входящие
        </SidebarItem>,
        <SidebarItem>
            <Icon icon={SettingsIcon} size={18} color="#777776" /> Настройки
        </SidebarItem>
    ];

    return (
        <div className="flex h-screen">
            <Sidebar items={SidebarItems} />

            <div className="flex-1 p-4">

            </div>
        </div>
    );
};