import { useState } from "react";

function Login({ handleLogin }){
    const [loginData, setLoginData] = useState({login: "", password: ""});

    const handleLoginChange = (str) => {
        setLoginData((prevLoginData) => ({...prevLoginData, login: str}));
    };

    const handlePasswordChange = (str) => {
        setLoginData((prevLoginData) => ({...prevLoginData, password: str}));
    };

    return(
        <div id="login">
            <div className="inputsWrapper">
                <input type="text" placeholder="Login" onChange={(event) => handleLoginChange(event.target.value)}/>
                <input type="password" placeholder="Password" onChange={(event) => handlePasswordChange(event.target.value)}/>
            </div>
            <button onClick={() => handleLogin(loginData)}>Login</button>
        </div>
    );
}

export default Login;