import { BsFillTelephoneFill } from 'react-icons/bs';
import logo from '../data/logo.png';
import Navbar from './Navbar';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
            {/* <img className="h-100 col-md-4" src={logo}/> */}
            <a className="navbar-brand" href="#">
              <img width="200px" src={logo} />
            </a>
            <div id="contac-info" className="col-md-4">
              <SocialIcon target="_blank" url="https://www.facebook.com/sladjana.jovanovic.3910" style={{ width: "20px", height: "20px" }}/>
              <SocialIcon target="_blank" url="https://www.instagram.com/kutijeletus/" className="mx-2" style={{ width: "20px", height: "20px" }}/>
              <BsFillTelephoneFill style={{ width: "20px", height: "20px" }}/>
              <span>+381 60 023 023 9</span>
            </div>
            <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar/>
        </div>
    </div>
  )
}

export default Header
