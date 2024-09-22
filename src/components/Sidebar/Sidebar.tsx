import { FC, ReactNode } from "react"
import { SidebarHeader } from "./SidebarHeader"
import { SidebarSearchInput } from "./SidebarSearchInput"
import { SidebarUserInfo } from "./SidebarUserInfo"

interface SidebarProps { 
    items?: ReactNode[] 
}

export const Sidebar: FC<SidebarProps> = ({ 
    items,
}) => {
    return (
        <div className="w-72 bg-white h-screen p-4 border-r flex flex-col justify-between" style={{ backgroundColor: '#F9FBFC' }}>
            <div>
                <div className="mb-8">
                    <SidebarHeader />
                    <div>
                        <SidebarSearchInput /> 
                    </div>
                </div>

                <nav className="flex flex-col space-y-1">
                    {items?.map(item => item)}
                </nav>

            </div>


            <div>
                <SidebarUserInfo />
            </div>
        </div>
    )
}