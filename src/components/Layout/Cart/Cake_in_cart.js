import { dispatch } from "../../..";
import { addCakeToCartAction, removeCakeFromCartAction } from "../../../redux/actions/cart_actions";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AmountSelect from "../../Cake/Amount_select/Amount_select";
import RemoveFromCartButton from "./Remove_from_cart_button";
import CakeImage from "../../Cake/Cake_image";
import { useSelector } from "react-redux";


function CakeInCart({ cake, amount, handleRemoveFromCart }){
    const navigate = useNavigate();
    const [currentAmount, setCurrentAmount] = useState(amount);
    const theme = useSelector((state) => state.theme.themeName);

    const handleAmountChange = (quantity) => {
        if(amount + quantity < 0) {
            return;
        }
        
        setCurrentAmount((prevCurrentAmount) => prevCurrentAmount + quantity);
        dispatch(addCakeToCartAction({cake, amount: quantity})); //To display changed  amount in cart
    };

    return(
        <div className={`cakeInCart ${theme}`}>
                <RemoveFromCartButton cake={cake} handleRemoveFromCart={handleRemoveFromCart} />
                <br />
                <div onClick={() => navigate(`/store/${cake.title.replace(" ", "-").toLowerCase()}`)}>
                    <CakeImage imageURL={cake.imageURL} />
                    <br />
                    {cake.title}
                    <br />
                    <span>{cake.price * amount}$</span>
                </div>
                <AmountSelect amount={amount} handleAmountChange={handleAmountChange}/>
        </div>
    );
}

export default CakeInCart;