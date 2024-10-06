import { SubmitHandler, useForm } from "react-hook-form";
import { AuthForm, IAuthFormInput } from "../../components/AuthForm/AuthForm";
import { IconApp } from "../../components/IconApp/IconApp";
import { APP_NAME } from "../../core/config/app.config";
import { AUTH_BACKGROUND_COLOR } from "../../core/config/authPage.config";
import { useAuthUser } from "../../core/hooks/useAuthUser";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
    const { handleSubmit, register } = useForm<IAuthFormInput>();
    const { login } = useAuthUser()
    const navigate = useNavigate();
    
    const onSubmit: SubmitHandler<IAuthFormInput> = async ({ email, password }) => { 

        const { data } = await login(email, password);
        if (!data || !data.token) alert('Error')
        const token = data.token;

        localStorage.setItem('user-email', email);
        localStorage.setItem('user-password', password);
        localStorage.setItem('user-token', token);

        navigate("/")
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="flex flex-1 justify-center items-center h-full" style={{ backgroundColor: '#2563eb' }}>
                <div className="flex items-center">
                    <IconApp />
                    <span className="text-xl ms-3 font-semibold text-white">{APP_NAME}</span>
                </div>
            </div>

            <div className="flex flex-col p-12 justify-between" style={{ minWidth: '500px', backgroundColor: AUTH_BACKGROUND_COLOR }}>
                <div className="flex items-center">
                    <IconApp />
                    <span className="text-xl ms-3 font-semibold">{APP_NAME}</span>
                </div>
                
                <div>
                    <span className="text-xl font-semibold">Войдите в аккаунт</span>
                    <AuthForm onSubmit={handleSubmit(onSubmit)} register={register}/>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
};

export default AuthPage;