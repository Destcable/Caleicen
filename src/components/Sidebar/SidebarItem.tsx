import { FC, ReactNode } from "react";
import { Button, Box } from "@mui/material";
import { Icon } from '@mui/material';
import { SIDEBAR_ITEM_ACTIVE_COLOR, SIDEBAR_ITEM_NO_ACTIVE_COLOR } from "../../core/config/sidebar.config";

export interface SidebarItemProps {
    children: ReactNode;
    onClick: (value: string) => void;
    value: string;
    icon?: () => JSX.Element;  // Передаем компонент иконки
    iconSize?: number;         // Размер иконки
    isActive?: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = ({
    children,
    value,
    onClick,
    icon: IconComponent,       // Переименуем в IconComponent для удобства
    iconSize = 24,             // По умолчанию 24px, если не передан
    isActive = false
}) => {
    return (
        <Button
            fullWidth
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                textTransform: 'none',
                justifyContent: 'flex-start',
                paddingY: '8px',
                paddingX: '16px',
                color: isActive ? SIDEBAR_ITEM_ACTIVE_COLOR : SIDEBAR_ITEM_NO_ACTIVE_COLOR,
                backgroundColor: isActive ? 'rgba(0, 0, 0, 0.04)' : 'transparent',
                borderRadius: isActive ? '8px' : 'none',
                "&:hover": {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
            }}
            onClick={() => onClick(value)}
        >
            {IconComponent && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Icon
                        fontSize="inherit"
                        sx={{
                            color: isActive ? SIDEBAR_ITEM_ACTIVE_COLOR : SIDEBAR_ITEM_NO_ACTIVE_COLOR,
                        }}
                    >
                        <IconComponent /> {/* Рендерим переданный компонент */}
                    </Icon>
                </Box>
            )}
            {children}
        </Button>
    );
};
