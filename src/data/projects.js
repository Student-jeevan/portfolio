import codenexus1 from '../assets/codenexus1.png';
import codenexus2 from '../assets/codenexus2.png';
import codenexus3 from '../assets/codenexus3.png';
import codenexus4 from '../assets/codenexus4.png';
import crypto1 from '../assets/crypto1.png';
import crytpo2 from '../assets/crytpo2.png';
import crytpo3 from '../assets/crytpo3.png';
import crytpo4 from '../assets/crytpo4.png';
import crypto5 from '../assets/crypto5.png';
import crypto6 from '../assets/crypto6.png';

export const projectsData = [
    {
        id: "codenexus",
        title: "CodeNexus – Competitive Programming Platform",
        description: "Built a scalable competitive programming platform supporting multi-language code execution with AI debugging assistance.",
        features: [
            "JWT authentication and RBAC",
            "Real-time code execution using Judge0 API",
            "Google Gemini AI hints for debugging",
            "Admin dashboard for problems and test cases",
            "Optimized execution time with caching"
        ],
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Redis", "JWT", "Judge0 API", "Gemini AI", "Cloudinary", "Vercel"],
        images: [
            codenexus1,
            codenexus2,
            codenexus3,
            codenexus4
        ],
        github: "https://github.com/rajverma04/CodeNexus",
        demo: "https://codenexusdev.vercel.app/"
    },
    {
        id: "cryptotrading",
        title: "Crypto Trading – Realtime Crypto Trading Platform",
        description: "Developed a secure crypto trading backend with real-time price tracking and AI chatbot support.",
        features: [
            "JWT authentication + 2FA",
            "CoinGecko API integration for real-time prices",
            "AI chatbot for trading queries",
            "Razorpay & Stripe payments",
            "Peer-to-peer crypto transactions"
        ],
        tech: ["Java", "Spring Boot", "MySQL", "Docker", "Spring Security", "React", "Redis", "Apache Kafka"],
        images: [
            crypto1,
            crytpo2,
            crytpo3,
            crytpo4,
            crypto5,
            crypto6
        ],
        github: "https://github.com/Student-jeevan/RealTimeTradingApp",
        demo: "https://cryptotrading-demo.vercel.app/" // Replace this with the actual live URL
    }
];
