import { gql } from "@apollo/client";

export const VERIFY_USER_QUERY = gql`
    query VerifyToken($input: UserVerifyInput!) {
        data: verifyToken(input: $input) {
            status
        }
    }
`