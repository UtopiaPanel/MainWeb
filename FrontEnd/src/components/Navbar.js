import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/UtopiaWeb">Home</Link></li>
                <li><Link to="/events">Future Events</Link></li>
                <li><Link to="/join_us">Join Us</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;