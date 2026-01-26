export const skillCategories = [
    {
        title: "Security Tools & Platforms",
        skills: [
            { name: "Splunk", level: 95, category: "SIEM" },
            { name: "IBM QRadar", level: 90, category: "SIEM" },
            { name: "ArcSight", level: 85, category: "SIEM" },
            { name: "CrowdStrike Falcon", level: 92, category: "EDR" },
            { name: "Carbon Black", level: 88, category: "EDR" },
            { name: "Wireshark", level: 93, category: "Network" },
            { name: "Snort", level: 87, category: "IDS/IPS" },
            { name: "Suricata", level: 85, category: "IDS/IPS" },
        ]
    },
    {
        title: "Threat Intelligence & Analysis",
        skills: [
            { name: "MITRE ATT&CK", level: 95, category: "Framework" },
            { name: "Threat Hunting", level: 90, category: "Analysis" },
            { name: "Malware Analysis", level: 88, category: "Analysis" },
            { name: "OSINT", level: 92, category: "Intelligence" },
            { name: "Threat Intelligence Platforms", level: 87, category: "Intelligence" },
            { name: "IOC Analysis", level: 93, category: "Analysis" },
        ]
    },
    {
        title: "Incident Response & Forensics",
        skills: [
            { name: "Incident Response", level: 94, category: "Response" },
            { name: "Digital Forensics", level: 88, category: "Forensics" },
            { name: "Log Analysis", level: 96, category: "Analysis" },
            { name: "Root Cause Analysis", level: 90, category: "Analysis" },
            { name: "FTK", level: 85, category: "Forensics" },
            { name: "Volatility", level: 87, category: "Forensics" },
        ]
    },
    {
        title: "Programming & Scripting",
        skills: [
            { name: "Python", level: 92, category: "Language" },
            { name: "PowerShell", level: 88, category: "Scripting" },
            { name: "Bash", level: 90, category: "Scripting" },
            { name: "SQL", level: 85, category: "Database" },
            { name: "YARA Rules", level: 87, category: "Detection" },
        ]
    },
    {
        title: "Cloud & Infrastructure",
        skills: [
            { name: "AWS Security", level: 86, category: "Cloud" },
            { name: "Azure Security", level: 83, category: "Cloud" },
            { name: "Linux Administration", level: 91, category: "OS" },
            { name: "Windows Security", level: 89, category: "OS" },
            { name: "Network Security", level: 92, category: "Network" },
        ]
    }
];

export const topSkills = [
    "Splunk",
    "Log Analysis",
    "Incident Response",
    "MITRE ATT&CK",
    "Threat Hunting",
    "Python",
    "CrowdStrike",
    "Wireshark",
    "SIEM/SOAR",
    "Malware Analysis"
];