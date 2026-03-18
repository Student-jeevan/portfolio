import React from 'react';
import {
    FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap,
    FaDocker, FaGitAlt, FaGithub, FaAws, FaDatabase, FaServer, FaLeaf, FaCloud, FaRocket, FaCode
} from 'react-icons/fa';

const techStackData = {
    Languages: [
        { name: 'C++', icon: <FaCode /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'JavaScript', icon: <FaJs /> }
    ],
    Frameworks: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Spring Boot', icon: <FaLeaf /> },
        { name: 'Express.js', icon: <FaServer /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'Bootstrap', icon: <FaBootstrap /> }
    ],
    Databases: [
        { name: 'MySQL', icon: <FaDatabase /> },
        { name: 'MongoDB', icon: <FaDatabase /> },
        { name: 'Redis', icon: <FaDatabase /> }
    ],
    'Tools & Platforms': [
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Apache Kafka', icon: <FaServer /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Cloudinary', icon: <FaCloud /> },
        { name: 'Vercel', icon: <FaRocket /> }
    ]
};

const TechStack = () => {
    return (
        <section id="tech-stack">
            <h2>Technologies & Frameworks</h2>
            <div className="tech-container flex grid-cols-4">
                {Object.entries(techStackData).map(([category, techs], index) => (
                    <div key={index} className="tech-category">
                        <h3>{category}</h3>
                        <div className="tech-grid">
                            {techs.map((tech, i) => (
                                <div key={i} className="tech-item">
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
