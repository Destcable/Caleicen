import { CalendarIcon } from "./assets/icons/CalendarIcon";
import { Icon } from "./components/Icon/Icon";

export const App = () => {
    return (
        <>
            <div>
                <div className="flex items-center">
                    <div className="bg-red-400 p-1 rounded-lg">
                        <Icon
                            icon={CalendarIcon}
                            size={30}
                            color="#fff"
                        />
                    </div>
                    <span className="ms-2 text-xl font-semibold">Caleicen</span>
                </div>
            </div>
        </>
    )
};