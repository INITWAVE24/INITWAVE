import '../App.css';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='about-container'>
            <motion.h2
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                About Us
            </motion.h2>

            <div className='about'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                   <p>Interact's expertise extends beyond traditional engineering services, encompassing a comprehensive array of specialized fields that are integral to modern industry. With a focus on innovation and excellence, our team is dedicated to pushing the boundaries of engineering design, product development, and manufacturing processes.Our success is underpinned by a highly experienced team of professionals who bring a wealth of knowledge and expertise to every project.</p>
                   
                </motion.div>
                
            </div>
            
          <Link to='about-us'><motion.button
      whileTap={{ scale: 0.85 }}
    >
   Read more

   <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />

    </motion.button></Link>  
   
        </div>
    );
}

export default About;
