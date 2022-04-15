import { useSelector } from "react-redux";

function ThemeSwitch({ handleThemeChange }){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <div id="themeSwitch" onClick={handleThemeChange}>
            <div id="themeSwitchSlider" className={theme}></div>
        </div>
    );
}

export default ThemeSwitch;