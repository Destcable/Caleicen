import moment from "moment"
import { Calendar, momentLocalizer } from "react-big-calendar"
import { CalendarHeader } from "../CalendarHeader/CalendarHeader";
import { useEventsByUser } from "../../core/hooks/useEventsByUser";
import { getStorageAuth } from "../../core/storage/getStorageAuth";
import { LoadingIcon } from "../../assets/icons/LoadingIcon";

const localizer = momentLocalizer(moment)

export const CalendarDayView = () => {
    const { userId } = getStorageAuth()
    const { data, loading } = useEventsByUser(userId || '')
    if (loading) return <LoadingIcon />
    const events = data.data.map(item => ({ 
        ...item, 
        start: moment(item.start).toDate(), 
        end: moment(item.end).toDate()
    }));
    
    return (
        <Calendar
        localizer={localizer}
        events={events}
        defaultDate={new Date()}
        defaultView="day"
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
            components={{
                toolbar: (props) => <CalendarHeader {...props} />
            }}
        />
    )
}