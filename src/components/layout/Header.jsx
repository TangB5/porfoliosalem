'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher, { MobileLanguageSwitcher } from '@/components/LanguageSwitcher'

// --- Configuration des données (Plus facile à maintenir) ---
const SOCIAL_LINKS = [
    { id: 'linkedin', href: 'https://linkedin.com', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { id: 'github', href: 'https://github.com', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' }
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const { t } = useLanguage()

    // --- Logique de Scroll & Intersection Observer (UX: Savoir où on est) ---
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)

        const observerOptions = { rootMargin: '-20% 0px -70% 0px' }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) setActiveSection(entry.target.id)
            })
        }, observerOptions)

        window.addEventListener('scroll', handleScroll)
        document.querySelectorAll('section[id]').forEach(section => observer.observe(section))

        return () => {
            window.removeEventListener('scroll', handleScroll)
            observer.disconnect()
        }
    }, [])

    const navLinks = [
        { id: 'home', name: t.nav.home, href: '#home' },
        { id: 'about', name: t.nav.about, href: '#about' },
        { id: 'skills', name: t.nav.skills, href: '#skills' },
        { id: 'experience', name: t.nav.experience, href: '#experience' },
        { id: 'projects', name: t.nav.projects, href: '#projects' },
        { id: 'contact', name: t.nav.contact, href: '#contact' },
    ]

    const scrollToSection = useCallback((e, href) => {
        e.preventDefault()
        const targetId = href.replace('#', '')
        const element = document.getElementById(targetId)
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Offset pour la hauteur du header
                behavior: 'smooth'
            })
            setIsMobileMenuOpen(false)
        }
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled || isMobileMenuOpen
                    ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-cyber-green/20 shadow-2xl shadow-cyber-green/5'
                    : 'bg-transparent py-2'
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">

                    {/* --- Logo & Branding --- */}
                    <Link
                        href="#home"
                        onClick={(e) => scrollToSection(e, '#home')}
                        className="flex items-center space-x-4 group"
                    >
                        <div className="relative overflow-hidden w-11 h-11 bg-dark-surface border border-cyber-green/30 rounded-xl flex items-center justify-center group-hover:border-cyber-green transition-all duration-300">
                            <span className="text-cyber-green font-black text-lg relative z-10">SK</span>
                            <div className="absolute inset-0 bg-cyber-green/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"/>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-wider text-white group-hover:text-cyber-green transition-colors leading-none">
                                SALEM <span className="text-cyber-green/70 text-[10px] font-mono ml-1">KAWEINA</span>
                            </span>
                            <span className="text-[10px] text-gray-500 font-mono mt-1 flex items-center">
                                <span className="w-1.5 h-1.5 bg-cyber-green rounded-full mr-2 animate-pulse" />
                                {t.nav.home === 'Home' ? 'SOC ANALYST' : 'ANALYSTE SOC'}
                            </span>
                        </div>
                    </Link>

                    {/* --- Desktop Nav (UI: Amélioration des états hover) --- */}
                    <div className="hidden lg:flex items-center bg-dark-surface/50 px-2 py-1.5 rounded-full border border-white/5">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-full ${
                                    activeSection === link.id
                                        ? 'text-cyber-green bg-cyber-green/10'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* --- Actions --- */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <LanguageSwitcher variant="compact" />
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={(e) => scrollToSection(e, '#contact')}
                            className="shadow-lg shadow-cyber-green/10"
                        >
                            {t.nav.letsConnect}
                        </Button>
                    </div>

                    {/* --- Mobile Trigger --- */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 z-50 group"
                        aria-label="Menu"
                    >
                        <span className={`h-0.5 w-6 bg-cyber-green transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`h-0.5 w-6 bg-cyber-green transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-6 bg-cyber-green transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

                {/* --- Mobile Menu (UX: Animation plus fluide et Fullscreen) --- */}
                <div
                    className={`fixed  lg:hidden bg-dark-bg/98 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
                >
                    <div className="flex flex-col h-full pt-24 px-8 pb-12">
                        <div className="flex flex-col space-y-6">
                            {navLinks.map((link, i) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-3xl font-bold text-gray-300 hover:text-cyber-green transition-colors flex items-center group"
                                    style={{ transitionDelay: `${i * 50}ms` }}
                                >
                                    <span className="text-xs font-mono text-cyber-green/40 mr-4">0{i+1}</span>
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="mt-auto space-y-8">
                            <div className="grid grid-cols-2 gap-4">
                                <Button className="w-full" onClick={() => window.open('/resume.pdf')}>CV</Button>
                                <MobileLanguageSwitcher />
                            </div>

                            <div className="flex space-x-6 justify-center">
                                {SOCIAL_LINKS.map(social => (
                                    <a key={social.id} href={social.href} className="text-gray-500 hover:text-cyber-green transition-colors">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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