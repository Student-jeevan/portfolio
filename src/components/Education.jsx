import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';

const educationData = [
    {
        id: 1,
        institution: "Lovely Professional University",
        location: "Pagwara, India",
        degree: "Bachelor of Technology – Computer Science and Engineering",
        score: "CGPA: 8.45",
        duration: "Aug 2023 – Present"
    },
    {
        id: 2,
        institution: "TSWREIS Junior College",
        location: "Bhiknoor Kamareddy, Telangana",
        degree: "Intermediate",
        score: "Percentage: 96.9%",
        duration: "Jul 2022 – Apr 2023"
    },
    {
        id: 3,
        institution: "TSWREIS School",
        location: "Bhiknoor Kamareddy, Telangana",
        degree: "Matriculation",
        score: "Percentage: 100%",
        duration: "2021 – 2022" // Providing a default duration since it was empty
    }
];

const Education = () => {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education-grid">
                {educationData.map((edu) => (
                    <div key={edu.id} className="education-card">
                        <div className="edu-header">
                            <FaGraduationCap className="edu-icon" />
                            <h3 className="edu-institution">{edu.institution}</h3>
                        </div>
                        <h4 className="edu-degree">{edu.degree}</h4>

                        <div className="edu-details-grid">
                            <div className="edu-detail-item">
                                <FaStar className="detail-icon score-icon" />
                                <span>{edu.score}</span>
                            </div>
                            <div className="edu-detail-item">
                                <FaCalendarAlt className="detail-icon" />
                                <span>{edu.duration}</span>
                            </div>
                            <div className="edu-detail-item">
                                <FaMapMarkerAlt className="detail-icon" />
                                <span>{edu.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
