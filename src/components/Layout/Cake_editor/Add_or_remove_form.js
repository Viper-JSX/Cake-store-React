function AddOrRemoveForm({ onClickEventForAdd, onClickEventForRemove }){
    return(
        <div className="addOrRemoveForm">
            <button onClick={onClickEventForAdd}>+</button>
            <button onClick={onClickEventForRemove}>-</button>
        </div>
    );
}

export default AddOrRemoveForm;