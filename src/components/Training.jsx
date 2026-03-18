import React, { useState } from 'react';
import { FaCalendarAlt, FaCertificate } from 'react-icons/fa';
import ImageModal from './ImageModal';
import trainingCertImg from '../assets/Thitre Jeevan Singh - Certificate.png';

const trainingData = [
    {
        id: 1,
        title: "Competitive Programming Training – Algo-Tutor",
        type: "Certificate Program",
        duration: "Jun 2025 – Jul 2025",
        certificate: trainingCertImg,
        details: [
            "Completed competitive programming training focused on algorithms, data structures, and problem optimization.",
            "Worked on a network routing optimization project applying algorithmic techniques to improve efficiency and path selection."
        ]
    }
];

const Training = () => {
    const [modalImage, setModalImage] = useState(null);

    return (
        <section id="training">
            <h2>Training</h2>
            <div className="training-container">
                {trainingData.map((training) => (
                    <div
                        key={training.id}
                        className="training-card clickable-card"
                        onClick={() => {
                            if (training.certificate) {
                                setModalImage(training.certificate);
                            }
                        }}
                        style={{ cursor: training.certificate ? 'pointer' : 'default' }}
                    >
                        <div className="training-header">
                            <h3 className="training-title">{training.title}</h3>
                        </div>
                        <div className="training-meta">
                            <span className="training-type">
                                <FaCertificate className="meta-icon" /> {training.type}
                            </span>
                            <span className="training-divider">|</span>
                            <span className="training-duration">
                                <FaCalendarAlt className="meta-icon" /> {training.duration}
                            </span>
                        </div>
                        <ul className="training-details">
                            {training.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <ImageModal
                isOpen={!!modalImage}
                imageSrc={modalImage}
                onClose={() => setModalImage(null)}
            />
        </section>
    );
};

export default Training;
