export const certifications = [
    {
        id: 1,
        name: "Certified Information Systems Security Professional",
        acronym: "CISSP",
        issuer: "(ISC)²",
        date: "2023",
        status: "Active",
        credentialId: "123456",
        description: "Advanced cybersecurity certification covering 8 domains of security",
        badge: "/images/certifications/cissp.png",
        link: "https://www.isc2.org/Certifications/CISSP",
        priority: 1,
        color: "from-green-400 to-blue-500"
    },
    {
        id: 2,
        name: "GIAC Certified Incident Handler",
        acronym: "GCIH",
        issuer: "GIAC",
        date: "2023",
        status: "Active",
        credentialId: "789012",
        description: "Expertise in detecting, responding to, and resolving security incidents",
        badge: "/images/certifications/gcih.png",
        link: "https://www.giac.org/certification/certified-incident-handler-gcih",
        priority: 1,
        color: "from-blue-400 to-purple-500"
    },
    {
        id: 3,
        name: "Certified Ethical Hacker",
        acronym: "CEH",
        issuer: "EC-Council",
        date: "2022",
        status: "Active",
        credentialId: "345678",
        description: "Understanding hacking techniques to better defend against attacks",
        badge: "/images/certifications/ceh.png",
        link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
        priority: 2,
        color: "from-red-400 to-pink-500"
    },
    {
        id: 4,
        name: "CompTIA CySA+",
        acronym: "CySA+",
        issuer: "CompTIA",
        date: "2022",
        status: "Active",
        credentialId: "901234",
        description: "Behavioral analytics to detect and combat cybersecurity threats",
        badge: "/images/certifications/cysa.png",
        link: "https://www.comptia.org/certifications/cybersecurity-analyst",
        priority: 2,
        color: "from-cyan-400 to-blue-500"
    },
    {
        id: 5,
        name: "GIAC Security Essentials",
        acronym: "GSEC",
        issuer: "GIAC",
        date: "2021",
        status: "Active",
        credentialId: "567890",
        description: "Foundational information security knowledge and skills",
        badge: "/images/certifications/gsec.png",
        link: "https://www.giac.org/certification/security-essentials-gsec",
        priority: 3,
        color: "from-yellow-400 to-orange-500"
    },
    {
        id: 6,
        name: "CompTIA Security+",
        acronym: "Security+",
        issuer: "CompTIA",
        date: "2020",
        status: "Active",
        credentialId: "234567",
        description: "Baseline cybersecurity skills for IT security roles",
        badge: "/images/certifications/security-plus.png",
        link: "https://www.comptia.org/certifications/security",
        priority: 3,
        color: "from-green-400 to-teal-500"
    },
    {
        id: 7,
        name: "Splunk Core Certified Power User",
        acronym: "SCPU",
        issuer: "Splunk",
        date: "2022",
        status: "Active",
        credentialId: "SPL-678901",
        description: "Advanced Splunk knowledge for complex searches and reporting",
        badge: "/images/certifications/splunk.png",
        link: "https://www.splunk.com/en_us/training/certification-track/splunk-core-certified-power-user.html",
        priority: 2,
        color: "from-orange-400 to-red-500"
    },
    {
        id: 8,
        name: "Microsoft Certified: Security Operations Analyst",
        acronym: "SC-200",
        issuer: "Microsoft",
        date: "2023",
        status: "Active",
        credentialId: "MS-890123",
        description: "Threat investigation and response using Microsoft security solutions",
        badge: "/images/certifications/microsoft-sc200.png",
        link: "https://learn.microsoft.com/en-us/certifications/security-operations-analyst/",
        priority: 2,
        color: "from-blue-500 to-indigo-500"
    }
];

export const certificationCategories = [
    { name: "All", count: certifications.length },
    { name: "Security Operations", count: 4 },
    { name: "Incident Response", count: 2 },
    { name: "Security Tools", count: 2 },
    { name: "Cloud Security", count: 1 }
];

export const upcomingCertifications = [
    {
        name: "Offensive Security Certified Professional (OSCP)",
        targetDate: "Q2 2025",
        status: "In Progress"
    },
    {
        name: "GIAC Certified Forensic Analyst (GCFA)",
        targetDate: "Q3 2025",
        status: "Planned"
    }
];