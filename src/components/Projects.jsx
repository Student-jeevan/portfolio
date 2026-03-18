import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
    const navigate = useNavigate();

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="project-card clickable-card"
                        onClick={() => navigate(`/project/${project.id}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>

                        <ul className="project-features">
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>

                        <div className="project-tech">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="tech-badge">{tech}</span>
                            ))}
                        </div>

                        <div className="project-actions" onClick={(e) => e.stopPropagation()}>
                            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                                <FaGithub /> GitHub
                            </a>
                            {/* If demo link is available */}
                            {project.demo !== '#' && (
                                <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-outline">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
