import { useState } from 'react';

function ReceiptStepForm({ receiptStep, mode, orderNumber, handleReceiptStepsChange }){
    const [step, setStepText] = useState(mode == "edit" ? receiptStep : {orderNumber, stepText: ""});
    const handleStateStepChange = (event) => setStepText(event.target.value);

    return(
        <div className="receiptStepForm">
            <b>Step {orderNumber}.</b>
            <br></br>
            <textarea 
                className="receiptStepInput" col="30" row="10" 
                value={step.stepText}
                placeholder="Receipt step description" 
                onChange={(event) => {
                    handleReceiptStepsChange({orderNumber, stepText: event.target.value});
                    handleStateStepChange(event);
                }}       
            ></textarea>
        </div>
    );
}

export default ReceiptStepForm;