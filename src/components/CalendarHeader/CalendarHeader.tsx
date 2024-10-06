import { Navigate } from "react-big-calendar"
import { CalendarHeaderButtonFilter } from "./CalendarHeaderButtonFilter"
import { Icon } from "../Icon/Icon"
import { AngleLeftIcon } from "../../assets/icons/AngleLeftIcon"
import { AngleRightIcon } from "../../assets/icons/AngleRightIcon"

export const CalendarHeader = (props: any) => {
    return (
        <div className="flex justify-between items-center">

            <div className="flex gap-4">
                <CalendarHeaderButtonFilter />
                <div className="inline-flex rounded-md shadow-sm">
                    <div className="flex items-center space-x-4 p-1.5 bg-gray-100 rounded-md">
                        <button type="button" className="px-5 py-0.5 text-sm text-gray-600 rounded-md bg-white shadow-md">
                            D
                        </button>
                        <button type="button" className="px-5 py-0.5 text-sm text-gray-600 rounded-md hover:bg-gray-200">
                            3D
                        </button>
                        <button type="button" className="px-5 py-0.5 text-sm text-gray-600 rounded-md hover:bg-gray-200">
                            W
                        </button>
                        <button type="button" className="px-5 py-0.5 text-sm text-gray-600 rounded-md hover:bg-gray-200">
                            M
                        </button>
                    </div>
                    {/* <div className="flex py-2.5 px-5 text-sm text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <span>123</span>
                    </div> */}
                </div>

            </div>

            <div>
                <div className="inline-flex rounded-md shadow-sm mr-4" role="group">
                    <button onClick={() => props.onNavigate(Navigate.PREVIOUS)} type="button" className="px-4 py-1.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        <Icon icon={AngleLeftIcon} size={12}/>
                    </button>
                    <button onClick={() => props.onNavigate(Navigate.NEXT)} type="button" className="px-4 py-1.5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                        <Icon icon={AngleRightIcon} size={12}/>
                    </button>
                </div>
                <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    Создать
                </button>
            </div>
        </div>
    )
}