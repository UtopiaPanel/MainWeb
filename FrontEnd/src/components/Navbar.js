import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
    const location = useLocation();
    const status = (path) => {
        return location.pathname === path ? 'active' : '';
    }

    return (
        <header>
            <Link to="/UtopiaWeb" className={status('/UtopiaWeb')}>
                <img src={logo} alt="Logo" className={"logo"}/>
            </Link>
            <nav>
                <ul className={"nav_links"}>
                    <li><Link to="/UtopiaWeb" className={status('/UtopiaWeb')}> Home </Link></li>
                    <li><Link to="/events" className={status('/events')}>Events</Link></li>
                    <li><Link to="/join" className={status('/join')}>Join Us</Link></li>
                    <li><Link to="/resources" className={status('/resources')}>Resources</Link></li>
                    <li><Link to="/gallery" className={status('/gallery')}>Gallery</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
