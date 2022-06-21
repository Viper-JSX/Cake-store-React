import { useState } from "react";
import AddOrRemoveForm from "../Add_or_remove_form";
import IngredientFrom from "./Ingredient_form";

function IngredientsEditor({ cakeIngredients, mode, handleIngredientsChange, getAndSetCurrentNumberOfIngredients }){
    const [amountOfIngredients, setAmountOfIngredients] = useState(() => {
        if(mode === "edit"){
            return cakeIngredients.map((ingredient) => 0);
        }

        return [0];
    });
    
    const handleAddIngredient = () => {
        setAmountOfIngredients((prevAmountOfIngredients => [...prevAmountOfIngredients, 0]));
    }

    const handleRemoveIngredient = () => {
        if(amountOfIngredients.length === 1) return;

        const amount = [...amountOfIngredients];
        amount.length = amount.length - 1;
        setAmountOfIngredients(amount);
    }

    //handleRemovingInIngredients array in Cake_editor.js

    return(
        <div className="ingredientsEditor">
            {
                mode === "edit" ? 
                (
                    amountOfIngredients.map((item, index) => 
                        <IngredientFrom ingredient={cakeIngredients[index]} orderNumber={index + 1} mode={mode} handleIngredientsChange={handleIngredientsChange} key={index} />
                    )
                )
                :
                (
                    (
                        amountOfIngredients.map((item, index) => 
                           <>
                                <IngredientFrom orderNumber={index + 1} mode={mode} handleIngredientsChange={handleIngredientsChange} key={index} />
                           </> 
                        )
                    )
                )
            }

            <AddOrRemoveForm
                onClickEventForAdd={() => {
                    handleAddIngredient()
                    getAndSetCurrentNumberOfIngredients(amountOfIngredients.length + 1);
                }}

                onClickEventForRemove={() => {
                    handleRemoveIngredient()
                    getAndSetCurrentNumberOfIngredients(amountOfIngredients.length !== 1 ? amountOfIngredients.length - 1 : 1);
                }}
            />
        </div>
    );
}

export default IngredientsEditor;