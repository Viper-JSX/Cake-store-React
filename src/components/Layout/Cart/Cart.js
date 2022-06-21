import { useSelector } from "react-redux";
import Cake from "../../../classes/Cake";
import CakeOpener from "../../Cake/Cake_opener";
import CakeInCart from "./Cake_in_cart";
import { createPortal } from "react-dom";
import TotalPrice from "./Total_price";
import CheckoutButton from "./Checkout_button";
import CheckoutButtonAndTotalPrice from "./Checkout_button_and_total_price";

function Cart({ handleRemoveFromCart, handleCheckout }){
    const cart = useSelector((state) => state.userCart);
    let totalPrice = 0;

    cart.cakes.forEach((item) => totalPrice += item.cake.price * item.amount);

    return(
        <div id="cart">
            {
                cart.cakes.map((item) => 
                    <CakeInCart 
                        cake={item.cake} 
                        amount={item.amount} 
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                )
            }
            <CheckoutButtonAndTotalPrice totalPrice={totalPrice} handleCheckout={handleCheckout} />
        </div>
    );
}

export default Cart;