'use client'

import { useState } from 'react'
import { projects, projectCategories } from '@/lib/data/projects'
import FadeIn from '@/components/animations/FadeIn'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All Projects')
    const [hoveredProject, setHoveredProject] = useState(null)
    const { t } = useLanguage()

    const filteredProjects = selectedCategory === 'All Projects'
        ? projects
        : projects.filter(p => p.category === selectedCategory)

    return (
        <section id="projects" className="section-container">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            {t.projects.title} <span className="text-cyber-green">{t.projects.titleHighlight}</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t.projects.subtitle}
                        </p>
                    </div>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={0.2}>
                    <div className="mb-12 overflow-x-auto scrollbar-hide">
                        <div className="flex justify-center gap-3 min-w-max px-4">
                            {projectCategories.map((category, index) => (
                                <Button
                                    key={index}
                                    variant={selectedCategory === category ? 'primary' : 'outline'}
                                    size="sm"
                                    onClick={() => setSelectedCategory(category)}
                                    className="whitespace-nowrap"
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <FadeIn key={project.id} delay={index * 0.1}>
                            <Card
                                hover
                                glow
                                className="cursor-pointer h-full flex flex-col"
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                {/* Project Image/Visual */}
                                <div className="relative h-48 mb-6 bg-cyber-green/10 rounded-lg overflow-hidden border border-cyber-green/20">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl font-bold text-cyber-green/10 font-display">
                                            {project.id.toString().padStart(2, '0')}
                                        </div>
                                    </div>
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="primary" size="sm">
                                            {project.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="space-y-4 flex-1 flex flex-col">
                                    <h3 className="text-xl font-display font-bold text-white group-hover:text-cyber-green transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Key Metrics */}
                                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-dark-border">
                                        {Object.entries(project.metrics).slice(0, 3).map(([key, value], idx) => (
                                            <div key={idx} className="text-center">
                                                <div className="text-lg font-bold text-cyber-green font-display">
                                                    {value}
                                                </div>
                                                <div className="text-xs text-gray-500 capitalize">
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <Badge key={idx} variant="outline" size="sm">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <Badge variant="secondary" size="sm">
                                                +{project.technologies.length - 3}
                                            </Badge>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center space-x-3 pt-4 mt-auto">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1"
                                            onClick={() => window.open(project.link, '_blank')}
                                        >
                                            {t.projects.viewDetails}
                                        </Button>
                                        <button
                                            onClick={() => window.open(project.github, '_blank')}
                                            className="p-2 bg-dark-bg border border-dark-border rounded-lg hover:border-cyber-blue hover:text-cyber-blue transition-all"
                                            title="View on GitHub"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Hover Effect - Expanded Info */}
                                {hoveredProject === project.id && (
                                    <div className="mt-6 pt-6 border-t border-dark-border animate-fade-in">
                                        <h4 className="text-sm font-semibold text-white mb-3">{t.projects.keyHighlights}</h4>
                                        <ul className="space-y-2">
                                            {project.highlights.slice(0, 3).map((highlight, idx) => (
                                                <li key={idx} className="flex items-start space-x-2 text-xs text-gray-400">
                                                    <span className="text-cyber-green mt-0.5">✓</span>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </Card>
                        </FadeIn>
                    ))}
                </div>

                {/* View More CTA */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-gray-400 mb-4">{t.projects.noProjects}</p>
                        <Button
                            variant="ghost"
                            onClick={() => setSelectedCategory('All Projects')}
                        >
                            {t.projects.viewAllProjects}
                        </Button>
                    </div>
                )}

                {filteredProjects.length > 0 && (
                    <FadeIn delay={0.6}>
                        <div className="mt-16 text-center">
                            <p className="text-gray-400 mb-6">
                                {t.projects.moreWorkSamples}
                            </p>
                            <Button
                                variant="primary"
                                size="lg"
                                onClick={() => window.open('https://github.com', '_blank')}
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                {t.projects.viewOnGitHub}
                            </Button>
                        </div>
                    </FadeIn>
                )}
            </div>
        </section>
    )
}