import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import AuthFormNavigation from "./Auth_form_navigation";

function AuthForm(){
    const user = useSelector((state) => state.user);

    if(user){
        return(
            <Navigate to="/user" />
        );
    }

    return(
        <div id="authFormWrapper">
            <div id="authForm">
                <AuthFormNavigation />
                <Outlet />
            </div>
        </div>
    );
}

export default AuthForm;