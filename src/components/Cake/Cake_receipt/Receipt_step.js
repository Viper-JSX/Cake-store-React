import { useSelector } from "react-redux";

function ReceiptStep({ step }){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <div className={`cakeReceiptStep ${theme}`}>
            <p className="receiptStepOrderNumber" >Step {step.orderNumber}: </p>
            <span className="receiptStepText">{step.stepText}</span>
        </div>
    );
}

export default ReceiptStep;