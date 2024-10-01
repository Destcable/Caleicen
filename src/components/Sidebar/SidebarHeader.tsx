import { CalendarIcon } from "../../assets/icons/CalendarIcon";
import { APP_NAME } from "../../core/config/app.config";
import { SIDEBAR_ICON_BACKGROUND_COLOR, SIDEBAR_ICON_COLOR } from "../../core/config/sidebar.config";
import { Icon } from "../Icon/Icon";

export const SidebarHeader = () => (
    <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-7 h-7 rounded-lg mr-2 p-1" style={{ backgroundColor: SIDEBAR_ICON_BACKGROUND_COLOR }}>
            <Icon
                icon={CalendarIcon}
                color={SIDEBAR_ICON_COLOR}
                size={16}
            />
        </div>
        <span className="text-lg font-semibold">{APP_NAME}</span>
    </div>
)