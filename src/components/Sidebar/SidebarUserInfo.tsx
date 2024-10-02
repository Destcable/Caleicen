import { useState } from "react";
import { UserDropDown } from "../UserDropDown/UserDropDown";

export const SidebarUserInfo = () => {

    const [isOpenUserDropDown, setOpenUserDropDown] = useState<boolean>(false)
    const handleClick = () => setOpenUserDropDown(!isOpenUserDropDown)

    return <>
        <UserDropDown open={isOpenUserDropDown}/>
        <div className="flex items-center space-x-3 mt-auto cursor-pointer" onClick={handleClick}>
            <img
                src="https://via.placeholder.com/40"
                alt="Participant 1"
                className="w-10 h-10 rounded-full"
            />

            <div className="flex flex-col items-start">
                <span className="text-sm">Artem Pavlov</span>
                <span className="text-xs" style={{ color: '#757474' }}>artmobpavlov21@gmail.com</span>
            </div>
        </div>
    </>
}