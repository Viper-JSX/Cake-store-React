import { useSelector } from "react-redux";
import Company from "./Company";
import Copyright from "./Copyright";
import FooterCopyRightAndSocialMedia from "./Footer_copyright_and_social_media";
import FooterProducts from "./Footer_products";
import FooterSocialMedia from "./Footer_social_media";
import FooterTeamNames from "./Footer_team_names";
import Network from "./Network";

function Footer(){
    const theme = useSelector((state => state.theme.themeName));

    return(
        <footer className={theme}>
            <FooterTeamNames />
            <FooterProducts />
            <Company />
            <Network />
            <FooterCopyRightAndSocialMedia />
        </footer>
    )
}

export default Footer;