import React, { useState, useEffect } from 'react';
import logo1 from "../Images/logo1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Added faTimes icon
import { motion } from 'framer-motion'
import "../App.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
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
                <ul className={`contents ${isDropdownOpen ? 'open' : ''}`}>
                    <NavLink exact to='/' activeClassName="active" smooth={true} offset={0} duration={500}>
                        <li>HOME</li>
                    </NavLink>
                    <NavLink to='/about-us' activeClassName="active" smooth={true} offset={0} duration={500}>
                        <li>ABOUT US</li>
                    </NavLink>
                    <NavLink to='/services' activeClassName="active" smooth={true} offset={0} duration={500}>
                        <li>SERVICES</li>
                    </NavLink>
                    <NavLink to='/careers' activeClassName="active" smooth={true} offset={0} duration={500}>
                        <li>CAREERS</li>
                    </NavLink>
                    <NavLink to='/contact' activeClassName="active" smooth={true} offset={0} duration={500}>
                        <li>CONTACT</li>
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
