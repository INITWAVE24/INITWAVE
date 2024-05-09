import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { motion } from "framer-motion";
import React from 'react';

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
      
        formData.append("access_key", "07366985-1dee-4acb-853d-ee9482ac189d");
      
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
      
        const data = await response.json();
      
        if (data.success) {
          setResult("Form Submitted Successfully!!!!!");
          event.target.reset();
          setTimeout(() => {
            setResult(null);
          }, 2000); 
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    

    return (
        <div className="contact-container">
            <h1 className="contact-head">Fill the form to get in touch</h1>
            <div className="contact">
             
                <div className="contact-col2">
                    <form className="forms" onSubmit={onSubmit}>
                        <input type="text" name="name" placeholder="Enter your Name" required/><br/>
                        <input type="text" name="company" placeholder="Company Name" required/><br/>
                        <input type="text" name="city" placeholder="Enter City and State" required/><br/>
                        <input type="text" name="country" placeholder="Enter Country" required/><br/>
                        <input type="text" name="email" placeholder="Enter Email" required/><br/>
                        <input type="tel" name="phone" placeholder="Enter your Phone Number" required/><br/>
                        <textarea name="message" rows="6" placeholder="Enquiry message"></textarea><br/>
                        <motion.button whileTap={{ scale: 0.85 }}>Submit</motion.button>
                        <span>{result}</span>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
