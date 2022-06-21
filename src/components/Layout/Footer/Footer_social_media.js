import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import { faPinterest } from '@fortawesome/free-solid-svg-icons';

function FooterSocialMedia(){
    return(
        <div id="footerSocialMedia">
            <a href="#">
                <span>{/*<FontAwesomeIcon icon={null} ></FontAwesomeIcon>*/} Blog</span>
            </a>

            <a href="#">
                <span>{/*<FontAwesomeIcon icon={null} ></FontAwesomeIcon>*/}Facebook</span>
            </a>

            <a href="#">
                <span>{/*<FontAwesomeIcon icon={null} ></FontAwesomeIcon>*/}Twitter</span>
            
            </a>
            <a href="#">
                <span>{/*<FontAwesomeIcon icon={null} ></FontAwesomeIcon>*/}Pinterest</span>
            </a>
        </div>
    );
}

export default FooterSocialMedia;