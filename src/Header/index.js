import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <div className="Header">

            <div className="loho-header">
                <h2>TD<span className="red">.</span></h2>
            </div>

            <ul className="items-header">
                <li className="item-header">HOME</li>
                <li className="item-header">SERVICES</li>
                <li className="item-header">PROJECT</li>
                <li className="item-header">ABOUT</li>
                <li className="item-header">CONTACT</li>

                <div className="icons-header">
                <FontAwesomeIcon icon={faTwitter} className="icon-header" />
                <FontAwesomeIcon icon={faGithub} className="icon-header" />
                <FontAwesomeIcon icon={faLinkedinIn} className="icon-header" />
                </div>

            </ul>

        </div>
    );
}

export default Header;