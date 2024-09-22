import { CalendarIcon } from "../../assets/icons/CalendarIcon";
import { Icon } from "../Icon/Icon";

export const SidebarHeader = () => (
    <div className="flex items-center mb-6">
        <div className="w-7 h-7 bg-red-500 rounded-lg mr-2 p-2">
            <Icon
                icon={CalendarIcon}
                color="#ffff"
            />
        </div>
        <span className="text-lg font-semibold">Caleicen</span>
    </div>
)