import { FC } from "react";
import { Box } from "@mui/material";
import { CalendarIcon } from "../../assets/icons/CalendarIcon";
import { APP_ICON_BACKGROUND_COLOR, APP_ICON_COLOR } from "../../core/config/app.config";
import { Icon } from "../Icon/Icon";

interface IconAppProps { 
    size?: number;
}

export const IconApp: FC<IconAppProps> = ({ size = 20 }) => {
    return (
        <Box
            sx={{
                backgroundColor: APP_ICON_BACKGROUND_COLOR,
                borderRadius: '8px', // Эквивалент rounded-lg
                padding: 1,
                paddingBottom: 0.5,
                display: 'inline-flex', // Для правильного расположения иконки
            }}
        >
            <Icon
                icon={CalendarIcon}
                color={APP_ICON_COLOR}
                size={size}
            />
        </Box>
    );
};
