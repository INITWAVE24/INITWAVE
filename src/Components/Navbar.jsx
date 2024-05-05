import { useState ,useEffect} from 'react';
import logo1 from "../Images/logo1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'
import "../App.css";
import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const [sticky,setSticky]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
window.scrollY>100?setSticky(true):setSticky(false);
        })
    },[]);

    return (
        <nav className={`navbar ${sticky?'dark-nav':''}`}>
            <div className='logo-div'>
            <img src={logo1} className="logo" />
            <div className='name-div'>
            <p>INTERACT IT</p>
            <p>SERVICES</p>
            </div>
            </div>
            <ul className="contents">
                <NavLink exact to='/' activeClassName="active"  smooth={true} offset={0} duration={500}>
                    <li>HOME</li>
                </NavLink>
                <NavLink to='/about-us' activeClassName="active"  smooth={true} offset={0} duration={500}>
                    <li>ABOUT US</li>
                </NavLink>
                <NavLink to='/services' activeClassName="active"  smooth={true} offset={0} duration={500}>
                <li>SERVICES</li>
                </NavLink>
                <NavLink to='/careers' activeClassName="active"  smooth={true} offset={0} duration={500}>
                    <li
                        onMouseEnter={toggleDropdown}
                        onMouseLeave={toggleDropdown}
                        className="dropdown-toggle"
                    >
                        CAREERS
                        <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                            <p>Join us at Interact IT and become a part of a community that values innovation, collaboration, and making a positive difference in the world. Together, we can create meaningful solutions that shape the future of technology and drive positive change for our clients and communities alike.</p>
                          <Link to='/careers'> <motion.button whileTap={{ scale: 0.85 }}>
                                Explore Opportunities
                                <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
                            </motion.button></Link> 
                        </div>
                    </li>
                </NavLink >
                <NavLink to='/contact' activeClassName="active"  smooth={true} offset={0} duration={500}>
                    <li>CONTACT</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;
