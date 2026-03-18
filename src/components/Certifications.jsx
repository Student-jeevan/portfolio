import React from 'react';
import { FaAward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { certificationsData } from '../data/certifications';

const Certifications = () => {
    const navigate = useNavigate();

    return (
        <section id="certifications">
            <h2>Certifications</h2>
            <div className="cert-grid">
                {certificationsData.map((cert) => (
                    <div
                        key={cert.id}
                        className="cert-card clickable-card"
                        onClick={() => navigate(`/certification/${cert.id}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="cert-icon">
                            <FaAward />
                        </div>
                        <h3 className="cert-title">{cert.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
