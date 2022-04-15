function EditProfileButton({ user, profileMode, editedProfile, newPasswordData, handleProfileModeChange, handleProfileDataChange }){
    console.log(newPasswordData)
    return(
        <button id="editProfileButton" className="standardButton" onClick={
            (event) => {
                if(profileMode == "edit"){
                    handleProfileDataChange({editedProfile, newPasswordData, oldProfile: user});
                }
                
                handleProfileModeChange();
            } 
        }
        >{profileMode == "edit" ? "Save changes" : "Edit profile"}</button>
    );
}

export default EditProfileButton;