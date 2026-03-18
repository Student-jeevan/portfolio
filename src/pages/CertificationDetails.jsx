import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { certificationsData } from '../data/certifications';
import Footer from '../components/Footer';

const CertificationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const cert = certificationsData.find(c => c.id === id);

    if (!cert) {
        return (
            <div className="project-not-found">
                <h2>Certification not found</h2>
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
                    <h1>{cert.title}</h1>
                    <p className="details-desc">{cert.description}</p>

                    <div className="project-tech details-tech">
                        <span className="tech-badge">Issued by {cert.organization}</span>
                        <span className="tech-badge">Year: {cert.year}</span>
                    </div>

                    <div className="details-actions">
                        {cert.link && cert.link !== '#' && (
                            <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                                <FaExternalLinkAlt /> Verify Credential
                            </a>
                        )}
                        <a href={cert.file} target="_blank" rel="noreferrer" className="btn btn-outline">
                            <FaExternalLinkAlt /> Open Certificate
                        </a>
                    </div>
                </section>

                <section className="details-gallery">
                    <div className="gallery-grid" style={{ gridTemplateColumns: 'minmax(300px, 800px)', justifyContent: 'center' }}>
                        <div className="gallery-image-container" style={{ height: '600px', display: 'flex', justifyContent: 'center' }}>
                            <object
                                data={cert.file}
                                type="application/pdf"
                                width="100%"
                                height="100%"
                            >
                                <p>Your browser does not support PDFs. <a href={cert.file}>Download the PDF</a>.</p>
                            </object>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CertificationDetails;
