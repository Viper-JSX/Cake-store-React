import { changeSearchTypeAction, changeSortCriteriaAction, searchByCategoryAction, searchBySearchTermAction } from "../actions/search_actions";
import { applySearchParamsAction } from "../actions/store_actions";

export function changeSearchType(payload){
    console.log("RUn")
    return function(dispatch, getState){
        console.log("Changing search type in thunk to: ", payload);
        dispatch(changeSearchTypeAction(payload));
        dispatch(applySearchParamsAction(getState().search));
    }
}

export function searchBySearchTerm(payload){
    return function(dispatch, getState){
        dispatch(searchBySearchTermAction(payload));
        dispatch(applySearchParamsAction(getState().search));
    }
}

export function searchByCategory(payload){
    return function(dispatch, getState){
        dispatch(searchByCategoryAction(payload));
        dispatch(applySearchParamsAction(getState().search));
    }
}

export function changeSortCriteria(payload){
    return function(dispatch, getState){
        dispatch(changeSortCriteriaAction(payload));
        dispatch(applySearchParamsAction(getState().search));
    }
}