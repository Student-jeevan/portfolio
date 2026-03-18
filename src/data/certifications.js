import oracleAwsCertificate from '../assets/OracleAwsCertificate.pdf';
import oracleDevopsCertificate from '../assets/OracleDevopsCertificate.pdf';
import tleEliminatorCertificate from '../assets/TLEEliminators.pdf';

export const certificationsData = [
    {
        id: "oracle-architect",
        title: "Oracle Database AWS Certified Architect Professional",
        organization: "Oracle",
        year: "2025",
        file: oracleAwsCertificate,
        description: "Certification demonstrating advanced cloud architecture knowledge and ability to design, deploy, and manage distributed applications.",
        link: "#"
    },
    {
        id: "oracle-devops",
        title: "Oracle Cloud Infrastructure Certified DevOps Professional",
        organization: "Oracle",
        year: "2025",
        file: oracleDevopsCertificate,
        description: "Certification validating DevOps automation, infrastructure as code, and CI/CD expertise on Oracle Cloud Infrastructure.",
        link: "#"
    },
    {
        id: "tle-level2",
        title: "TLE Eliminators Competitive Programming Level-2",
        organization: "TLE Eliminators",
        year: "2024",
        file: tleEliminatorCertificate,
        description: "Advanced competitive programming certification covering complex algorithms, dynamic programming, and graph theory.",
        link: "#"
    }
];
