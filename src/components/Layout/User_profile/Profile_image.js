import { useSelector } from "react-redux";

function ProfileImage({ profileImageURL, newProfileImagePreviewURL, profileMode, handleUserImageChange }){
    const theme = useSelector((state) => state.theme.themeName);
        
    return(
        <div id="profileImageWrapper">
            {
                profileMode == "edit" ? 
                <label id="editUserProfileImageLabel" className="imageSelectInput">
                    <span className="icon">&#9999;</span>
                    <input id="editUserProfileImageInput" type="file" onChange={handleUserImageChange} /> 
                </label>
                :
                null
            }
            <img id="profileImage" className={theme} src={newProfileImagePreviewURL ? newProfileImagePreviewURL : profileImageURL} alt="Profile image" />
        </div>
    );
}

export default ProfileImage;