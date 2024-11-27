import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const location = useLocation();
    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <header>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                <img src={logo} alt="Logo" className={"logo"}/>
            </Link>
            <nav>
                <ul className={"nav_links"}>
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}> Home </Link></li>
                        <li
                            onMouseEnter={toggleDropdown}
                            onMouseLeave={toggleDropdown}
                            className="events-item"
                        >
                            <span className={location.pathname.includes('/events/') ? 'active' : ''}>Events</span>
                    {isDropdownVisible && (
                        <ul className="dropdown">
                        <li><Link to="/events/upcoming" className={location.pathname === '/events/upcoming' ? 'active' : ''}>Upcoming Events</Link></li>
                                <li><Link to="/events/past" className={location.pathname === '/events/past' ? 'active' : ''}>Past Events</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="/join" className={location.pathname === '/join' ? 'active' : ''}>Join Us</Link></li>
                    <li><Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>Resources</Link></li>
                    <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
