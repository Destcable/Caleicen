import { useQuery } from "@apollo/client";
import { EVENTS_BY_USER_QUERY } from "../api/event/getEventsByUserQuery";

export const useEventsByUser = (userId: string) => { 
    const { data, loading, error } = useQuery(EVENTS_BY_USER_QUERY, { variables: { userId }});

    return { data, loading, error }
};