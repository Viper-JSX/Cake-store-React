import { useState } from "react";

function IngredientFrom({ ingredient, mode, orderNumber, handleIngredientsChange }){
    //While the ingredient is defined in edit mode we create new <Ingredient_form/>'s with values
    //that are currently present is !ingredient then it means we created new ingredient and we 
    //return <Ingredien_form/> without values

    const [ingredientData, setIngredientData] = useState((mode == "edit" && ingredient) ? ingredient : { orderNumber, ingredientName: "", measurementUnit: "", amountOfUnits: 0 });

    const handleIngredientNameChange = (event) => {
        setIngredientData((prevIngredientData) => ({...prevIngredientData, ingredientName: event.target.value}));
    }

    const handleIngredientMeasurementUnitChange = (event) => {
        setIngredientData((prevIngredientData) => ({...prevIngredientData, measurementUnit: event.target.value}));
    }

    const handleIngredientUnitAmountChange = (event) => {
        setIngredientData((prevIngredientData) => ({...prevIngredientData, amountOfUnits: parseInt(event.target.value)}));
    }

    return(
        <div className="ingredientForm">
            <b>Ingredient {orderNumber}.</b>
            <br></br>
            <input className="ingredientNameInput" type="text" placeholder="Ingredient" 
                value={ingredientData.ingredientName}

                onChange={(event) => {
                        handleIngredientNameChange(event);
                    }
                } 
                onBlur={() => {
                        handleIngredientsChange(ingredientData);
                    }
                }
            />

            <br />
            
            <input className="measurementUnitInput" type="text" placeholder="Measurement unit" 
                value={ingredientData.measurementUnit}
                onChange={(event) => {
                        handleIngredientMeasurementUnitChange(event);
                        handleIngredientsChange(ingredientData);
                    }
                }
                
                onBlur={() => {
                        handleIngredientsChange(ingredientData);
                    }
                }
            />
            
            <br />
            
            <input className="unitAmountInput" type="number" placeholder="Amount of units" 
                value={ingredientData.amountOfUnits}
                onChange={(event) => {
                        handleIngredientUnitAmountChange(event);
                        handleIngredientsChange(ingredientData);
                    }
                } 

                onBlur={() => {
                        handleIngredientsChange(ingredientData);
                    }
                }
            />
        </div>
    )
}

export default IngredientFrom;