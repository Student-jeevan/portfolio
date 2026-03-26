import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <ul className="nav-links">
                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#tech-stack">Tech Stack</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="/#certifications">Certifications</a></li>
                    <li><a href="/#achievements">Achievements</a></li>
                    <li><a href="/#training">Training</a></li>
                    <li><a href="/#education">Education</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
