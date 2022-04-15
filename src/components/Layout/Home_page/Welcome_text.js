import { useSelector } from "react-redux";

function WelcomeText(){
    const theme = useSelector((state) => state.theme.themeName);

    return(
        <h1 id="welcomeText" className={theme}>Welcome to <span className="textHighlight">Cake Store</span>!</h1>
    );
}

export default WelcomeText;