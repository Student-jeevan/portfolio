import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { achievementsData } from '../data/achievements';

const Achievements = () => {
    const navigate = useNavigate();

    return (
        <section id="achievements">
            <h2>Achievements</h2>
            <div className="achievements-list-container">
                {achievementsData.map((achievement) => (
                    <div
                        key={achievement.id}
                        className="achievement-row-card clickable-card"
                        onClick={() => navigate(`/achievement/${achievement.id}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="achievement-row-icon">
                            <FaTrophy />
                        </div>
                        <div className="achievement-row-content">
                            <span className="achievement-row-platform">{achievement.platform}: </span>
                            <span className="achievement-row-title">{achievement.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
