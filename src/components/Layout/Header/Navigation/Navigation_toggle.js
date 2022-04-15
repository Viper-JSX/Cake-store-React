import { useSelector } from "react-redux";

function NavigationToggle({ handleNavigationToggle }){
    const [ screenWidth, navigationIsVisible, theme ] = useSelector((state) => [ state.screen.screenWidth, state.screen.navigationIsVisible, state.theme.themeName ]);
    //console.log(screenWidth)

    return(
        <div className={`navigationToggle ${screenWidth == "narrow" ? "visible" : "hidden"} ${navigationIsVisible ? "on" : "off"} ${theme}`} onClick={handleNavigationToggle}>
            <span className="topLine"></span>
            <span className="middleLine"></span>
            <span className="bottomLine"></span>
        
        </div>
    );
}

export default NavigationToggle;