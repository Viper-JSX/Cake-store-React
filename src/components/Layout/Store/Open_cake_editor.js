import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function OpenCakeEditor(){
    const theme = useSelector((state) => state.theme.themeName);
    
    return(
        <NavLink to="create-cake">
            <button id="openCakeEditor" className={theme == "light" ? "light" : "dark"}>&#x271A;</button>
        </NavLink>
    );
}

export default OpenCakeEditor;