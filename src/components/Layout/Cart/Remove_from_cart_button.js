import { useSelector } from 'react-redux';

function RemoveFromCartButton({ cake, handleRemoveFromCart }){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <button className={`removeFromCartButton ${theme}`} /*type="image"*/ onClick={() => handleRemoveFromCart(cake)}>
            {/*<FontAwesomeIcon icon="fa-solid fa-trash-can" />*/}X
        </button>
    );
}

export default RemoveFromCartButton;