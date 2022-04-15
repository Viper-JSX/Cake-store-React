import PropTypes from 'prop-types';
import ReceiptStep from './Receipt_step';
import { useSelector } from 'react-redux';

function CakeReceipt({ title, receipt }){
    const theme = useSelector((state) => state.theme.themeName);
    
    return(
    <div className={`cakeReceipt ${theme}`} key={receipt[0] + title}>
        <p className='cakeReceiptTitle'>Receipt</p>
        <hr/>
            {
                receipt.map((step, index) =>
                    <ReceiptStep step={step} />
                )
            }
    </div>
    );
}

CakeReceipt.propTypes = {
    receipt: PropTypes.array
};

export default CakeReceipt;