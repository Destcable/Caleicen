import { FC, ReactNode } from "react"
import { SidebarHeader } from "./SidebarHeader"
import { SidebarSearchInput } from "./SidebarSearchInput"
import { SidebarUserInfo } from "./SidebarUserInfo"
import { SidebarWrapper } from "./SidebarWrapper"

interface SidebarProps {
    items?: ReactNode
}

export const Sidebar: FC<SidebarProps> = ({
    items,
}) => {
    return (
        <SidebarWrapper>
            <div>
                <div className="mb-8">
                    <SidebarHeader />
                    <div>
                        <SidebarSearchInput />
                    </div>
                </div>

                <nav className="flex flex-col ">
                    {items}
                </nav>

            </div>


            <div>
                <SidebarUserInfo />
            </div>
        </SidebarWrapper>
    )
}