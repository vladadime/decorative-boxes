import {navbarItems} from '../data/sample.js';
// import { useState, useEffect } from 'react'

const NavButton = ({title, path}) => {
    return(
    <li className="nav-item">
        <a className="nav-link text-dark" href={`/${path}`}>{title}</a>
    </li>
    )
}

const Navbar = () => {
    // const [navItems, setNavItems] = useState([]);
    // useEffect(() => {
    //     const getNavItems = async () => {
    //       const navItemsFromServer = await fetchNavItems()
    //       setNavItems(navItemsFromServer)
    //     }
    //     getNavItems()
    //   }, [])
    // const fetchNavItems = async () => {
    //     const res = await fetch('http://localhost:5000/navbarItems')
    //     const data = await res.json();

    //     return data
    //   }
      
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {navbarItems.map((item, index) => <NavButton key={index} title={item.title} path={item.path}/>)}
            </ul>
        </div>
    )
}

export default Navbar
