import { FC, FormEventHandler } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IAuthFormInput {
    email: string
    password: string
}

interface AuthFormProps { 
    onSubmit: FormEventHandler<HTMLFormElement> | undefined
    register:  UseFormRegister<IAuthFormInput>
}

export const AuthForm: FC<AuthFormProps> = ({ 
    onSubmit,
    register
}) => {
    return (
        <form onSubmit={onSubmit} className="mt-3 grid gap-3">
            <input 
                type="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Email" 
                required 
                {...register("email", { required: true })}
            />
            <input 
                type="password" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Пароль" 
                required 
                {...register("password", { required: true })}
            />
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Войти</button>
        </form>
    )
};