import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    // Using 2026 as per user example or dynamic
    const showYear = currentYear >= 2026 ? currentYear : 2026;

    return (
        <footer className="footer">
            <div className="footer-socials">
                <a href="https://github.com/Student-jeevan" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/jeevan-thitre/" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="mailto:jeevanthitrya@gmail.com">
                    <FaEnvelope />
                </a>
            </div>
            <p className="footer-copyright">
                &copy; {showYear} Jeevansingh 
            </p>
        </footer>
    );
};

export default Footer;
