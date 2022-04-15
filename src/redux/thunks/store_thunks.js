import { showErrorMessageAction } from "../actions/error_actions";
import { addCakeToStoreAction, emptyFieldsLeftAction, updateCakeInStoreAction } from "../actions/store_actions";

export function addCakeToStore(cake){
    return function(dispatch, getState){ 
        let emptyFieldsFound = false;
        
        for(const prop in cake){
            console.log(prop, ":" , cake[prop])
            if(cake[prop] === ""){
                emptyFieldsFound = true;
                console.log("Found mis in ", prop, cake[prop]);
                break;
            }
        }

        if(!emptyFieldsFound){
            for(let i = 0; i < cake.ingredients.length; i++){
                if(cake.ingredients[i].ingredientName == "" || cake.ingredients[i].measurementUnit == "" || cake.ingredients[i].amountOfUnits == 0 || cake.ingredients[i].amountOfUnits == NaN){
                    emptyFieldsFound = true;
                    console.log("Found mis in ");
                    break;
                }
            }

            for(let i = 0; i < cake.receipt.length; i++){
                if(cake.receipt[i].stepText == ""){
                    emptyFieldsFound = true;
                    console.log("Found mis: ", cake.receipt.stepText);
                    break;
                }
            }
        }

        if(!emptyFieldsFound){
            dispatch(addCakeToStoreAction(cake));
        }
        else{
            if(!getState().error.errorText){
                dispatch(showErrorMessageAction("Seems like some fields are empty"));
                setTimeout(() => {
                    dispatch(showErrorMessageAction("")); //To hide error window
                }, 2000)
            }
        }
    }
}

export function updateCakeInStore(cake){
    return function(dispatch, getState){
        if(true){
            dispatch(updateCakeInStoreAction(cake));
        }
        else{
            if(!getState().error.errorText){
                dispatch(showErrorMessageAction("Seems like some fields are empty"));
                setTimeout(() => {
                    dispatch(showErrorMessageAction("")); //To hide error window
                }, 2000)
            }
        }
    }
}