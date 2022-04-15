function LogoutButton({ handleLogout }){
    return(
        <button id="logoutButton" className="standardButton" onClick={handleLogout}>Logout</button>
    );
}

export default LogoutButton;