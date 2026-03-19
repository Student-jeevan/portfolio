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
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3912C28E5D34BE83ABD21C43C75DD4994E514D20802BE215DA35A6916979828C"
    },
    {
        id: "oracle-devops",
        title: "Oracle Cloud Infrastructure Certified DevOps Professional",
        organization: "Oracle",
        year: "2025",
        file: oracleDevopsCertificate,
        description: "Certification validating DevOps automation, infrastructure as code, and CI/CD expertise on Oracle Cloud Infrastructure.",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=0AE2654526A00D5B7D85487FFEAE14C14AB44084321976773FFB567F7CF3D40B"
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
