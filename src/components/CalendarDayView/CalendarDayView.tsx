import moment from "moment"
import { Calendar, momentLocalizer } from "react-big-calendar"
import { CalendarHeader } from "../CalendarHeader/CalendarHeader";

const localizer = momentLocalizer(moment)
const events = [
    {
        start: moment().toDate(),
        end: moment()
            .toDate(),
        title: "Созвон"
    }
]

export const CalendarDayView = () => {
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