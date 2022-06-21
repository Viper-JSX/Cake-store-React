import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function NavigationItem({ title, handleNavigationToggle, children }){
    const [ theme, screenWidth ] = useSelector((state) => [ state.theme.themeName, state.screen.screenWidth ]);

    return(
        <NavLink 
            className={`navigationItem ${theme} ${screenWidth}`} to={title}
            onClick={handleNavigationToggle ? handleNavigationToggle : null}
            >
            <span className="navigationItemIcon">{children}</span>
            <br />
            <span className="navigationItemText">
                {title.toUpperCase()}
            </span>
        </NavLink>
    );
}

export default NavigationItem;