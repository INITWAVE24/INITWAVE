import { Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  return (

    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact</h2>
          <ul>
          <li>Email: <a href='mailto:intractit@gmail.com'>intractit@gmail.com</a></li>
            <li>Phone: <a href="tel:+91 7204070100">+91 7204070100</a> (WhatsApp)</li>
            <li>Address: Banglore,India</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Services</h2>
          <ul>
            <li>Custom Software Development</li>
            <li>Product Development</li>
            <li>Initwave Priority Support</li>
            <li>Mobile Application Development</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Fast Links</h2>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="about-us">AboutUs</Link></li>
            <li><Link to="careers">Careers</Link></li>
            <li><Link to="contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Connect with Us</h2>
          <ul>
            <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
            <li><a href="https://wa.me/+91 7204070100">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Initwave IT. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
