import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

function TotalPrice({ price }){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <b id="totalPrice" className={theme}>Total: {price}$</b>
    );
}

export default TotalPrice;