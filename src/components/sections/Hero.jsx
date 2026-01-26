'use client'

import FadeIn from '@/components/animations/FadeIn'
import TypingEffect from '@/components/animations/TypingEffect'
import Button from '@/components/ui/Button'
import Badge, { StatusBadge } from '@/components/ui/Badge'
import { GlowOrb } from '@/components/ui/GlowEffect'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
    const { t } = useLanguage()

    const scrollToSection = (e, href) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Animated background elements */}
            <GlowOrb color="green" size="lg" className="absolute top-20 left-10 opacity-30" />
            <GlowOrb color="blue" size="md" className="absolute bottom-40 right-20 opacity-20" />

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                <div className="absolute top-40 right-20 w-2 h-2 bg-cyber-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-cyber-pink rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyber-green rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <FadeIn direction="up" delay={0}>
                            <StatusBadge status="active">
                                {t.hero.availability}
                            </StatusBadge>
                        </FadeIn>

                        {/* Main Heading */}
                        <FadeIn direction="up" delay={0.2}>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-4">
                                <span className="text-white">{t.hero.greeting} </span>
                                <span className="text-cyber-green">{t.hero.name}</span>
                            </h1>
                            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-cyber-green mb-6">
                                {t.hero.role}
                            </h2>
                        </FadeIn>

                        {/* Typing Effect Description */}
                        <FadeIn direction="up" delay={0.4}>
                            <div className="h-20">
                                <TypingEffect
                                    text={t.hero.tagline}
                                    speed={50}
                                    className="text-xl text-gray-300 font-mono"
                                />
                            </div>
                        </FadeIn>

                        {/* Stats */}
                        <FadeIn direction="up" delay={0.6}>
                            <div className="grid grid-cols-3 gap-6 pt-6">
                                <div>
                                    <div className="text-3xl font-bold text-cyber-green font-display">5+</div>
                                    <div className="text-sm text-gray-400">{t.hero.yearsExp}</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyber-blue font-display">1000+</div>
                                    <div className="text-sm text-gray-400">{t.hero.incidents}</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyber-pink font-display">8</div>
                                    <div className="text-sm text-gray-400">{t.hero.certifications}</div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* CTA Buttons */}
                        <FadeIn direction="up" delay={0.8}>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={(e) => scrollToSection(e, '#projects')}
                                >
                                    {t.hero.viewProjects}
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    onClick={(e) => scrollToSection(e, '#contact')}
                                >
                                    {t.hero.contactMe}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="lg"
                                    onClick={() => window.open('/resume.pdf', '_blank')}
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    {t.hero.downloadCV}
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Social Links */}
                        <FadeIn direction="up" delay={1}>
                            <div className="flex items-center space-x-4 pt-4">
                                {[
                                    { href: 'https://linkedin.com', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', color: 'cyber-blue' },
                                    { href: 'https://github.com', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', color: 'cyber-green' },
                                    { href: 'https://twitter.com', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', color: 'cyber-pink' }
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 flex items-center justify-center bg-dark-surface border border-dark-border rounded-lg hover:border-${social.color} hover:text-${social.color} transition-all`}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column - Visual Element */}
                    <FadeIn direction="left" delay={0.4}>
                        <div className="relative">
                            <div className="relative">
                                {/* Glowing orb background */}
                                <div className="absolute inset-0 bg-cyber-green/10 rounded-full blur-3xl animate-pulse" />

                                {/* Main visual container */}
                                <div className="relative bg-dark-surface border border-cyber-green/30 rounded-2xl p-8 backdrop-blur-sm">
                                    <div className="space-y-4">
                                        {/* Terminal-style animation */}
                                        <div className="flex items-center space-x-2 mb-6">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                            <span className="ml-4 text-xs font-mono text-gray-500">security_monitor.sh</span>
                                        </div>

                                        <div className="font-mono text-sm space-y-2 text-gray-300">
                                            <p><span className="text-cyber-green">$</span> monitoring_threats...</p>
                                            <p><span className="text-cyber-blue">→</span> analyzing_logs: <span className="text-cyber-pink">active</span></p>
                                            <p><span className="text-cyber-blue">→</span> detecting_anomalies: <span className="text-cyber-pink">active</span></p>
                                            <p><span className="text-cyber-blue">→</span> threat_level: <span className="text-cyber-green">secure</span></p>
                                            <div className="flex items-center space-x-2 pt-2">
                                                <div className="flex-1 h-2 bg-dark-bg rounded-full overflow-hidden">
                                                    <div className="h-full bg-cyber-green w-3/4 animate-pulse" />
                                                </div>
                                                <span className="text-cyber-green">75%</span>
                                            </div>
                                        </div>

                                        {/* Skill badges */}
                                        <div className="flex flex-wrap gap-2 pt-6">
                                            {['SIEM', 'Threat Hunting', 'Incident Response', 'Python', 'Splunk'].map((skill, idx) => (
                                                <Badge key={skill} variant="primary">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll indicator */}
            <FadeIn direction="up" delay={1.2}>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="flex flex-col items-center space-y-2 text-gray-400 hover:text-cyber-green transition-colors">
                        <span className="text-xs font-mono">{t.hero.scrollDown}</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </FadeIn>
        </section>
    )
}