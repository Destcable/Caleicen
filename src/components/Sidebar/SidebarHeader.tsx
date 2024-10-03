    import { APP_NAME } from "../../core/config/app.config";
import { IconApp } from "../IconApp/IconApp";

export const SidebarHeader = () => (
    <div className="flex items-center mb-6">
        <IconApp size={16}/>
        <span className="ms-2 text-lg font-semibold">{APP_NAME}</span>
    </div>
)