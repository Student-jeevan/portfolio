import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modalImage, setModalImage] = useState(null);

    // Scroll to top when loading the details page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const project = projectsData.find(p => p.id === id);

    if (!project) {
        return (
            <div className="project-not-found">
                <h2>Project not found</h2>
                <Link to="/" className="btn btn-primary">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="portfolio-app">
            <nav className="navbar">
                <div className="nav-container nav-details">
                    <button onClick={() => navigate('/')} className="btn btn-outline back-btn">
                        <FaArrowLeft /> Back to Portfolio
                    </button>
                </div>
            </nav>

            <main className="details-main">
                <section className="details-header">
                    <h1>{project.title}</h1>
                    <p className="details-desc">{project.description}</p>

                    <div className="project-tech details-tech">
                        {project.tech.map((techItem, i) => (
                            <span key={i} className="tech-badge">{techItem}</span>
                        ))}
                    </div>

                    <div className="details-actions">
                        <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                            <FaGithub /> View Code
                        </a>
                        {project.demo !== '#' && (
                            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-outline">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                    </div>
                </section>

                <section className="details-gallery">
                    <h2>Project Gallery</h2>
                    <div className="gallery-grid">
                        {project.images && project.images.map((imgUrl, idx) => (
                            <div key={idx} className="gallery-image-container" style={{ cursor: 'pointer' }} onClick={() => setModalImage(imgUrl)}>
                                <img src={imgUrl} alt={`${project.title} screenshot ${idx + 1}`} />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="details-features">
                    <h2>Key Features</h2>
                    <ul className="project-features details-feature-list">
                        {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                </section>
            </main>

            <Footer />

            <ImageModal
                isOpen={!!modalImage}
                imageSrc={modalImage}
                onClose={() => setModalImage(null)}
            />
        </div>
    );
};

export default ProjectDetails;
