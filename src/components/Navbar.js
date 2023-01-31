import {useStateContext} from '../contexts/ContextProvider.js';
import {navbarItems} from '../data/sample.js';

const NavButton = ({title, path}) => {
    return (
        <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href={`/${path}`}>{title}</a>
        </li>
    )
}

const Navbar = () => {
    const {isLoggedIn, logout} = useStateContext();

    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
                {navbarItems.map((item, index) => <NavButton key={index} title={item.title} path={item.path}/>)}
                {isLoggedIn && <li className="nav-item">
                    <button className="bg-body border-0 px-0 py-2 p-md-2 fw-bold" onClick={logout}>Odjavi se</button>
                </li>}
            </ul>
        </div>
    )
}

export default Navbar
