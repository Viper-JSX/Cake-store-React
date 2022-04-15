import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Ingredient from './Ingredient';

function CakeIngredients({ title, ingredients }){
    const theme = useSelector((state) => state.theme.themeName);
    
    return(
        <div className={`cakeIngredients ${theme}`} key={ingredients[0].name + title}>
            <p className={`cakeIngredientsTitle ${theme}`}>Ingredients</p>
            <hr/>
            {
                ingredients.map((ingredient, index) =>
                    <Ingredient ingredient={ingredient} count={index + 1} key={title + ingredient.ingredientName} />
                )
            }
        </div>
    );
}

CakeIngredients.propTypes = {
    ingredients: PropTypes.array
}

export default CakeIngredients;