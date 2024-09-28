import { FC, ReactNode } from "react"

interface SidebarWrapperProps { 
    children?: ReactNode
}

export const SidebarWrapper: FC<SidebarWrapperProps> = ({ 
    children
}) => ( 
    <div className="w-72 bg-white h-screen p-4 border-r flex flex-col justify-between" style={{ backgroundColor: '#F9FBFC' }}>
        {children}
    </div>
)