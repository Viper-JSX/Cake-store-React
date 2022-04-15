import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import Cake from "../../../classes/Cake";
import ErrorWindow from "../../Error/Error_window";
import CategorySelect from "./Category_select";
import ImageForm from "./Image_form";
import ImageInput from "./Image_input";
import IngredientsEditor from "./Ingredient/Ingredients_editor";
import ReceiptEditor from "./Receipt/Receipt_editor";

function CakeEditor({ mode, handleCakeCreate, handleCakeEdit }){
    const location = useLocation();
    const cakeToEdit = location.state?.cake;
    const error = useSelector((state) => state.cakeStore.error);
    if(error){
        console.log("Here is error", error)
    }
    const [cakeData, setCakeData] = useState(() => mode == "edit" ? {...cakeToEdit, prevCakeTitle : cakeToEdit.title} : new Cake() );

    const handleCakeTitleChange = (event) => {
        setCakeData((prevCakeData) => ({...prevCakeData, title: event.target.value}));
    }

    const handleCategoryChange = (event) => {
        console.log(event.target.value);
        setCakeData((prevCakeData) => ({...prevCakeData, category: event.target.value}));
    }

    const handleCakeDescriptionChange = (event) => {
        setCakeData((prevCakeData) => ({...prevCakeData, description: event.target.value}));
    }

    const handleCakeImageChange = (event) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            setCakeData((prevCakeData) => ({...prevCakeData, imageURL: event.srcElement.result}));
        }
    }

    const handleImageInputClick = (event) => {
        event.target.files = null;
    }

    const handleIngredientsChange = (ingredient) => {
        const currentIngredientsList = cakeData.ingredients ? [...cakeData.ingredients] : [];
        let orderNumberAlreadyInList = false;

        for(let i = 0; i < currentIngredientsList.length; i++){
            if(currentIngredientsList[i].orderNumber == ingredient.orderNumber){
                currentIngredientsList[i] = ingredient;
                orderNumberAlreadyInList = true;
                //console.log("Changed ingredient: ", currentIngredientsList[i]);
                break;
            }
        }

        if(orderNumberAlreadyInList == false){
            currentIngredientsList.push(ingredient);
        }

        setCakeData((prevCakeData) => ({...prevCakeData, ingredients: currentIngredientsList}));
        //console.log("Cake data", cakeData.ingredients);
    }

    const handleReceiptStepsChange = ({ orderNumber, stepText }) => {
        let currentReceiptStepsList = cakeData?.receipt ? cakeData.receipt : [];
        let orderNumberAlreadyInList = false;

        for(let i = 0; i < currentReceiptStepsList.length; i++){
            if(currentReceiptStepsList[i].orderNumber == orderNumber){
                orderNumberAlreadyInList = true;
                currentReceiptStepsList[i] = {orderNumber, stepText};
                break;
            }
        }

        if(!orderNumberAlreadyInList){
            currentReceiptStepsList.push({orderNumber, stepText});
        }

        setCakeData((prevCakeData) => ({...prevCakeData, receipt: currentReceiptStepsList}));
    }

    const handleCakePriceChange = (event) => {
        setCakeData((prevCakeData => ({...prevCakeData, price: parseInt(event.target.value)})));
    }

    const getAndSetCurrentNumberOfIngredients = (amount) => {
        let currentIngredientsList = cakeData.ingredients;

        if(currentIngredientsList.length < amount){
            currentIngredientsList.push({orderNumber: amount});
        }

        currentIngredientsList.length = amount;
        setCakeData((prevCakeData) => ({...prevCakeData, ingredient: currentIngredientsList}));
    }

    const getAndSetCurrentNumberOfReceiptSteps = (amount) => {
        let currentReceiptStepsList = cakeData.receipt;
        
        if(currentReceiptStepsList.length < amount){
            currentReceiptStepsList.push({orderNumber: amount});
        }
        
        currentReceiptStepsList.length = amount; //If element was deleted this line deletes it too by decrementing array lenght
        setCakeData((prevCakeData) => ({...prevCakeData, receipt: currentReceiptStepsList}));
    }

    if(mode == "edit"){
        return(
            <div>
                {
                    error ? 
                    <ErrorWindow errorMessage={error} />
                    :
                    null
                }
                <input type="text" placeholder="Cake title" onChange={handleCakeTitleChange} value={cakeData.title}  />
                <hr />
                <br />
                <textarea type="text" placeholder="Cake description" value={cakeData.description} onChange={handleCakeDescriptionChange}></textarea>
                <CategorySelect category={cakeData.category} handleCategoryChange={handleCategoryChange} />
                <ImageInput 
                    handleCakeImageChange={handleCakeImageChange} 
                    handleImageInputClick={handleImageInputClick} 
                    cakeImage={cakeData.imageURL} 
                />
                <hr />
                <IngredientsEditor 
                    cakeIngredients={cakeToEdit.ingredients} 
                    mode={mode}
                    handleIngredientsChange={handleIngredientsChange} 
                    getAndSetCurrentNumberOfIngredients={getAndSetCurrentNumberOfIngredients}
                />
                <hr />
                <ReceiptEditor 
                    cakeReceipt={cakeToEdit.receipt} 
                    mode={mode}
                    handleReceiptStepsChange={handleReceiptStepsChange} 
                    getAndSetCurrentNumberOfReceiptSteps={getAndSetCurrentNumberOfReceiptSteps}
                />
                <hr />
                <input type="number" placeholder="Cake price" value={cakeData.price} onChange={handleCakePriceChange} />
                <button onClick={() => handleCakeEdit(cakeData)}>Save</button>
                <button onClick={() => console.log(cakeData)}>Show cake data</button>
                <hr />
            </div>
        );
    }

    return(
        <div id="cakeEditor">
            <input className="cakeTitleInput" type="text" placeholder="Cake title" value={cakeData.title} onChange={handleCakeTitleChange} />
            <br />
            <textarea className="cakeDescriptionTextArea" type="text" cols={30} rows={5} placeholder="Cake description" value={cakeData.description} onChange={handleCakeDescriptionChange}></textarea>
            <br />
            <CategorySelect handleCategoryChange={handleCategoryChange} />
            <ImageForm 
                handleCakeImageChange={handleCakeImageChange} 
                handleImageInputClick={handleImageInputClick} 
                cakeImage={cakeData.imageURL} 
            />
            <hr />
            <IngredientsEditor 
                mode={mode}
                handleIngredientsChange={handleIngredientsChange}
                getAndSetCurrentNumberOfIngredients={getAndSetCurrentNumberOfIngredients}
            />
            <hr />
            <ReceiptEditor 
                mode={mode}
                handleReceiptStepsChange={handleReceiptStepsChange}
                getAndSetCurrentNumberOfReceiptSteps={getAndSetCurrentNumberOfReceiptSteps} 
            />

            <hr />
            <input type="number" placeholder="Cake price" value={cakeData.price} onChange={handleCakePriceChange} />
            <button type="submit" onClick={() => {handleCakeCreate(cakeData); console.log("SEnding:", cakeData)}}>Save</button>
            <button onClick={() => console.log(cakeData)}>Show cake data</button>
        </div>
    );
}


export default CakeEditor;