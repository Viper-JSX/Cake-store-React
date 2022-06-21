import CakeImage from "../../components/Cake/Cake_image";
import { showErrorMessageAction } from "../actions/error_actions";
import { addCakeToStoreAction, emptyFieldsLeftAction, updateCakeInStoreAction } from "../actions/store_actions";

export function addCakeToStore(cake){
    return function(dispatch, getState){ 
        let emptyFieldsFound = false;
        
        for(const prop in cake){
            if(cake[prop] === ""){
                emptyFieldsFound = true;
                break;
            }
        }

        if(!emptyFieldsFound){
            for(let i = 0; i < cake.ingredients.length; i++){
                if(cake.ingredients[i].ingredientName == "" || cake.ingredients[i].measurementUnit == "" || cake.ingredients[i].amountOfUnits == 0 || cake.ingredients[i].amountOfUnits == NaN){
                    emptyFieldsFound = true;
                    break;
                }
            }

            for(let i = 0; i < cake.receipt.length; i++){
                if(cake.receipt[i].stepText == ""){
                    emptyFieldsFound = true;
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
        let emptyFieldsFound = false;
        let priceIsWrong = false;
        let someFieldsAreWrong = false;

        if(!cake.title){
            emptyFieldsFound = true;
        }
        else if(!cake.description){
            emptyFieldsFound = true;
        }
        //else if(!cake.ImageUrl){
        //    emptyFieldsFound = true;
        //}
        else if(!cake.price || cake.price < 1){
            someFieldsAreWrong = true;
        }

        for(let i = 0; i < cake.ingredients.length; i++){
            if(!cake.ingredients[i].ingredientName || !cake.ingredients[i].measurementUnit){
                emptyFieldsFound = true;
                break;
            }
            else if(cake.ingredients[i].amountOfUnits < 1){
                someFieldsAreWrong = true;
                break;
            }   
        }

        for(let i = 0; i < cake.receipt.length; i++){
            if(!cake.receipt[i].stepText){
                emptyFieldsFound = true;
            }
        }

        if(!emptyFieldsFound && !someFieldsAreWrong){
            dispatch(updateCakeInStoreAction(cake));
        }
        else{
            if(!getState().error.errorText){
                if(emptyFieldsFound){
                    dispatch(showErrorMessageAction("Seems like some fields are empty"));
                    setTimeout(() => {
                        dispatch(showErrorMessageAction("")); //To hide error window
                    }, 2000)
                }
                else if(someFieldsAreWrong){
                    dispatch(showErrorMessageAction("Check entered data one more time"));
                    setTimeout(() => {
                        dispatch(showErrorMessageAction("")); //To hide error window
                    }, 2000)
                }
            }
        }
    }
}