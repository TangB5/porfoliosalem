'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { locales, localeNames, localeFlags } from '@/i18n/config'

export default function LanguageSwitcher({ variant = 'default' }) {
    const { locale, changeLocale } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleLanguageChange = (newLocale) => {
        changeLocale(newLocale)
        setIsOpen(false)
    }

    // Default variant - dropdown
    if (variant === 'default') {
        return (
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center space-x-2 px-3 py-2 bg-dark-surface border border-dark-border rounded-lg hover:border-cyber-green transition-all duration-300 group"
                    aria-label="Change language"
                    aria-expanded={isOpen}
                >
                    <span className="text-xl">{localeFlags[locale]}</span>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-cyber-green transition-colors">
            {localeNames[locale]}
          </span>
                    <svg
                        className={`w-4 h-4 text-gray-400 group-hover:text-cyber-green transition-all duration-300 ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {/* Dropdown */}
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-dark-surface border border-dark-border rounded-lg shadow-lg overflow-hidden z-50 animate-slide-up">
                        {locales.map((loc) => (
                            <button
                                key={loc}
                                onClick={() => handleLanguageChange(loc)}
                                className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 ${
                                    locale === loc
                                        ? 'bg-cyber-green/10 text-cyber-green border-l-2 border-cyber-green'
                                        : 'text-gray-300 hover:bg-dark-bg hover:text-cyber-green'
                                }`}
                            >
                                <span className="text-xl">{localeFlags[loc]}</span>
                                <span className="text-sm font-medium">{localeNames[loc]}</span>
                                {locale === loc && (
                                    <svg
                                        className="w-4 h-4 ml-auto"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        )
    }

    // Compact variant - toggle button
    if (variant === 'compact') {
        return (
            <div className="flex items-center space-x-1 bg-dark-surface border border-dark-border rounded-lg p-1">
                {locales.map((loc) => (
                    <button
                        key={loc}
                        onClick={() => handleLanguageChange(loc)}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-300 ${
                            locale === loc
                                ? 'bg-cyber-green text-dark-bg'
                                : 'text-gray-400 hover:text-white'
                        }`}
                        aria-label={`Switch to ${localeNames[loc]}`}
                    >
                        <span className="mr-1">{localeFlags[loc]}</span>
                        {loc.toUpperCase()}
                    </button>
                ))}
            </div>
        )
    }

    // Icon variant - flags only
    if (variant === 'icon') {
        return (
            <div className="flex items-center space-x-2">
                {locales.map((loc) => (
                    <button
                        key={loc}
                        onClick={() => handleLanguageChange(loc)}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg border-2 transition-all duration-300 ${
                            locale === loc
                                ? 'border-cyber-green bg-cyber-green/10 scale-110'
                                : 'border-dark-border hover:border-cyber-green/50 hover:scale-105'
                        }`}
                        aria-label={`Switch to ${localeNames[loc]}`}
                        title={localeNames[loc]}
                    >
                        <span className="text-xl">{localeFlags[loc]}</span>
                    </button>
                ))}
            </div>
        )
    }

    return null
}

// Mobile-friendly language switcher
export function MobileLanguageSwitcher() {
    const { locale, changeLocale } = useLanguage()

    return (
        <div className="space-y-2">
            <p className="text-xs text-gray-500 px-4">Language / Langue</p>
            <div className="flex flex-col space-y-1">
                {locales.map((loc) => (
                    <button
                        key={loc}
                        onClick={() => changeLocale(loc)}
                        className={`flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 ${
                            locale === loc
                                ? 'bg-cyber-green/10 text-cyber-green border-l-2 border-cyber-green'
                                : 'text-gray-300 hover:bg-dark-surface'
                        }`}
                    >
                        <span className="text-xl">{localeFlags[loc]}</span>
                        <span className="text-sm font-medium">{localeNames[loc]}</span>
                        {locale === loc && (
                            <span className="ml-auto w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}