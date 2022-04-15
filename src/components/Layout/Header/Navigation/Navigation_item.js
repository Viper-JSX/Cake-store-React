import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavigationItem({ title, handleNavigationToggle }){
    const [ theme, screenWidth ] = useSelector((state) => [ state.theme.themeName, state.screen.screenWidth ]);

    return(
        <NavLink 
            className={`navigationItem ${theme} ${screenWidth}`} to={title}
            onClick={handleNavigationToggle ? handleNavigationToggle : null}
        >{title.toUpperCase()}</NavLink>
    );
}

export default NavigationItem;