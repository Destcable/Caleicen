import { FC, ReactNode } from "react"
import { SIDEBAR_BACKGROUND_COLOR } from "../../core/config/sidebar.config"

interface SidebarWrapperProps { 
    children?: ReactNode
}

export const SidebarWrapper: FC<SidebarWrapperProps> = ({ 
    children
}) => ( 
    <div className="w-72 bg-white h-screen p-4 border-r flex flex-col justify-between" style={{ backgroundColor: SIDEBAR_BACKGROUND_COLOR }}>
        {children}
    </div>
)