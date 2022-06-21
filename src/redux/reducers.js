import User from '../classes/User.js'
import { ADD_CAKE_TO_STORE, REMOVE_CAKE_FROM_STORE, ADD_CAKE_TO_CART, REMOVE_CAKE_FROM_CART, LOGIN, REGISTER, LOGOUT, UPDATE_CAKE_IN_STORE, CHANGE_SEARCH_TYPE, SEARCH_BY_SEARCH_TERM, SEARCH_BY_CATEGORY, SORT_BY, SELECT_CAKES_TO_SHOW, APPLY_SEARCH_PARAMS, ERROR_FOUND, ADD_POST, CHANGE_PROFILE_DATA, SWITCH_THE_THEME, SWITCH_TO_NARROW_SCREEN_MODE, SWITCH_TO_WIDE_SCREEN_MODE, TOGGLE_NAVIGATION, CHECKOUT, DELETE_POST } from "./actions/action_types.js";

import cakes from '../different_things/cakes.js';
import { users } from "../different_things/users.js";
import Cake from '../classes/Cake.js';
import { act } from 'react-dom/test-utils';

export function userCart(state = {cakes: []}, action){
    switch(action.type){
        case ADD_CAKE_TO_CART:{

            let currentCakeCartList = [...state.cakes];
            let cakeAlreadyInCart = false;
            for(let i = 0; i < currentCakeCartList.length; i++){
                if(currentCakeCartList[i].cake.title == action.payload.cake.title){
                    currentCakeCartList[i].amount += action.payload.amount;//+= action.payload.amount;
                    cakeAlreadyInCart = true;
                    break;
                }
            }

            if(cakeAlreadyInCart){
                return({...state, cakes: currentCakeCartList});
            }

            return ({...state, cakes: [...state.cakes, action.payload]});
        }
        case REMOVE_CAKE_FROM_CART:{
            return {...state, cakes: state.cakes.filter((item) => item.cake.title != action.payload.title /*Put id instead of title*/)};
        }
        case CHECKOUT:{
            //handleCheckout
            return { ...state, cakes: []};
        }
        default:{
            return state;
        }
    }   
}

export function cakeStore(state = {cakes, cakesToDisplay: [...cakes].sort((a, b) => b.views - a.views), error: ""}, action){
    switch(action.type){
        case APPLY_SEARCH_PARAMS:{
            let newCakeListToDisplay;
            if(action.payload.searchType == "text_search"){
                newCakeListToDisplay = cakes.filter((cake) => cake.title.toLowerCase().indexOf(action.payload.searchTerm.toLowerCase()) >= 0);
            }

            else if(action.payload.searchType == "category_search"){
                if(action.payload.searchCategory == "all") newCakeListToDisplay = [...cakes];
                else{
                    newCakeListToDisplay = cakes.filter((cake) => cake.category == action.payload.searchCategory); //[...cakes];
                }
            }

            switch(action.payload.sortBy){
                case "most_popular":{
                    newCakeListToDisplay.sort((a, b) => b.views - a.views);
                    break;
                }
                case "cheap_first":{
                    newCakeListToDisplay.sort((a, b) => a.price - b.price);
                    break;
                }
                case "expensive_first":{
                    newCakeListToDisplay.sort((a, b) => b.price - a.price);
                    break;
                }
                default:{}
            }
            return ({...state, cakesToDisplay: newCakeListToDisplay});
        }
        case ADD_CAKE_TO_STORE:{
            let cakeAlreadyInStore = false;
            for(let i = 0; i < state.cakes.length; i++){
                //You need to get state cakes to compare cause from cakes.js 
                //cakes reset to default value after each routing
                if(state.cakes[i].title == action.payload.title){
                    cakeAlreadyInStore = true;
                    break;
                }
            }
            if(cakeAlreadyInStore){
                return state;
            }
        
            const newCake = new Cake(action.payload.title, action.payload.category, action.payload.description, action.payload.ingredients, action.payload.receipt, action.payload.price, action.payload.imageURL, action.payload.views);
            const newCakeList = [...state.cakes, newCake];
            return {...state, cakes: newCakeList, cakesToDisplay: newCakeList.sort((a, b) => b.views - a.views)};
        }
        case UPDATE_CAKE_IN_STORE: {
            let updatedList = [...state.cakes];
            //does not work, you need live server (maybe);
            for(let i = 0; i < state.cakes.length; i++){
                if(updatedList[i].title == action.payload.prevCakeTitle){
                    updatedList[i] = action.payload;
                    return({...state, cakes: [...updatedList], cakesToDisplay: [...updatedList].sort((a, b) => b.views - a.views)});
                }
            }
            throw new Error("Opps, no such cake");
        }
        case REMOVE_CAKE_FROM_STORE:{
            return {...state, cakes: state.cakes.filter((cake) => cake.id != action.payload.id)};
        }
        default:{
            return state;
        }
    }   
}

export function user(state = null, action){
    switch(action.type){
        case LOGIN:{
            return action.payload;
        }
        case LOGOUT:{
            return null;
        }
        case REGISTER:{
            if(action.payload.password.length < 8){
            }

            let userAlreadyExists = false;

            for(let i = 0; i < users.length; i++){
                if(users[i].nickname == action.payload.nickname || users[i].login == action.payload.login){
                    userAlreadyExists = true;
                    break;
                }
            }

            if(userAlreadyExists){
                return null;
            }

            let newUser = new User(action.payload.nickname, action.payload.login, action.payload.password, []);
            users.push(newUser);
            return newUser;
        }
        case ADD_POST: {
            for(let i = 0; i < users.length; i++){
                if(users[i].nickname == state.nickname){
                    users[i].addPost(action.payload);
                    return ({...users[i]});
                }
            }   
            //return({...state, posts: [...state.posts, action.payload]}); //Use method of user
        }

        case DELETE_POST: {
            for(let i = 0; i < users.length; i++){
                if(users[i].nickname == action.payload.author){
                    users[i].deletePost(action.payload);
                    return {...users[i]};
                }
            }
            return state;
        }

        case CHANGE_PROFILE_DATA: {
            for(let i = 0; i < users.length; i++){
                if(users[i].nickname == action.payload.oldProfile.nickname){
                    users[i].changeData(action.payload.editedProfile, action.payload.newPasswordData);
                    return (users[i]);
                }
            }
        }
        default:{
            return state;
        }
    }
}

//2 types - by text and by category
export function search(state = {searchType: "text_search", searchTerm: "", searchCategory: "all", sortBy: "most_popular"}, action){
    switch(action.type){
        case CHANGE_SEARCH_TYPE:{
            return({...state, searchType: action.payload.searchType});
        }
        case SEARCH_BY_SEARCH_TERM:{
            return({...state, searchTerm: action.payload.searchTerm})
        }
        case SEARCH_BY_CATEGORY:{
            return({...state, searchCategory: action.payload.searchCategory});
        }
        case SORT_BY:{
            return({...state, sortBy: action.payload.sortBy});
        }
        default:{
            return state;
        }
    }
}

export function error(state = { errorText: "" }, action){
    switch(action.type){
        case ERROR_FOUND:{
            return({...state, errorText: action.payload});
        }
        default:{
            return state;
        }
    }
}

export function theme(state = { themeName: "light" }, action){
    switch(action.type){
        case SWITCH_THE_THEME: {
            return({ themeName: state.themeName == "light" ? "dark" : "light" });
        }
        default: {
            return state;
        }
    }
}

export function screen(state = { screenWidth: "wide", navigationIsVisible: false }, action){
    switch(action.type){
        case SWITCH_TO_WIDE_SCREEN_MODE: {
            return({ ...state, screenWidth: "wide" })
        }
        case SWITCH_TO_NARROW_SCREEN_MODE: {
            return({ ...state, screenWidth: "narrow" })
        }
        case TOGGLE_NAVIGATION: {
            return({...state, navigationIsVisible: !state.navigationIsVisible})
        }
        default: {
            return state;
        }
    }
}