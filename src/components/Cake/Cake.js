import { useState } from 'react';
import { dispatch } from '../..';

import AddToCartButton from './Add_to_cart_button';
import AmountSelect from './Amount_select/Amount_select';

import CakeDescription from './Cake_description';
import CakeIngredients from './Cake_ingredients/Cake_ingredients';
import CakeReceipt from './Cake_receipt/Cake_receipt';
import CakeImage from './Cake_image';
import CakeImageAndDescription from './Cake_image_and_description';

function Cake({ cake, handleAddToCart }){
    const [amount, setAmount] = useState(0);

    const handleAmountChange = (quantity) => {
        setAmount((prevAmount) => prevAmount + quantity);
    }

    return(
        <div className='cake'>
            <CakeImageAndDescription imageURL={cake.imageURL} title={cake.title} description={cake.description} price={cake.price} />
            <CakeIngredients title={cake.title} ingredients={cake.ingredients} />
            <CakeReceipt title={cake.title} receipt={cake.receipt} />
            <hr/>
            <AmountSelect amount={amount} handleAmountChange={handleAmountChange}  />
            <AddToCartButton cake={cake} amount={amount} handleAddToCart={handleAddToCart} />
        </div>
    );
}

export default Cake;

//Cake.propTypes = {
//    description: PropTypes.string,
//    ingredients: PropTypes.array,
//}