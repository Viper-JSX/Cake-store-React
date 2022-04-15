import UserName from "./User_nickname";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function UserTextInfo({ userNickname, editedUserNickname, profileMode, handleUserNicknameChange }){
    const screenWidth = useSelector((state) => state.screen.screenWidth);
    
    return(
        <div id="userTextInfo" className={screenWidth}>
            <UserName 
                userNickname={userNickname} 
                editedUserNickname={editedUserNickname}
                profileMode={profileMode} 
                handleUserNicknameChange={handleUserNicknameChange} 
            />
            <br />
            {/*<FontAwesomeIcon icon="fa-brands fa-facebook" />*/}
            <span>Joined 03.05.2019</span>
        </div>
    );
}

export default UserTextInfo;