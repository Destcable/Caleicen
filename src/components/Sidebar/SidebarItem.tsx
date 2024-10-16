import { FC, ReactNode } from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export interface SidebarItemProps {
    children: ReactNode;
    label: string;
    onClick: (value: string) => void;
    value: string;
    icon?: () => JSX.Element;  // Передаем компонент иконки
    iconSize?: number;         // Размер иконки
    isActive?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = ({
    label,
    value,
    onClick,
    icon: IconComponent,
    isActive = false
}) => {
    return (
        <ListItemButton
            selected={isActive}
            onClick={() => onClick(value)}
        >
            {IconComponent &&
                <ListItemIcon>
                    <IconComponent />
                </ListItemIcon>
            }
            <ListItemText primary={label} />
        </ListItemButton>
    );
};