import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { achievementsData } from '../data/achievements';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';

const AchievementDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const achievement = achievementsData.find(a => a.id === id);

    if (!achievement) {
        return (
            <div className="project-not-found">
                <h2>Achievement not found</h2>
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
                    <h1>{achievement.title}</h1>
                    <p className="details-desc">{achievement.description}</p>

                    <div className="project-tech details-tech">
                        <span className="tech-badge">{achievement.platform}</span>
                        <span className="tech-badge">{achievement.date}</span>
                    </div>

                    <div className="details-actions">
                        {achievement.link && achievement.link !== '#' && (
                            <a href={achievement.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                                <FaExternalLinkAlt /> View Achievement
                            </a>
                        )}
                    </div>
                </section>

                <section className="details-gallery">
                    <div className="gallery-grid" style={achievement.images ? {} : { gridTemplateColumns: 'minmax(300px, 800px)', justifyContent: 'center' }}>
                        {achievement.images ? (
                            achievement.images.map((imgUrl, idx) => (
                                <div key={idx} className="gallery-image-container" style={{ cursor: 'pointer' }} onClick={() => setModalImage(imgUrl)}>
                                    <img src={imgUrl} alt={`${achievement.title} ${idx + 1}`} />
                                </div>
                            ))
                        ) : (
                            <div className="gallery-image-container" style={{ cursor: 'pointer' }} onClick={() => setModalImage(achievement.image)}>
                                <img src={achievement.image} alt={achievement.title} />
                            </div>
                        )}
                    </div>
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

export default AchievementDetails;
