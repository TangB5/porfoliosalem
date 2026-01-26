'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
    const [activeSection, setActiveSection] = useState('home')

    const navItems = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'about', label: 'About', icon: '👤' },
        { id: 'skills', label: 'Skills', icon: '⚡' },
        { id: 'experience', label: 'Experience', icon: '💼' },
        { id: 'projects', label: 'Projects', icon: '🚀' },
        { id: 'certifications', label: 'Certs', icon: '🏆' },
        { id: 'contact', label: 'Contact', icon: '📧' }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id))
            const scrollPosition = window.scrollY + 100

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i]
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
            <ul className="space-y-4">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => scrollToSection(item.id)}
                            className="group relative flex items-center"
                            aria-label={`Navigate to ${item.label}`}
                        >
                            {/* Dot indicator */}
                            <span
                                className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'border-cyber-green bg-cyber-green scale-125'
                                        : 'border-gray-600 bg-transparent hover:border-cyber-green hover:scale-110'
                                }`}
                            />

                            {/* Label tooltip */}
                            <span className="absolute right-6 bg-dark-surface border border-dark-border px-3 py-1.5 rounded-lg text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {item.label}
              </span>

                            {/* Active indicator line */}
                            {activeSection === item.id && (
                                <span className="absolute right-0 w-8 h-0.5 bg-cyber-green" />
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

// Alternative: Floating Action Navigation
export function FloatingNav() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (!isVisible) return null

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-cyber-green text-dark-bg rounded-full flex items-center justify-center shadow-lg hover:shadow-cyber-green/50 transition-all duration-300 hover:scale-110 z-50"
            aria-label="Scroll to top"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
    )
}

// Progress Bar Navigation
export function ProgressNav() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const documentHeight = document.documentElement.scrollHeight
            const scrollTop = window.scrollY
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
            setProgress(scrollPercent)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full h-1 bg-dark-border z-50">
            <div
                className="h-full bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-pink transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}