import { CHANGE_SEARCH_TYPE, SEARCH_BY_CATEGORY, SEARCH_BY_SEARCH_TERM, SORT_BY } from "./action_types";

export function changeSearchTypeAction(payload){
    return({ type: CHANGE_SEARCH_TYPE, payload });
}

export function searchBySearchTermAction(payload){
    return({ type: SEARCH_BY_SEARCH_TERM, payload });
}

export function searchByCategoryAction(payload){
    return({ type: SEARCH_BY_CATEGORY, payload });
}

export function changeSortCriteriaAction(payload){
    return({ type: SORT_BY, payload });
}