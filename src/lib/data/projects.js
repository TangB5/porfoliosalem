export const projects = [
    {
        id: 1,
        title: "Advanced Threat Detection System",
        category: "SIEM Implementation",
        description: "Designed and implemented an advanced threat detection system using Splunk Enterprise Security, reducing mean time to detect (MTTD) by 45% through custom correlation rules and automated playbooks.",
        technologies: ["Splunk", "Python", "MITRE ATT&CK", "SOAR"],
        highlights: [
            "Reduced MTTD by 45%",
            "Automated 80% of tier-1 alerts",
            "Integrated 15+ data sources",
            "Created 50+ custom detection rules"
        ],
        metrics: {
            alertReduction: "60%",
            automationRate: "80%",
            detectionAccuracy: "94%"
        },
        image: "/images/projects/threat-detection.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Ransomware Detection & Response Framework",
        category: "Incident Response",
        description: "Developed a comprehensive ransomware detection framework leveraging behavior analytics and machine learning to identify ransomware activities in real-time across 5,000+ endpoints.",
        technologies: ["CrowdStrike", "Python", "Elastic Stack", "PowerShell"],
        highlights: [
            "Detected 100% of ransomware samples in testing",
            "Average detection time: 3 minutes",
            "Zero false positives in production",
            "Automated containment procedures"
        ],
        metrics: {
            detectionRate: "100%",
            responseTime: "3 min",
            falsePositives: "0%"
        },
        image: "/images/projects/ransomware.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Automated Security Orchestration Platform",
        category: "SOAR Development",
        description: "Built a custom SOAR platform that orchestrates security tools and automates incident response workflows, processing 10,000+ security events daily with intelligent triage and remediation.",
        technologies: ["Python", "REST APIs", "Docker", "Ansible", "Splunk"],
        highlights: [
            "Processes 10K+ events daily",
            "Automated 25+ playbooks",
            "Integrated 20+ security tools",
            "Reduced analyst workload by 70%"
        ],
        metrics: {
            eventsProcessed: "10K+/day",
            workloadReduction: "70%",
            integrations: "20+"
        },
        image: "/images/projects/soar-platform.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Insider Threat Detection Program",
        category: "Threat Intelligence",
        description: "Implemented a comprehensive insider threat detection program using UEBA (User and Entity Behavior Analytics) to identify anomalous user activities and prevent data exfiltration.",
        technologies: ["Splunk UBA", "Machine Learning", "Python", "SQL"],
        highlights: [
            "Identified 15 high-risk incidents",
            "95% accuracy in anomaly detection",
            "Prevented 3 data breaches",
            "Monitored 2,000+ users"
        ],
        metrics: {
            accuracy: "95%",
            incidentsDetected: "15",
            breachesPrevented: "3"
        },
        image: "/images/projects/insider-threat.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "Cloud Security Monitoring Solution",
        category: "Cloud Security",
        description: "Architected and deployed a multi-cloud security monitoring solution for AWS and Azure environments, providing real-time visibility and automated compliance checks across 200+ cloud resources.",
        technologies: ["AWS GuardDuty", "Azure Sentinel", "Terraform", "Lambda"],
        highlights: [
            "Monitors 200+ cloud resources",
            "Real-time threat detection",
            "Automated compliance reporting",
            "Cost reduction: 40%"
        ],
        metrics: {
            resources: "200+",
            complianceScore: "98%",
            costReduction: "40%"
        },
        image: "/images/projects/cloud-security.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 6,
        title: "Phishing Detection & Prevention System",
        category: "Email Security",
        description: "Created an advanced phishing detection system using natural language processing and URL analysis to identify and block sophisticated phishing campaigns, protecting 5,000+ users.",
        technologies: ["Python", "NLP", "Machine Learning", "VirusTotal API"],
        highlights: [
            "Blocked 10K+ phishing attempts",
            "98% detection accuracy",
            "Real-time URL scanning",
            "Automated user training alerts"
        ],
        metrics: {
            detectionRate: "98%",
            attacksBlocked: "10K+",
            falsePositives: "2%"
        },
        image: "/images/projects/phishing.jpg",
        link: "#",
        github: "#"
    }
];

export const projectCategories = [
    "All Projects",
    "SIEM Implementation",
    "Incident Response",
    "SOAR Development",
    "Threat Intelligence",
    "Cloud Security",
    "Email Security"
];