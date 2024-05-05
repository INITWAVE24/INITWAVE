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
      
        formData.append("access_key", "a229af6f-5609-4ccc-b0b7-2e057c022266");
      
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
                <div className="contact-col1">
                    <p>If you have any questions, suggestions, or would like to get in touch with the owner of the website, please feel free to send us a message using the form below. We'll get back to you as soon as possible. Your feedback is valuable to us!</p>

                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope} className='font-icon'/> intractit@gmail.com</li>
                        <li><FontAwesomeIcon icon={faPhone} className='font-icon'/> +91 7204070100</li>
                        <li><FontAwesomeIcon icon={faMapMarkerAlt} className='font-icon'/> Banglore, India</li>
                    </ul>
                </div>
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
