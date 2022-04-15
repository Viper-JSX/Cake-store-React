import { useSelector } from "react-redux";

function AmountSelect({ amount, handleAmountChange }){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <div className={`amountSelect ${theme}`}>
            <button onClick={() => handleAmountChange(-1)}>-</button>
            <span className="amount">{amount}</span>
            <button onClick={() => handleAmountChange(+1)}>+</button>
        </div>
    );
}

export default AmountSelect;