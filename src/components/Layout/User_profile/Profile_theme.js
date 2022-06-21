import CancelProfileChangesButton from "./Cancel_profile_changes_button";
import EditProfileButton from "./Edit_profile_button";
import LogoutButton from "./Logout_button";

function ProfileTheme({ user, profileMode, profileThemeImageURL, newProfileThemeImagePreviewURL, editedProfile, newPasswordData, handleLogout, handleProfileModeChange, handleProfileDataChange, handleCancelProfileChanges, handleProfileThemeChange }){

    return(
        <div id="profileThemeImage" style={{backgroundImage: `url(${newProfileThemeImagePreviewURL !== "" ? newProfileThemeImagePreviewURL : profileThemeImageURL})`}}>
            <EditProfileButton 
                user={user}
                profileMode={profileMode} 
                editedProfile={editedProfile}
                newPasswordData={newPasswordData}
                handleProfileModeChange={handleProfileModeChange} 
                handleProfileDataChange={handleProfileDataChange} 
            />

            {
                profileMode == "edit" ?
                <CancelProfileChangesButton handleCancelProfileChanges={handleCancelProfileChanges} />
                :
                null 
            
            }

            <LogoutButton 
                handleLogout={handleLogout} 
            />
            {
                profileMode == "edit" ? 
                <label id="profileThemeInputLabel" className="imageSelectInput">
                    <span className="icon">&#9999;</span>
                    <input id="profileThemeInput" type="file" placeholder="New theme" onChange={handleProfileThemeChange} />
                </label>
                :
                null
            }
        </div>
    );
}

export default ProfileTheme;