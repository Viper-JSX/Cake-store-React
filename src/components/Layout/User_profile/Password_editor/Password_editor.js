import { useState } from "react";
import NewPasswordForm from "./New_password_form";

function PasswordEditor({ userLogin, userPassword, handleNewPasswordDataChange, newPassword, newPasswordConfirm }){
    const [ isVisible, setIsVisible ] = useState(false);
    const [ newPasswordData, setNewPasswordData ] = useState({ passwordConfirm: "", newPassword: "", newPasswordConfirm: "" });
    const [ passwordConfirmed, setPasswordConfirm ] = useState(false);
    const [ newPasswordDataSaved, setNewPasswordDataSaved ] = useState(true);


    const toggleVisibility = () => {
        setIsVisible((prev) => !prev);
    }

    const handlePasswwordConfirm = (event) => {
        if(newPasswordData.passwordConfirm == userPassword){
            setPasswordConfirm(true);
        }
    }

    const handleDataSave = () => {
        setNewPasswordDataSaved(true);
    }

    const handlePasswordConfirmChange = (event) => {
        setNewPasswordData((prevData) => ({...prevData, passwordConfirm: event.target.value}));
    }

    const handleNewPasswordChange = (event) => {
        setNewPasswordData((prevData) => ({...prevData, newPassword: event.target.value}));
        setNewPasswordDataSaved(false);
    }

    const handleNewPasswordConfirmChange = (event) => {
        setNewPasswordData((prevData) => ({...prevData, newPasswordConfirm: event.target.value}));
        setNewPasswordDataSaved(false);
    }    

    return(
        <div id="loginAndPasswordEditor">
            <b id="editPassword" onClick={toggleVisibility}>Edit password {isVisible ? <span>&#9650;</span> : <span>&#9660;</span>}</b>
            
            <div style={{display:  isVisible ? "block" : "none" }}>
                {
                    passwordConfirmed ?
                    <div style={{display:  passwordConfirmed ? "block" : "none" }}>
                        <NewPasswordForm 
                            newPassword={newPasswordData.newPassword}
                            newPasswordConfirm={newPasswordData.newPasswordConfirm}
                            handleNewPasswordChange={handleNewPasswordChange} 
                            handleNewPasswordConfirmChange={handleNewPasswordConfirmChange} 
                        />
                        {
                            newPasswordDataSaved ? 
                            <button disabled>Save</button>
                            :
                            <button onClick={(event) => {
                                handleNewPasswordDataChange({ newPasswordData, oldLogin: userLogin, oldPassword: userPassword });
                                handleDataSave();
                            }} type="submit">Save</button>
                        }
                    </div>
                    :
                    <div style={{display: !passwordConfirmed ? "block" : "none" }}>
                        <input onChange={handlePasswordConfirmChange} id="currentPasswordInput" className="wrongInput" /*background to red*/ type="text" value={newPasswordData.passwordConfirm} placeholder="Current password"/>
                        <button onClick={handlePasswwordConfirm}>Confirm</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default PasswordEditor;