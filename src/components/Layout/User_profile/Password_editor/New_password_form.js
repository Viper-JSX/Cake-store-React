function NewPasswordForm({ newPassword, newPasswordConfirm, handleNewPasswordChange, handleNewPasswordConfirmChange }){
    return(
        <div>
            <input onChange={handleNewPasswordChange} className="newPasswordInput" type="text" value={newPassword} placeholder="New password" />
            <input onChange={handleNewPasswordConfirmChange} className="newPasswordConfirmationInput" value={newPasswordConfirm} type="text" placeholder="Confirm new password" />

        </div>
    );
}

export default NewPasswordForm;