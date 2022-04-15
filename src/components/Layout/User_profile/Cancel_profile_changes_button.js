function CancelProfileChangesButton({ handleCancelProfileChanges }){
    return(
        <button id="cancelProfileChangesButton" className="standardButton" onClick={handleCancelProfileChanges}>Cancel changes</button>
    );
}

export default CancelProfileChangesButton;