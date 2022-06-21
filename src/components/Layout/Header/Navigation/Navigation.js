import { useSelector } from "react-redux";
import NavigationItem from "./Navigation_item";
import CakeStoreTitle from '../Cake_store_title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navigation({ handleNavigationToggle }){
    const theme = useSelector((state) => state.theme.themeName)
    const screenWidth = useSelector((state) => state.screen.screenWidth);
    const navigationIsVisible = useSelector((state) => state.screen.navigationIsVisible);
    
    return(
        <div id="navigation" className={`${theme} ${screenWidth} ${navigationIsVisible ? "visible" : "hidden"}`}>
            {
                screenWidth == "narrow" && navigationIsVisible ? (<CakeStoreTitle />) : null
            }
            <NavigationItem title="home" handleNavigationToggle={handleNavigationToggle} >
                <FontAwesomeIcon icon={faHome} ></FontAwesomeIcon>
            </NavigationItem>

            <NavigationItem title="store" handleNavigationToggle={handleNavigationToggle} >
                <FontAwesomeIcon icon={faDollar} ></FontAwesomeIcon>
            </NavigationItem>

            <NavigationItem title="cart" handleNavigationToggle={handleNavigationToggle} >
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </NavigationItem>

            <NavigationItem title="user" handleNavigationToggle={handleNavigationToggle} >
                <FontAwesomeIcon icon={faUser} ></FontAwesomeIcon>
            </NavigationItem>
        </div>
    );
}

export default Navigation;