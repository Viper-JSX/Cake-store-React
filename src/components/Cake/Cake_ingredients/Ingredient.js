import { useSelector } from "react-redux";

function Ingredient({ ingredient }){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <div className={`cakeIngredient ${theme}`}>
            <input type="checkbox" />
            {ingredient.ingredientName} 
            <span> </span>
            {ingredient.amountOfUnits} 
            <span> </span>
            {ingredient.measurementUnit}
            <br/>
        </div>
    )
};

export default Ingredient;