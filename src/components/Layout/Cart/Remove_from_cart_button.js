

function RemoveFromCartButton({ cake, handleRemoveFromCart }){
    return(
        <button className="removeFromCartButton" /*type="image"*/ onClick={() => handleRemoveFromCart(cake)}>
            {/*<FontAwesomeIcon icon="fa-solid fa-trash-can" />*/}X
        </button>
    );
}

export default RemoveFromCartButton;