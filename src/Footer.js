import React from 'react';
import { FaWhatsapp, FaGlobe } from 'react-icons/fa';
import './footer.css'; // Import your custom styles

const Footer = () => {
  const whatsappNumber = '+923473116844';
  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(whatsappNumber)}`;
  const websiteLink = 'https://mrirtiza.netlify.app/';

  return (
    <footer className="site-footer">
      <p>&copy; Developed by Irtiza Hamail</p>
      <a href={websiteLink} target="_blank" rel="noopener noreferrer">
        <FaGlobe size={30} style={{ marginLeft: '10px' }} />
        <FaWhatsapp size={30} style={{ marginLeft: '10px' }} />
      </a>
    </footer>
  );
};

export default Footer;
