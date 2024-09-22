import { FC, ReactNode } from "react";

interface SidebarItemProps {
    children: ReactNode
    isActive?: boolean
}

export const SidebarItem: FC<SidebarItemProps> = ({
    children,
    isActive = false
}) => (
    <button 
        className={`flex items-center w-full gap-2 text-sm text-left py-2 px-4 
            ${isActive && 'bg-gray-100 rounded-lg'}
        `}
        style={{ color: `${!isActive && '#777776'}`}}
    >
        {children}
    </button>
);