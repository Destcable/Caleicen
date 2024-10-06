import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
    mutation Login($input: UserLoginInput!) {
        data: login(input: $input) {
            token
        }
    }
`