import { FC, ReactNode } from "react";

export interface SidebarItemProps {
    children: ReactNode
    onClick: (value: string) => void
    value: string
    isActive?: boolean
}

export const SidebarItem: FC<SidebarItemProps> = ({
    children,
    value,
    onClick,
    isActive = false
}) => {
    return <button
        className={`flex items-center w-full gap-2 text-sm text-left py-2 px-4 
        ${isActive && 'bg-gray-100 rounded-lg'}
    `}
        style={{ color: `${!isActive && '#777776'}` }}
        onClick={() => onClick(value)}
    >
        {children}
    </button>
}