'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher, { MobileLanguageSwitcher } from '@/components/LanguageSwitcher'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobileMenuOpen && !event.target.closest('nav')) {
                setIsMobileMenuOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isMobileMenuOpen])

    const navLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.certifications, href: '#certifications' },
        { name: t.nav.contact, href: '#contact' },
    ]

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-dark-bg/95 backdrop-blur-lg border-b border-dark-border shadow-lg shadow-cyber-green/5'
                    : 'bg-transparent'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="#home"
                        onClick={(e) => scrollToSection(e, '#home')}
                        className="flex items-center space-x-3 group"
                    >
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyber-green/20">
                                <span className="text-dark-bg font-bold text-xl font-display">JC</span>
                            </div>
                            <div className="absolute inset-0 rounded-lg border-2 border-cyber-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-lg font-display font-bold text-white group-hover:text-cyber-green transition-colors">
                                John <span className="gradient-text">Cipher</span>
                            </div>
                            <div className="text-xs text-gray-400 font-mono flex items-center space-x-2">
                                <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                                <span>{t.nav.home === 'Home' ? 'SOC Analyst' : 'Analyste SOC'}</span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-cyber-green transition-all duration-300 group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-green to-cyber-blue group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* CTA Buttons & Language Switcher - Desktop */}
                    <div className="hidden lg:flex items-center space-x-3">
                        <LanguageSwitcher variant="compact" />

                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => window.open('/resume.pdf', '_blank')}
                            className="flex items-center space-x-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>{t.nav.resume}</span>
                        </Button>

                        <Button
                            variant="primary"
                            size="sm"
                            onClick={(e) => scrollToSection(e, '#contact')}
                        >
                            {t.nav.letsConnect}
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-gray-300 hover:text-cyber-green transition-colors relative z-50"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                  className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
              />
                            <span
                                className={`w-6 h-0.5 bg-current my-1 transition-all duration-300 ${
                                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                            />
                            <span
                                className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${
                                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                                }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="py-4 border-t border-dark-border space-y-2">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-cyber-green hover:bg-dark-surface rounded-lg transition-all animate-slide-up"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="w-1.5 h-1.5 bg-cyber-green rounded-full" />
                                    <span>{link.name}</span>
                                </div>
                            </a>
                        ))}

                        {/* Mobile CTA Buttons */}
                        <div className="px-4 pt-4 space-y-3 border-t border-dark-border mt-4">
                            <Button
                                variant="outline"
                                size="md"
                                className="w-full"
                                onClick={() => {
                                    window.open('/resume.pdf', '_blank')
                                    setIsMobileMenuOpen(false)
                                }}
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                {t.nav.resume === 'Resume' ? 'Download Resume' : 'Télécharger le CV'}
                            </Button>
                            <Button
                                variant="primary"
                                size="md"
                                className="w-full"
                                onClick={(e) => scrollToSection(e, '#contact')}
                            >
                                {t.nav.letsConnect}
                            </Button>
                        </div>

                        {/* Mobile Language Switcher */}
                        <div className="px-4 pt-4 border-t border-dark-border mt-4">
                            <MobileLanguageSwitcher />
                        </div>

                        {/* Mobile Social Links */}
                        <div className="px-4 pt-4 border-t border-dark-border mt-4">
                            <p className="text-xs text-gray-500 mb-3">
                                {t.nav.home === 'Home' ? 'Connect with me' : 'Connectez-vous avec moi'}
                            </p>
                            <div className="flex items-center space-x-3">
                                {[
                                    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                                    { href: 'https://github.com', label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                                    { href: 'https://twitter.com', label: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center bg-dark-surface border border-dark-border rounded-lg hover:border-cyber-green hover:text-cyber-green transition-all"
                                        aria-label={social.label}
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={social.icon} />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}