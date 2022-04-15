function AddToCartButton({ cake, amount, handleAddToCart }){
    return(
        <button className="addToCartButton" onClick={() => {
            handleAddToCart({cake, amount});
            window.scrollTo(0, 0) /* To show cake starting from top;*/
        }}>Add to cart</button>
    );
}

export default AddToCartButton;
