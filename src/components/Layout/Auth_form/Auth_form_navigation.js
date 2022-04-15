import NavigationItem from "../Header/Navigation/Navigation_item";

function AuthFormNavigation(){
    return(
        <div id="authFormNavigation">
            <NavigationItem title="login" />
            <NavigationItem title="register" />
        </div>
    );
}


export default AuthFormNavigation;