import { useSelector } from "react-redux";

import ThemeSwitch from "./Theme_switch";
import Navigation from "./Navigation/Navigation";
import NavigationToggle from "./Navigation/Navigation_toggle";
import CakeStoreTitle from "./Cake_store_title";
import { createPortal } from "react-dom";

function Header({ handleThemeChange, handleNavigationToggle }){
    const [ theme, screenWidth ] = useSelector((state) => [ state.theme.themeName, state.screen.screenWidth ]);

    return(
        <header className={theme}>
            <NavigationToggle handleNavigationToggle={handleNavigationToggle} />

            {
                screenWidth == "narrow" ?
                createPortal(<Navigation handleNavigationToggle={handleNavigationToggle} />, document.querySelector("body"))
                :
                <Navigation />
            }
            
            {
                screenWidth == "narrow" ? 
                <CakeStoreTitle />
                :
                null
            }
            <ThemeSwitch handleThemeChange={handleThemeChange} />
        </header>
    );
}

export default Header;