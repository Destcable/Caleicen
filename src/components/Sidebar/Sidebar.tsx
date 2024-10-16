import { FC, ReactNode } from "react";
import { Box, List } from "@mui/material";

import { SidebarHeader } from "./SidebarHeader";
import { SidebarSearchInput } from "./SidebarSearchInput";
import { SidebarUserInfo } from "./SidebarUserInfo";
import { SidebarWrapper } from "./SidebarWrapper";

interface SidebarProps {
    items?: ReactNode;
}

export const Sidebar: FC<SidebarProps> = ({ items }) => {
    return (
        <SidebarWrapper>
            <Box>
                <Box sx={{ marginBottom: 4 }}>
                    <SidebarHeader />
                    <Box>
                        <SidebarSearchInput />
                    </Box>
                </Box>

                <List component="nav">
                    {items}
                </List>

            </Box>

            <Box>
                <SidebarUserInfo />
            </Box>
        </SidebarWrapper>
    );
};
