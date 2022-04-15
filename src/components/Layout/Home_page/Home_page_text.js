import { useSelector } from "react-redux";

function HomePageText(){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <div id="homePageText" className={theme}>
            <h3>
                <span className="middleFont">Quality</span>
                <br />
                <span className="bigFont">Products with bread sweet</span>
            </h3>
            <p className="simpleText">
                Visit our store to get receipts of best sweet bread makings 
                and by them by the lowest price
            </p>
        </div>
    );
}

export default HomePageText;