import { ERROR_FOUND } from "./action_types";

export const showErrorMessageAction = (payload) => {
    return({type: ERROR_FOUND, payload})
};