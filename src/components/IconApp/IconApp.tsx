import { FC } from "react"
import { CalendarIcon } from "../../assets/icons/CalendarIcon"
import { APP_ICON_BACKGROUND_COLOR, APP_ICON_COLOR } from "../../core/config/app.config"
import { Icon } from "../Icon/Icon"

interface IconAppProps { 
    size?: number
}

export const IconApp: FC<IconAppProps> = ({ 
    size = 20
}) => { 
    return( 
        <div className="rounded-lg p-2" style={{ backgroundColor: APP_ICON_BACKGROUND_COLOR }}>
        <Icon
            icon={CalendarIcon}
            color={APP_ICON_COLOR}
            size={size}
        />
    </div>
    )
}