import { FC } from "react"

interface UserDropDownProps {
    open: boolean
}

export const UserDropDown: FC<UserDropDownProps> = ({
    open
}) => {
    if (!open) return null
    return <div id="userDropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 mb-2">
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Artem Pavlov</div>
            <div className="font-medium truncate">artmobpavlov21@gmail.com</div>
        </div>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Настройки</a>
            </li>
            <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">О приложении</a>
            </li>
        </ul>
        <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Выйти</a>
        </div>
    </div>
}