import { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import { SIDEBAR_BACKGROUND_COLOR } from "../../core/config/sidebar.config";

interface SidebarWrapperProps { 
    children?: ReactNode;
}

export const SidebarWrapper: FC<SidebarWrapperProps> = ({ children }) => (
    <Box
        sx={{
            width: '15rem',
            backgroundColor: SIDEBAR_BACKGROUND_COLOR,
            padding: 2,
            borderRight: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}
    >
        {children}
    </Box>
);
