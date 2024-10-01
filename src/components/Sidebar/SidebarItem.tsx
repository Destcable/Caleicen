import { FC, ReactNode } from "react";
import { Icon } from "../Icon/Icon";
import { SIDEBAR_ITEM_ACTIVE_COLOR, SIDEBAR_ITEM_NO_ACTIVE_COLOR } from "../../core/config/sidebar.config";

export interface SidebarItemProps {
    children: ReactNode
    onClick: (value: string) => void
    value: string
    icon?: () => JSX.Element
    iconSize?: number
    isActive?: boolean
}

export const SidebarItem: FC<SidebarItemProps> = ({
    children,
    value,
    onClick,
    icon,
    iconSize,
    isActive = false
}) => {
    return <button
        className={`flex items-center w-full gap-2 text-sm text-left py-2 px-4 
        ${isActive && 'bg-gray-100 rounded-lg'}
    `}
        style={{ color: `${isActive ? SIDEBAR_ITEM_ACTIVE_COLOR : SIDEBAR_ITEM_NO_ACTIVE_COLOR}` }}
        onClick={() => onClick(value)}
    >
        {icon && <Icon icon={icon} size={iconSize} color={isActive ? SIDEBAR_ITEM_ACTIVE_COLOR : SIDEBAR_ITEM_NO_ACTIVE_COLOR}/> }
        {children}
    </button>
}