import { AuthForm } from "../../components/AuthForm/AuthForm";
import { IconApp } from "../../components/IconApp/IconApp";
import { APP_NAME } from "../../core/config/app.config";
import { AUTH_BACKGROUND_COLOR } from "../../core/config/authPage.config";

const AuthPage = () => {
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
                    <AuthForm />
                </div>

                <div>

                </div>
            </div>
        </div>
    )
};

export default AuthPage;