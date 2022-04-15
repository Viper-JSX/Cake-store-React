//import { useContext } from "react";
//import { ThemeContext } from "../../../Context/Theme_context";
import { useSelector } from "react-redux";
import HomePageSideImage from "./Home_page_side_image";
import HomePageText from "./Home_page_text";
import HomePageTextAndSideImage from "./Home_page_text_and_side_image";
import WelcomeText from "./Welcome_text";

function HomePage(){
    const theme = useSelector((state) => state.theme.themeName);
    return(
        <div id="homePage" className={theme}>
            <WelcomeText />
            <br/>
            <HomePageTextAndSideImage />
            </div>
    );
}

export default HomePage;