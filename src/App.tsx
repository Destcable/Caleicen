import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SidebarItem } from './components/Sidebar/SidebarItem';
import { SidebarItems } from './components/Sidebar/SidebarItems';
import { sidebarItemsOptions } from './core/config/sidebarItemsOptions.config';
import { CalendarDayView } from './components/Calendar/Calendar';
import { TIMES_CALENDAR } from './core/config/times.config';
import { Icon } from './components/Icon/Icon';
import { FilterIcon } from './assets/icons/FilterIcon';

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
                <div className="flex justify-between items-center">

                    <div>
                        <button type="button" className="inline-flex items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            <Icon icon={FilterIcon} />
                            Фильтр
                        </button>
                        <div className="inline-flex rounded-md shadow-sm">
                            <div className="flex py-2.5 px-5 text-sm text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <span>123</span>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className="inline-flex rounded-md shadow-sm mr-4" role="group">
                            <button type="button" className="px-4 py-2.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                ←
                            </button>
                            <button type="button" className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                                →
                            </button>
                        </div>
                        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            Создать
                        </button>
                    </div>
                </div>
                <CalendarDayView times={TIMES_CALENDAR} />
            </div>
        </div>
    );
};