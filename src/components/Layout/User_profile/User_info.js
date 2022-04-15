import ProfileImage from "./Profile_image";
import UserTextInfo from "./User_text_info";

function UserInfo({ userNickname, profileImageURL, newProfileImagePreviewURL, editedUserNickname, editedProfileImageURL, profileMode, handleUserNicknameChange, handleUserImageChange }){
    return(
        <div id="userInfo">
            <ProfileImage 
                profileImageURL={profileImageURL}
                newProfileImagePreviewURL={newProfileImagePreviewURL}
                profileMode={profileMode}
                handleUserImageChange={handleUserImageChange}
            />
            <br />
            <UserTextInfo 
                userNickname={userNickname} 
                editedUserNickname={editedUserNickname}
                profileMode={profileMode}
                handleUserNicknameChange={handleUserNicknameChange}
            />
        </div>
    );
}

export default UserInfo;