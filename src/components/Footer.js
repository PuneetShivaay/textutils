import React from 'react';
import '../Footer.css'; // Optional: if you want to add custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} TextUtils by <a href="https://otical.web.app/" target="_blank" rel="noopener noreferrer">
        Otical
      </a>. All rights reserved. Contact us: oticalmail@gmail.com</p>

      </div>
    </footer>
  );
};

export default Footer;
