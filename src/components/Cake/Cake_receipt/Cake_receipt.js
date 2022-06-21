import PropTypes from 'prop-types';
import ReceiptStep from './Receipt_step';
import { useSelector } from 'react-redux';

function CakeReceipt({ title, receipt }){
    const theme = useSelector((state) => state.theme.themeName);
    
    return(
    <div className={`cakeReceipt ${theme}`} >
        <p className='cakeReceiptTitle'>Receipt</p>
        <hr/>
            {
                receipt.map((step) =>
                    <ReceiptStep step={step} key={step.stepText + title} />
                )
            }
    </div>
    );
}

CakeReceipt.propTypes = {
    receipt: PropTypes.array
};

export default CakeReceipt;