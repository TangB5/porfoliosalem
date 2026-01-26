'use client'

import { useState } from 'react'
import FadeIn from '@/components/animations/FadeIn'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
    const [activeTab, setActiveTab] = useState('overview')
    const { t } = useLanguage()

    const tabs = [
        { id: 'overview', label: t.about.overview },
        { id: 'expertise', label: t.about.expertise },
        { id: 'approach', label: t.about.approach }
    ]

    const expertise = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: t.about.threatDetection,
            description: t.about.threatDetectionDesc
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: t.about.incidentResponse,
            description: t.about.incidentResponseDesc
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: t.about.siemEngineering,
            description: t.about.siemEngineeringDesc
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: t.about.securityAutomation,
            description: t.about.securityAutomationDesc
        }
    ]

    const approach = [
        { step: '01', title: t.about.identify, description: t.about.identifyDesc },
        { step: '02', title: t.about.analyze, description: t.about.analyzeDesc },
        { step: '03', title: t.about.contain, description: t.about.containDesc },
        { step: '04', title: t.about.eradicate, description: t.about.eradicateDesc },
        { step: '05', title: t.about.recover, description: t.about.recoverDesc },
        { step: '06', title: t.about.learn, description: t.about.learnDesc }
    ]

    return (
        <section id="about" className="section-container bg-dark-bg/50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            {t.about.title} <span className="text-cyber-green">{t.about.me}</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t.about.subtitle}
                        </p>
                    </div>
                </FadeIn>

                {/* Tab Navigation */}
                <FadeIn delay={0.2}>
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex bg-dark-surface border border-dark-border rounded-lg p-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                                        activeTab === tab.id
                                            ? 'bg-cyber-green text-dark-bg'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Tab Content */}
                <div>
                    {/* Overview Tab */}
                    {activeTab === 'overview' && (
                        <FadeIn key="overview">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-display font-bold text-white">
                                        {t.about.yearsSecuring}
                                    </h3>
                                    <div className="space-y-4 text-gray-300 leading-relaxed">
                                        <p>{t.about.description1}</p>
                                        <p>{t.about.description2}</p>
                                        <p>{t.about.description3}</p>
                                    </div>

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        {[
                                            { value: '99.2%', label: t.about.slaCompliance },
                                            { value: '150+', label: t.about.detectionRules },
                                            { value: '60%', label: t.about.falsePositiveReduction },
                                            { value: '24/7', label: t.about.threatMonitoring }
                                        ].map((stat, idx) => (
                                            <Card key={idx} hover={false}>
                                                <div className="text-2xl font-bold text-cyber-green mb-1">{stat.value}</div>
                                                <div className="text-sm text-gray-400">{stat.label}</div>
                                            </Card>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Element */}
                                <Card>
                                    <div className="space-y-4 font-mono text-sm">
                                        {[
                                            { skill: 'Threat Detection', level: 'Advanced', color: 'cyber-green' },
                                            { skill: 'Incident Response', level: 'Expert', color: 'cyber-green' },
                                            { skill: 'SIEM Platforms', level: 'Proficient', color: 'cyber-blue' },
                                            { skill: 'Threat Intelligence', level: 'Advanced', color: 'cyber-green' },
                                            { skill: 'Security Automation', level: 'Proficient', color: 'cyber-blue' },
                                            { skill: 'Malware Analysis', level: 'Intermediate', color: 'cyber-pink' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between text-gray-400">
                                                <span>{item.skill}</span>
                                                <span className={`text-${item.color}`}>{item.level}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-dark-border">
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span>Security Posture</span>
                                            <span className="text-cyber-green">OPTIMAL</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </FadeIn>
                    )}

                    {/* Expertise Tab */}
                    {activeTab === 'expertise' && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {expertise.map((item, index) => (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <Card hover glow>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-cyber-green/10 rounded-lg flex items-center justify-center text-cyber-green group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-display font-semibold text-white mb-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-400 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </FadeIn>
                            ))}
                        </div>
                    )}

                    {/* Approach Tab */}
                    {activeTab === 'approach' && (
                        <FadeIn key="approach">
                            <div className="max-w-4xl mx-auto">
                                <p className="text-center text-gray-400 mb-12 text-lg">
                                    {t.about.methodologyTitle}
                                </p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {approach.map((item, index) => (
                                        <FadeIn key={index} delay={index * 0.1}>
                                            <Card hover>
                                                <div className="text-5xl font-bold text-cyber-green/20 font-display mb-4 group-hover:text-cyber-green/40 transition-colors">
                                                    {item.step}
                                                </div>
                                                <h4 className="text-xl font-display font-semibold text-white mb-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </Card>
                                        </FadeIn>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    )}
                </div>
            </div>
        </section>
    )
}