import { useSelector } from "react-redux";
import CakeInCart from "./Cake_in_cart";
import CheckoutButtonAndTotalPrice from "./Checkout_button_and_total_price";

function Cart({ handleRemoveFromCart, handleCheckout }){
    const cart = useSelector((state) => state.userCart);
    let totalPrice = 0;

    const theme = useSelector((state) => state.theme.themeName);

    cart.cakes.forEach((item) => totalPrice += item.cake.price * item.amount);

    return(
        <div id="cart" className={theme}>
            {
            cart.cakes.length > 0 ? 
                (
                    cart.cakes.map((item) => 
                        <CakeInCart 
                            cake={item.cake} 
                            amount={item.amount} 
                            handleRemoveFromCart={handleRemoveFromCart}
                            key={`${item.cake.title}_${item.cake.amount}`}
                        />
                    )
                )
                :
                <p className={theme}>You have no cakes in your cart</p>
            }
            <CheckoutButtonAndTotalPrice totalPrice={totalPrice} handleCheckout={handleCheckout} />
        </div>
    );
}

export default Cart;