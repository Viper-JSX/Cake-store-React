import { ADD_CAKE_TO_STORE, APPLY_SEARCH_PARAMS, REMOVE_CAKE_FROM_STORE, UPDATE_CAKE_IN_STORE } from "./action_types";

export function applySearchParamsAction(payload){
    return({type: APPLY_SEARCH_PARAMS, payload});
}

export function addCakeToStoreAction(payload){
    return({type: ADD_CAKE_TO_STORE, payload});
} 

export function updateCakeInStoreAction(payload){
    return({type: UPDATE_CAKE_IN_STORE, payload});
}

export function removeCakeFromShopAction(payload){
    return({type: REMOVE_CAKE_FROM_STORE, payload});
}
