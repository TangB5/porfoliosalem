'use client'

import { useState } from 'react'
import { experience, statistics } from '@/lib/data/experience'
import FadeIn from '@/components/animations/FadeIn'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Experience() {
    const [selectedJob, setSelectedJob] = useState(0)
    const { t } = useLanguage()

    return (
        <section id="experience" className="section-container bg-dark-bg/50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            {t.experience.title} <span className="text-cyber-green">{t.experience.titleHighlight}</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t.experience.subtitle}
                        </p>
                    </div>
                </FadeIn>

                {/* Statistics */}
                <div className="w-full  place-items-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
                    {statistics.map((stat, index) => (
                        <FadeIn key={index} delay={0.1 + index * 0.1}>
                            <Card hover className="text-center">
                                <div className="text-4xl font-bold text-cyber-green mb-2 font-display">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
                </div>
                

                {/* Experience Timeline */}
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Job List - Sidebar */}
                    <div className="lg:col-span-4 space-y-2">
                        {experience.map((job, index) => (
                            <FadeIn key={job.id} delay={0.3 + index * 0.1}>
                                <button
                                    onClick={() => setSelectedJob(index)}
                                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                                        selectedJob === index
                                            ? 'bg-cyber-green text-dark-bg border border-cyber-green'
                                            : 'bg-dark-surface border border-dark-border text-gray-400 hover:border-cyber-green/50 hover:text-white'
                                    }`}
                                >
                                    <div className="font-semibold mb-1">{job.role}</div>
                                    <div className="text-sm opacity-80">{job.company}</div>
                                    <div className="text-xs opacity-60 mt-1 font-mono">{job.period}</div>
                                </button>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Job Details - Main Content */}
                    <FadeIn key={selectedJob} delay={0.2} className="lg:col-span-8">
                        <Card hover>
                            {/* Header */}
                            <div className="mb-6 pb-6 border-b border-dark-border">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                                            {experience[selectedJob].role}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                                <span>{experience[selectedJob].company}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span>{experience[selectedJob].location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Badge variant="primary">
                                        {experience[selectedJob].type}
                                    </Badge>
                                </div>
                                <div className="flex items-center space-x-2 text-sm text-gray-400 font-mono">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>{experience[selectedJob].period}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {experience[selectedJob].description}
                            </p>

                            {/* Responsibilities */}
                            <div className="mb-6">
                                <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    {t.experience.keyResponsibilities}
                                </h4>
                                <ul className="space-y-2">
                                    {experience[selectedJob].responsibilities.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-400">
                                            <span className="text-cyber-green mt-1">▹</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Achievements */}
                            <div className="mb-6">
                                <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    {t.experience.keyAchievements}
                                </h4>
                                <ul className="space-y-2">
                                    {experience[selectedJob].achievements.map((item, idx) => (
                                        <li key={idx} className="flex items-start space-x-3 text-gray-400">
                                            <span className="text-cyber-blue mt-1">★</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                                    {t.experience.technologiesUsed}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {experience[selectedJob].technologies.map((tech, idx) => (
                                        <Badge key={idx} variant="outline">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </FadeIn>
                </div>

                {/* Download Resume CTA */}
                <FadeIn delay={0.8}>
                    <div className="mt-16 text-center">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => window.open('/resume.pdf', '_blank')}
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {t.experience.downloadResume}
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}