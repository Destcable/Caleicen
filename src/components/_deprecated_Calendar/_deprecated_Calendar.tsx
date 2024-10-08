import { FC } from "react";
import { Event } from "../../core/types/Event";

interface CalendarDayViewProps {
    times: { time: string }[];
}

export const _deprecated_CalendarDayView: FC<CalendarDayViewProps> = ({ times }) => {
    const events: Event[] = [
        {
            startedAt: "03:00",
            finishedAt: "05:00"
        },
        {
            startedAt: "06:30",
            finishedAt: "07:30"
        }
    ];

    const HEIGHT_ROW_CALENDAR = 3.8;

    const getIndex = (time: string) => times.findIndex(t => t.time === time);

    return (
        <div className="flex flex-col flex-1 overflow-auto ">
            <div className="flex w-full flex-1">
                <div className="w-12"></div>
                <div className="relative w-full">
                    <div className="grid border-l" style={{ gridTemplateRows: `repeat(${times.length}, minmax(${HEIGHT_ROW_CALENDAR}rem, 1fr))` }}>
                        {times.map((item, index) => (
                            <div key={index} className="border-b">
                                <span className="-ml-12 absolute">{item.time}</span>
                            </div>
                        ))}
                    </div>
                    {events.map(event => {
                        const startIndex = getIndex(event.startedAt);
                        const endIndex = getIndex(event.finishedAt);
                        const height = (endIndex - startIndex) * 3.8; // Высота в rem

                        return (
                            <div
                                key={event.startedAt}
                                className="absolute left-0 right-0 bg-blue-500 opacity-50 z-10"
                                style={{
                                    top: `${startIndex * 3.8}rem`,
                                    height: `${height}rem`
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};