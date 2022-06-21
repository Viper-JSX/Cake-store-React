import { users } from "../../different_things/users";
import { showErrorMessageAction } from "../actions/error_actions";
import { changeProfileDataAction, loginAction, logoutAction, registerAction } from "../actions/user_actions"

export function login(payload){
    return function(dispatch, getState){
        let dataIsCorrect = false;

        for(let i = 0; i < users.length; i++){
            if(users[i].login == payload.login && users[i].password == payload.password){
                dispatch(loginAction({...users[i]}));
                dataIsCorrect = true;
                return;
            }
        }

        if(!dataIsCorrect){
            if(!getState().error.errorText){
                dispatch(showErrorMessageAction("Check inputs one more time"));
                setTimeout(() => dispatch(showErrorMessageAction("")), 2000); //To hide error window
            }
        }
    }
}

export function register(payload){
    return function(dispatch, getState){
        let userAlreadyExists = false;
        let loginAcceptable = payload.login.length >= 8 ? true : false;
        let passwordAcceptable = payload.password.length >= 8 ? true : false;

        const regexp = /\d/ig;
        const match = regexp.test(payload.password);

        if(!match){
            passwordAcceptable = false;
        }

        for(let i = 0; i < users.length; i++){
            if(users[i].nickname.toLowerCase() === payload.nickname.toLowerCase()){
                userAlreadyExists = true;
                break;
            }
        }


        if(!userAlreadyExists && loginAcceptable && passwordAcceptable){
            dispatch(registerAction(payload));
        }
        else if(userAlreadyExists){
            if(!getState().error.errorText){
                dispatch(showErrorMessageAction("Nickname is already taken"));
                setTimeout(() => dispatch(showErrorMessageAction("")), 2000); //To hide error window
            }
        }
        else if(!loginAcceptable){
            if(!getState().error.errorText){
                dispatch(showErrorMessageAction("Login length must be >= 8"));
                setTimeout(() => dispatch(showErrorMessageAction("")), 2000); //To hide error window
            }
        }
        else if(!passwordAcceptable){
            if(!getState().error.errorText){
                dispatch(showErrorMessageAction("Password must contain at least 8 characters, letters and numbers"));
                setTimeout(() => dispatch(showErrorMessageAction("")), 2000); //To hide error window
            }
        }
        else{
            if(!getState().error.errorText){
                dispatch(showErrorMessageAction("Check the inputs and try again"));
                setTimeout(() => dispatch(showErrorMessageAction("")), 2000); //To hide error window
            }
        }
    }
}

export function changeProfileData({ editedProfile, newPasswordData, oldProfile }){
    return function(dispatch){
        let userAlreadyExists = false;
        const displayError = (errorText) => {
            dispatch(showErrorMessageAction(errorText));
            setTimeout(() => dispatch(showErrorMessageAction("")), 2000); //To hide error window
        }

        if(oldProfile.nickname.toLowerCase() !== editedProfile.nickname.toLowerCase()){
            for(let i = 0; i < users.length; i++){
                if(users[i].nickname.toLowerCase() === editedProfile.nickname.toLowerCase()){
                    userAlreadyExists = true;
                    break;
                }
            }
        }

        if(newPasswordData.newPassword && newPasswordData.newPassword != ""){
            let passwordAcceptable = false;
            let newPasswordAndNewPasswordConfirmationMatch = false;

            if(newPasswordData.newPassword == newPasswordData.newPasswordConfirm){
                newPasswordAndNewPasswordConfirmationMatch = true;

                let regexp = /\d/ig;
                let match = regexp.test(newPasswordData.newPassword);
                if(newPasswordData.newPassword.length >= 8 && match){
                    passwordAcceptable = true;
                }
            }

            if(!newPasswordAndNewPasswordConfirmationMatch){
                //set all newPasswordData fields to ""
                displayError("New passwords don't match");
                return;
            }
            else if(!passwordAcceptable){
                displayError("Password must be at least 8 chars long, contain letters and digits");
                 //set all newPasswordData fields to ""
                return
            }
        }


        if(!userAlreadyExists){ //data is valid
            dispatch(changeProfileDataAction({ editedProfile, newPasswordData, oldProfile }));
        }
        else if(userAlreadyExists){
            displayError("Such nickname is alredy taken");
        }

    }
}