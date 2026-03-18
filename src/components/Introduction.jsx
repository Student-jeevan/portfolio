import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

// Assuming these files exist in src/assets
// If not, replace with public URLs or placeholders during development
import profileImg from '../assets/profile.jpg';
import cvFile from '../assets/Jeevansingh_CV.pdf';
import ImageModal from './ImageModal';

const Introduction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="home" className="intro-section">
            <div className="intro-content">
                <h1 className="intro-name">Thitre Jeevansingh</h1>
                <h2 className="intro-role">Computer Science Student | Software Developer</h2>
                <p className="intro-summary">
                    Computer Science student with experience building full-stack applications and a strong background in competitive programming. Currently focused on developing scalable backend systems, with growing interest in system design and DevOps to build reliable and high-performance software.

                </p>

                <div className="intro-links">
                    <a href="https://github.com/Student-jeevan" target="_blank" rel="noreferrer" className="social-link">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/jeevan-thitre/" target="_blank" rel="noreferrer" className="social-link">
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:jeevanthitrya@gmail.com"
                        className="social-link"
                    >
                        <FaEnvelope />
                    </a>
                </div>

                <a href={cvFile} download="Jeevansingh_CV.pdf" className="btn btn-primary">
                    <FaDownload /> Download CV
                </a>
            </div>

            <div className="intro-image">
                <div
                    className="profile-img-container"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setIsModalOpen(true)}
                >
                    <img
                        src={profileImg}
                        alt="Thitre Jeevansingh Profile"
                        onError={(e) => {
                            // Fallback to a placeholder if image doesn't exist
                            e.target.src = 'https://ui-avatars.com/api/?name=Thitre+Jeevansingh&size=320&background=f3f4f6&color=3b82f6';
                        }}
                    />
                </div>
            </div>

            <ImageModal
                isOpen={isModalOpen}
                imageSrc={profileImg}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Introduction;
