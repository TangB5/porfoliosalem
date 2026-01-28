'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Badge, { StatusBadge } from '@/components/ui/Badge'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
    const [currentYear] = useState(new Date().getFullYear())
    const [showScrollTop, setShowScrollTop] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const quickLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.certifications, href: '#certifications' },
        { name: t.nav.contact, href: '#contact' }
    ]

    const resources = [
        { name: t.footer.downloadResume, href: '/resume.pdf', external: true },
        { name: t.footer.githubProjects, href: 'https://github.com', external: true },
        { name: t.footer.linkedinProfile, href: 'https://linkedin.com', external: true },
        { name: t.footer.blogArticles, href: 'https://medium.com', external: true },
    ]

    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            ),
            color: 'cyber-blue'
        },
        {
            name: 'GitHub',
            href: 'https://github.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            color: 'cyber-green'
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
            ),
            color: 'cyber-pink'
        },
        {
            name: 'Email',
            href: 'mailto:john.cipher@securitypro.com',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: 'cyber-green'
        }
    ]

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-dark-surface border-t border-dark-border overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full cyber-grid" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="#home" onClick={(e) => scrollToSection(e, '#home')} className="inline-block group">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-cyber-green/10 border-2 border-cyber-green rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyber-green/20">
                                        <span className="text-cyber-green font-bold text-xl font-display">JC</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-lg font-display font-bold text-white group-hover:text-cyber-green transition-colors">
                                        Salem Kaweina Ngamdere
                                    </div>
                                    <div className="text-xs text-gray-400 font-mono">SOC Analyst</div>
                                </div>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {t.footer.description}
                        </p>
                        <StatusBadge status="active">
                            {t.footer.availableForOpportunities}
                        </StatusBadge>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-display font-semibold mb-4 flex items-center">
                            <span className="w-1 h-4 bg-cyber-green mr-2" />
                            {t.footer.quickLinks}
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-gray-400 hover:text-cyber-green transition-colors text-sm flex items-center space-x-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-cyber-green transition-colors" />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-display font-semibold mb-4 flex items-center">
                            <span className="w-1 h-4 bg-cyber-blue mr-2" />
                            {t.footer.resources}
                        </h3>
                        <ul className="space-y-2">
                            {resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        onClick={link.href.startsWith('#') ? (e) => scrollToSection(e, link.href) : undefined}
                                        className="text-gray-400 hover:text-cyber-green transition-colors text-sm flex items-center space-x-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-cyber-green transition-colors" />
                                        <span>{link.name}</span>
                                        {link.external && (
                                            <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-display font-semibold mb-4 flex items-center">
                            <span className="w-1 h-4 bg-cyber-pink mr-2" />
                            {t.footer.getInTouch}
                        </h3>
                        <div className="space-y-4">
                            <div className="space-y-3">
                                <a
                                    href="mailto:john.cipher@securitypro.com"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-cyber-green transition-colors text-sm group"
                                >
                                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="truncate">john.cipher@securitypro.com</span>
                                </a>
                                <div className="flex items-center space-x-2 text-gray-400 text-sm">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{t.footer.remote}</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <p className="text-xs text-gray-500 mb-3">{t.footer.connectWithMe}</p>
                                <div className="flex items-center space-x-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target={social.href.startsWith('http') ? '_blank' : undefined}
                                            rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className={`w-10 h-10 flex items-center justify-center bg-dark-bg border border-dark-border rounded-lg text-gray-400 hover:border-${social.color} hover:text-${social.color} transition-all hover:scale-110`}
                                            aria-label={social.name}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Newsletter / CTA Section */}
                <div className="border-t border-dark-border pt-8 mb-8">
                    <div className="bg-cyber-green/5 border border-cyber-green/20 rounded-lg p-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="text-center md:text-left">
                                <h4 className="text-lg font-display font-bold text-white mb-2">
                                    {t.footer.interestedWorking}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    {t.footer.interestedWorkingDesc}
                                </p>
                            </div>
                            <Button
                                variant="primary"
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="whitespace-nowrap"
                            >
                                {t.footer.startConversation}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-dark-border">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-sm text-gray-400 flex items-center space-x-2">
                            <span>© {currentYear} Salem Kaweina Ngamdere.</span>
                            <span className="hidden sm:inline">{t.footer.allRightsReserved}</span>
                            <Badge variant="outline" size="sm" className="ml-2">
                                v1.0.0
                            </Badge>
                        </div>

                        {/* Legal Links */}
                        <div className="flex items-center space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                                {t.footer.privacyPolicy}
                            </a>
                            <a href="#" className="text-gray-400 hover:text-cyber-green transition-colors">
                                {t.footer.termsOfService}
                            </a>
                        </div>

                        {/* Scroll to Top Button */}
                        {showScrollTop && (
                            <button
                                onClick={scrollToTop}
                                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-cyber-green transition-colors group animate-fade-in"
                                aria-label="Scroll to top"
                            >
                                <span>{t.footer.backToTop}</span>
                                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Tech Stack Badge */}
                <div className="mt-8 pt-8 border-t border-dark-border">
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500">
                        <span>{t.footer.builtWith}</span>
                        <Badge variant="outline" size="sm">Next.js 14</Badge>
                        <Badge variant="outline" size="sm">Tailwind CSS</Badge>
                        <Badge variant="outline" size="sm">React</Badge>
                        <span>•</span>
                        <span className="flex items-center space-x-1">
              <span>{t.footer.deployedOn}</span>
              <Badge variant="secondary" size="sm">Vercel</Badge>
            </span>
                    </div>
                </div>
            </div>

            {/* Decorative bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-cyber-green/30" />
        </footer>
    )
}