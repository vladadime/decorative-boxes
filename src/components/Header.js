import { BsFillTelephoneFill } from 'react-icons/bs';
import logo from '../data/logo.png';
import Navbar from './Navbar';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
            <img className="h-100" src={logo}/>
            <div id="contac-info" className="">
              <SocialIcon target="_blank" url="https://www.facebook.com/sladjana.jovanovic.3910" style={{ width: "20px", height: "20px" }}/>
              <SocialIcon target="_blank" url="https://www.instagram.com/kutijeletus/" className="mx-2" style={{ width: "20px", height: "20px" }}/>
              <BsFillTelephoneFill style={{ width: "20px", height: "20px" }}/>
              <span>+381 60 023 023 9</span>
            </div>
            <Navbar/>
        </div>
    </div>
  )
}

export default Header
