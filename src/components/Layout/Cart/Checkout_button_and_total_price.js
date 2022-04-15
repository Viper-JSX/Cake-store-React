import CheckoutButton from "./Checkout_button";
import TotalPrice from "./Total_price";

function CheckoutButtonAndTotalPrice({ totalPrice, handleCheckout }){
    return(
        <div id="checkoutButtonAndTotalPrice">
            <TotalPrice price={totalPrice} />
            <CheckoutButton handleCheckout={handleCheckout} />
        </div>
    );
}

export default CheckoutButtonAndTotalPrice;