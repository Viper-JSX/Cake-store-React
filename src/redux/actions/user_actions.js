import { ADD_POST, CHANGE_PROFILE_DATA, DELETE_POST, LOGIN, LOGOUT, REGISTER } from "./action_types";

export const loginAction = (payload) => ({type: LOGIN, payload});

export const logoutAction = () => ({type: LOGOUT});

export const registerAction = (payload) => ({type: REGISTER, payload});

export const addPostAction = (payload) => ({type: ADD_POST, payload});

export const changeProfileDataAction = (payload) => ({type: CHANGE_PROFILE_DATA, payload});

export const deletePost = (payload) => ({type: DELETE_POST, payload});