import { FilterIcon } from "../../assets/icons/FilterIcon"
import { Icon } from "../Icon/Icon"

export const CalendarHeaderButtonFilter = () => {
    return <button type="button" className="inline-flex items-center py-1.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        <Icon icon={FilterIcon} />
        Фильтр
    </button>
}