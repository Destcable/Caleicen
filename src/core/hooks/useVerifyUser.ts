import { useQuery } from "@apollo/client";
import { VERIFY_USER_QUERY } from "../api/auth/verifyUserQuery";

export const useVerifyUser = (token: string) => { 
    const { data, loading, error } = useQuery(VERIFY_USER_QUERY, { variables: { input: { token } }});

    return [ data, loading, error ]
}