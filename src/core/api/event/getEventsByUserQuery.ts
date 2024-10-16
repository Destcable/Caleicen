import { gql } from "@apollo/client";

export const EVENTS_BY_USER_QUERY = gql`
    query GetEventsByUser($userId: ID!) {
        data: getEventsByUser(userId: $userId) {
            id
            title
            start
            end
            creator {
                id
                email
            }
        }
    }
`