import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
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