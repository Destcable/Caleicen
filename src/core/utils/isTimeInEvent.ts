import { Event } from "../types/Event";

export const isTimeInEvent = (time: string, event: Event) => {
    return time >= event.startedAt && time < event.finishedAt;
};