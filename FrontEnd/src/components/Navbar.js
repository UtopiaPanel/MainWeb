// Navbar.js (including '华大乌托邦' logo)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px' }}>
            <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>华大乌托邦</div>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: '0', padding: '0' }}>
                <li><Link to="/">Home</Link></li>
                <li 
                    onMouseEnter={toggleDropdown} 
                    onMouseLeave={toggleDropdown}
                >
                    Events
                    {isDropdownVisible && (
                        <ul className="dropdown" style={{ position: 'absolute', backgroundColor: '#e0e0e0', listStyle: 'none', padding: '10px' }}>
                            <li><Link to="/events/upcoming">Upcoming Events</Link></li>
                            <li><Link to="/events/past">Past Events</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/join">Join Us</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
