import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { useState } from "react";

import UserInfo from "./User_info";
import ProfileTheme from "./Profile_theme";
import WhatsNewWindow from "./Whats_new_window";
import UserPosts from "./User_posts";
import PasswordEditor from "./Password_editor/Password_editor";

function UserProfile({ handleLogout, handleAddPost, handleProfileDataChange }){
    const [ user, theme ] = useSelector((state) => [ state.user, state.theme.themeName ]);
    const [ profileMode, setProfileMode ] = useState("preview");
    const [ editedProfile, setEditedProfile ] = useState({...user});
    const [ newPasswordData, setNewPasswordData ] = useState({});
    //console.log("Intitial profile: ", editedProfile)

    const handleProfileModeChange = () => {
        setProfileMode((prevProfileMode) => {
            if(prevProfileMode == "preview"){
                return "edit";
            }
            else{
                return "preview";
            }
        })
    }

    const handleCancelProfileChanges = () => {
        setProfileMode("preview");
        setEditedProfile(user); //To set to default values of user
    }

    const handleUserNicknameChange = (event) => {
        setEditedProfile((prevProfile) => ({...prevProfile, nickname: event.target.value}));
    }

    const handleUserImageChange = (event) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => setEditedProfile((prevProfile) => ({...prevProfile, profileImageURL: event.srcElement.result}));
        console.log("User edited: ", editedProfile);
    }

    const handleProfileThemeChange = (event) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event) => {
            setEditedProfile((prevProfile) => ({...prevProfile, profileThemeImageURL: event.srcElement.result}));
        };
    }

    const handleNewPasswordDataChange = ({ newPasswordData }) => {
        //console.log("Changing: ", newPasswordData)
        setNewPasswordData(newPasswordData)
    }

    if(!user){
        return(
            <Navigate to={"/authorization/login"} />
        )
    }

    return(
        <div id="userProfile" className={theme}>
            <div id="profileThemeImageAndUserInfoWrapper">
                <ProfileTheme 
                    user={user}
                    profileMode={profileMode} 
                    profileThemeImageURL={user.profileThemeImageURL} 
                    newProfileThemeImagePreviewURL={editedProfile.profileThemeImageURL/*newProfileThemeImagePreviewURL*/}
                    editedProfile={editedProfile}
                    newPasswordData={newPasswordData}
                    handleLogout={handleLogout} 
                    handleProfileModeChange={handleProfileModeChange} 
                    handleProfileDataChange={handleProfileDataChange}
                    handleCancelProfileChanges={handleCancelProfileChanges}
                    handleProfileThemeChange={handleProfileThemeChange}
                />
                    

                <UserInfo 
                    profileMode={profileMode} 
                    profileImageURL={user.profileImageURL} 
                    newProfileImagePreviewURL={editedProfile.profileImageURL}
                    userNickname={user.nickname} 
                    handlelogout={handleLogout}
                    handleUserNicknameChange={handleUserNicknameChange}
                    handleUserImageChange={handleUserImageChange}
                    editedProfileImageURL={editedProfile.profileImageURL} 
                    editedUserNickname={editedProfile.nickname} 
                />
            </div>
            {
                profileMode == "edit" ?
                <PasswordEditor
                    userPassword={user.password}
                    handleNewPasswordDataChange={handleNewPasswordDataChange}
                    newPassword={newPasswordData.newPassword}
                    newPasswordConfirm={newPasswordData.newPasswordConfirm}
                />
                :
                null
            }

            {
                profileMode == "preview" ? 
                <>
                    <WhatsNewWindow userName={user.nickname} handleAddPost={handleAddPost} />
                    <UserPosts posts={user.posts} />
                </>
                :
                null
            }
        </div>
    );
}

export default UserProfile;