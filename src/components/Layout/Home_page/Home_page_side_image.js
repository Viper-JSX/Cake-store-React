import { useSelector } from "react-redux";
import User from "../../../images/app_images/home_page_side_image.jpeg";

function HomePageSideImage({ /*imageURL*/ }){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <div id="homePageSideImageWrapper">
            <img id="homePageSideImage" src={theme == "dark" ? require("../../../images/app_images/home_page_dark_side_image.png") : require("../../../images/app_images/home_page_side_image.jpeg")} /*src={theme == "light" ? '../../../images/app_images/home_page_side_image.jpeg' : "'../../../images/app_images/home_page_dark_side_image.jpeg'"}*/ alt="Home page image" />
        </div>
    );
}

export default HomePageSideImage;