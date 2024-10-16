import { useState } from "react";
import { UserDropDown } from "../UserDropDown/UserDropDown";
import { Avatar, Box, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export const SidebarUserInfo = () => {

    const [isOpenUserDropDown, setOpenUserDropDown] = useState<boolean>(false);
    const handleClick = () => setOpenUserDropDown(!isOpenUserDropDown);

    return (
        <>
            <UserDropDown open={isOpenUserDropDown} />
            <Box
                display="flex"
                alignItems="center"
                sx={{ mt: 'auto', cursor: 'pointer' }}
                onClick={handleClick}
            >
                <Avatar sx={{ bgcolor: deepOrange[500], width: 40, height: 40 }}>AP</Avatar>

                <Box display="flex" flexDirection="column" ml={2}>
                    <Typography variant="body2">Artem Pavlov</Typography>
                    <Typography variant="caption" color="textSecondary">
                        artmobpavlov21@gmail.com
                    </Typography>
                </Box>
            </Box>
        </>
    );
};