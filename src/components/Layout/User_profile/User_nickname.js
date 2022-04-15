function UserName({ userNickname, editedUserNickname, profileMode, handleUserNicknameChange }){
    return(
        profileMode == "edit" ? 
        <input id="userNickNameChangeInput" type="text" onChange={handleUserNicknameChange} value={editedUserNickname} />
        :
        <b id="userNickname" >{ userNickname }</b>
    );
}

export default UserName;