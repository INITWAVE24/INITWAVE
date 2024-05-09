import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'
function Headings() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
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
                            <li
                                onMouseEnter={toggleDropdown}
                                onMouseLeave={toggleDropdown}
                                className="dropdown-toggle"
                            >
                                CAREERS
                                <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                                    <p>Join us at Initwave IT and become a part of a community that values innovation, collaboration, and making a positive difference in the world. Together, we can create meaningful solutions that shape the future of technology and drive positive change for our clients and communities alike.</p>
                                    <NavLink to='/careers'>
                                        <motion.button whileTap={{ scale: 0.85 }}>
                                            Explore Opportunities
                                            <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                                        </motion.button>
                                    </NavLink>
                                </div>
                            </li>
                        </NavLink>
                        <NavLink to='/contact' activeClassName="active" smooth={true} offset={0} duration={500}>
                            <li>CONTACT</li>
                        </NavLink>  
        </div>
    )
}

export default Headings;
