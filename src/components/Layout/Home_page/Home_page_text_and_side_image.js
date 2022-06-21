import HomePageSideImage from "./Home_page_side_image";
import HomePageText from "./Home_page_text";

function HomePageTextAndSideImage( { imageURL }){
    
    return(
        <div id="homePageTextAndSideImage">
            <HomePageText />
            <HomePageSideImage imageURL={imageURL} />
        </div>
    );
}

export default HomePageTextAndSideImage;