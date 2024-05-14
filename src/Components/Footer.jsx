import React from 'react';
import './Footer.css'; // Assuming you have a CSS file named Footer.css for styling
import { FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <div className="description">
          <p>Follow us for the latest updates</p>
          <p>on fashion and trends</p>
        </div>
        <div className="shop-name">
          <p>VSTRADERS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
