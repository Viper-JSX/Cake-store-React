import { useSelector } from "react-redux";
import NavigationItem from "./Navigation_item";
import CakeStoreTitle from '../Cake_store_title';

function Navigation({ handleNavigationToggle }){
    const theme = useSelector((state) => state.theme.themeName)
    const screenWidth = useSelector((state) => state.screen.screenWidth);
    const navigationIsVisible = useSelector((state) => state.screen.navigationIsVisible);
    console.log(handleNavigationToggle, screenWidth)
    return(
        <div id="navigation" className={`${theme} ${screenWidth} ${navigationIsVisible ? "visible" : "hidden"}`}>
            {
                screenWidth == "narrow" && navigationIsVisible ? (<CakeStoreTitle />) : null
            }
            <NavigationItem title="home" handleNavigationToggle={handleNavigationToggle} /> 
            <NavigationItem title="store" handleNavigationToggle={handleNavigationToggle} />
            <NavigationItem title="cart" handleNavigationToggle={handleNavigationToggle} />
            <NavigationItem title="user" handleNavigationToggle={handleNavigationToggle} />
        </div>
    );
}

export default Navigation;