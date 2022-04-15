import { useState } from "react";
import AddOrRemoveForm from "../Add_or_remove_form";
import ReceiptStepForm from "./Receipt_step_form";

function ReceiptEditor({cakeReceipt, mode, handleReceiptStepsChange, getAndSetCurrentNumberOfReceiptSteps }){
    const [amountOfSteps, setAmountOfSteps] = useState(() => {
        if(mode == "edit"){
            return cakeReceipt.map((receipt) => 0);
        }

        return ([0]);
    });
    
    const handleAddStep = () => {
        setAmountOfSteps((prevAmountOfSteps) => [...prevAmountOfSteps, 0]);
    }

    const handleStepRemove = () => {
        if(amountOfSteps.length == 1) return;

        let currentAmountOfSteps = [...amountOfSteps];
        currentAmountOfSteps.length = currentAmountOfSteps.length - 1;
        setAmountOfSteps(currentAmountOfSteps);
    }


    return(
        <div className="receiptEditor">
            {
                mode == "create" ? 
                (    
                    amountOfSteps.map((step, index) =>
                        <ReceiptStepForm orderNumber={index + 1} mode={mode} handleReceiptStepsChange={handleReceiptStepsChange} key={step.stepText} />
                    )
                )
                :
                (
                    amountOfSteps.map((step, index) =>
                        <ReceiptStepForm orderNumber={index + 1} receiptStep={cakeReceipt[index]} mode={mode} handleReceiptStepsChange={handleReceiptStepsChange} key={step.stepText} />
                    )
                )   
            }

            <AddOrRemoveForm onClickEventForAdd={() => {
                    handleAddStep();
                    getAndSetCurrentNumberOfReceiptSteps(amountOfSteps.length + 1);
                }} 

                onClickEventForRemove={() => {
                    handleStepRemove();
                    getAndSetCurrentNumberOfReceiptSteps(amountOfSteps.length != 1 ? amountOfSteps.length - 1 : 1);
                }}
            />
        </div>
    );
}

export default ReceiptEditor;