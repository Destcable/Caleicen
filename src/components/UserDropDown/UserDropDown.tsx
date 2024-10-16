import { FC } from "react";
import { Menu, MenuItem, Typography, Divider, Box } from "@mui/material";

interface UserDropDownProps {
    open: boolean;
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

export const UserDropDown: FC<UserDropDownProps> = ({ open, anchorEl, onClose }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: '220px',
                    boxShadow: 1,
                    borderRadius: 2,
                    mt: 1,
                    zIndex: 10,
                    bgcolor: 'background.paper',
                },
            }}
        >
            <Box sx={{ px: 2, py: 1.5, backgroundColor: 'background.paper' }}>
                <Typography variant="body1" color="text.primary">Artem Pavlov</Typography>
                <Typography variant="body2" color="text.secondary" noWrap>artmobpavlov21@gmail.com</Typography>
            </Box>
            <Divider />
            <MenuItem onClick={onClose}>Настройки</MenuItem>
            <MenuItem onClick={onClose}>О приложении</MenuItem>
            <Divider />
            <MenuItem onClick={onClose}>Выйти</MenuItem>
        </Menu>
    );
};
