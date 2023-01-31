import {BsFillTelephoneFill} from 'react-icons/bs';
import {SocialIcon} from 'react-social-icons';
import Navbar from './Navbar';
import logo from '../data/logo.png';

const Header = () => {
    return (
        <div className="navbar navbar-expand-md navbar-dark">
            <div id="navbar-items" className="col-2 col-md-4">
                <button
                    className="navbar-toggler bg-dark"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Navbar/>
            </div>
            <a className="navbar-brand col-4 text-center" href="#">
                <img id="app-logo" src={logo} alt="Website Logo"/>
            </a>
            <div id="contac-info" className="col-6 col-md-4">
                <div className="float-end mx-4">
                    <SocialIcon
                        target="_blank"
                        url="https://www.facebook.com/sladjana.jovanovic.3910"
                        style={{
                        width: "20px",
                        height: "20px"
                    }}/>
                    <SocialIcon
                        target="_blank"
                        url="https://www.instagram.com/kutijeletus/"
                        className="mx-2"
                        style={{
                        width: "20px",
                        height: "20px"
                    }}/>
                    <BsFillTelephoneFill
                        style={{
                        width: "20px",
                        height: "20px"
                    }}/>
                    <span className="fw-bold">+381 60 023 023 9</span>
                </div>
            </div>
        </div>
    // </div>
    )
}

export default Header
