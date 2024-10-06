import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../api/auth/loginMutation";

export const useAuthUser = () => { 
    const [loginUser, { loading, error }] = useMutation(LOGIN_MUTATION);

    const login = async (email: string, password: string) => { 
        try {
            const { data } = await loginUser({ variables: { input: { email, password }}})
            return data   
        } catch (error) {
            return error
        }
    }

    return { login, loading, error}

}