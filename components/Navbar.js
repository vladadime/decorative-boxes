import {navbarItems} from '../data/sample.js';

const NavButton = ({title, path}) => {
    return(
    <li className="nav-item">
        <a className="nav-link text-dark" href={`/${path}`}>{title}</a>
    </li>
    )
}

const Navbar = () => {      
    return (
        <div className="collapse navbar-collapse col-md-4" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 float-end">
                {navbarItems.map((item, index) => <NavButton key={index} title={item.title} path={item.path}/>)}
            </ul>
        </div>
    )
}

export default Navbar
