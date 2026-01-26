'use client'

import { useState } from 'react'
import { skillCategories, topSkills } from '@/lib/data/skills'
import FadeIn from '@/components/animations/FadeIn'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Skills() {
    const [selectedCategory, setSelectedCategory] = useState(0)
    const { t } = useLanguage()

    return (
        <section id="skills" className="section-container">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            {t.skills.title} <span className="text-cyber-green">{t.skills.titleHighlight}</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t.skills.subtitle}
                        </p>
                    </div>
                </FadeIn>

                {/* Top Skills Badges */}
                <FadeIn delay={0.2}>
                    <div className="mb-16">
                        <h3 className="text-xl font-display font-semibold text-white mb-6 text-center">
                            {t.skills.coreCompetencies}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {topSkills.map((skill, index) => (
                                <FadeIn key={skill} delay={index * 0.05}>
                                    <Badge variant="primary" size="lg" className="hover:scale-105 transition-transform cursor-default">
                                        {skill}
                                    </Badge>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Category Navigation */}
                <FadeIn delay={0.3}>
                    <div className="mb-12 overflow-x-auto scrollbar-hide">
                        <div className="flex justify-center gap-4 min-w-max px-4">
                            {skillCategories.map((category, index) => (
                                <Button
                                    key={index}
                                    variant={selectedCategory === index ? 'primary' : 'outline'}
                                    onClick={() => setSelectedCategory(index)}
                                    className="whitespace-nowrap"
                                >
                                    {category.title}
                                </Button>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Skills Display */}
                <FadeIn delay={0.4} key={selectedCategory}>
                    <Card>
                        <h3 className="text-2xl font-display font-bold text-white mb-8">
                            {skillCategories[selectedCategory].title}
                        </h3>
                        <div className="space-y-6">
                            {skillCategories[selectedCategory].skills.map((skill, index) => (
                                <FadeIn key={index} delay={index * 0.05}>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center space-x-3">
                                                <span className="text-white font-medium">{skill.name}</span>
                                                <Badge variant="secondary" size="sm">
                                                    {skill.category}
                                                </Badge>
                                            </div>
                                            <span className="text-cyber-green font-semibold font-mono">
                        {skill.level}%
                      </span>
                                        </div>
                                        <div className="relative h-3 bg-dark-bg rounded-full overflow-hidden">
                                            <div
                                                className="absolute inset-y-0 left-0 bg-cyber-green rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </Card>
                </FadeIn>

                {/* Additional Skills Grid */}
                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: (
                                <svg className="w-8 h-8 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            ),
                            title: t.skills.securityFrameworks,
                            description: t.skills.securityFrameworksDesc
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            ),
                            title: t.skills.cloudSecurity,
                            description: t.skills.cloudSecurityDesc
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8 text-cyber-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            ),
                            title: t.skills.compliance,
                            description: t.skills.complianceDesc
                        }
                    ].map((item, idx) => (
                        <FadeIn key={idx} delay={0.5 + idx * 0.1}>
                            <Card hover className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-cyber-green/10 rounded-full flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-display font-semibold text-white mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    )
}