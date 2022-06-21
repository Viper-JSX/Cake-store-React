import { useState } from "react";

function Register({ handleRegister }){
    const [registerData, setRegisterData] = useState({nickname: "", login: "", password: ""});

    const handleNicknameChange = (str) => {
        setRegisterData((prevRegisterData) => ({...prevRegisterData, nickname: str}));
    };

    const handleLoginChange = (str) => {
        setRegisterData((prevRegisterData) => ({...prevRegisterData, login: str}));
    };

    const handlePasswordChange = (str) => {
        setRegisterData((prevRegisterData) => ({...prevRegisterData, password: str}));
    };

    return(
        <div id="register">
            <div className="inputsWrapper">
                <input type="text" value={registerData.nickname} placeholder="Nickname" onChange={(event) => handleNicknameChange(event.target.value)} />
                <input type="text" value={registerData.login} placeholder="Login" onChange={(event) => handleLoginChange(event.target.value)}/>
                <input type="password" value={registerData.password} placeholder="Password" onChange={(event) => handlePasswordChange(event.target.value)}/>
            </div>
            {/*<p>
                Nickname must be unique, login - longer than 8 symbols, password - longer than
                8 symbols and must contain letters, numbers and special symbols
            </p>*/}
            <button onClick={() => handleRegister(registerData)}>Login</button>
        </div>
    );
}

export default Register;