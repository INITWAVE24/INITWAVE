import React, { useState, useEffect } from 'react';
import logo1 from "../Images/logo1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "../App.css";
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Listen to route changes
    const location = useLocation();
    useEffect(() => {
        setIsMobileMenuOpen(false); // Close the mobile menu on route change
    }, [location]);

    return (
        <nav className="navbar">
            <div className="logo-toggle-container">
                <div className='logo-div'>
                    <img src={logo1} className="logo" alt="Logo" />
                    <div className='name-div'>
                        <p>INTERACT IT</p>
                        <p>SERVICES</p>
                    </div>
                </div>
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                </div>
            </div>
            <div className={`mobile-menu-contents ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="contents">
                    <NavLink exact to='' activeClassName="active" smooth={true} offset={0} duration={500}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to='about-us' activeClassName="active" smooth={true} offset={0} duration={500}>
                        <li>About Us</li>
                    </NavLink>
                    <NavLink to='services' activeClassName="active" smooth={true} offset={0} duration={500}>
                        <li>Services</li>
                    </NavLink>
                    <NavLink to='careers' activeClassName="active" smooth={true} offset={0} duration={500}>
                        <li>Careers</li>
                    </NavLink>
                    <NavLink to='contact' activeClassName="active" smooth={true} offset={0} duration={500}>
                        <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
