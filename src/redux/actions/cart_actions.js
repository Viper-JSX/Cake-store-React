import { ADD_CAKE_TO_CART, CHECKOUT, REMOVE_CAKE_FROM_CART } from "./action_types";

export function removeCakeFromCartAction(payload){
    return({type: REMOVE_CAKE_FROM_CART, payload});
}

export function addCakeToCartAction(payload){
    return({type: ADD_CAKE_TO_CART, payload});
}

export function checkout(payload){
    return({type: CHECKOUT, payload});
}