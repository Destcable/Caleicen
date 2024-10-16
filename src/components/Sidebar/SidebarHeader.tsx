import { Typography, Box } from "@mui/material";
import { APP_NAME } from "../../core/config/app.config";
import { IconApp } from "../IconApp/IconApp";

export const SidebarHeader = () => (
    <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '24px', // Эквивалент mb-6
        }}
    >
        <IconApp size={16} />
        <Typography
            sx={{ 
                marginLeft: '8px', 
                fontSize: '1.125rem',  // 18px
                lineHeight: '1.75rem', // 28px
            }}
        >
            {APP_NAME}
        </Typography>
    </Box>
);
