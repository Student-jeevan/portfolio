import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Training from './components/Training';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './pages/ProjectDetails';
import CertificationDetails from './pages/CertificationDetails';
import AchievementDetails from './pages/AchievementDetails';

const Home = () => (
    <>
        <Navbar />
        <main>
            <Introduction />
            <TechStack />
            <Projects />
            <Certifications />
            <Achievements />
            <Training />
            <Education />
            <Contact />
        </main>
        <Footer />
    </>
);

function App() {
    return (
        <Router>
            <div className="portfolio-app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project/:id" element={<ProjectDetails />} />
                    <Route path="/certification/:id" element={<CertificationDetails />} />
                    <Route path="/achievement/:id" element={<AchievementDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
