'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { en } from '@/i18n/translations/en'
import { fr } from '@/i18n/translations/fr'
import { defaultLocale } from '@/i18n/config'

const translations = { en, fr }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [locale, setLocale] = useState(defaultLocale)

    // Load saved language preference on mount
    useEffect(() => {
        const savedLocale = localStorage.getItem('locale')
        if (savedLocale && translations[savedLocale]) {
            setLocale(savedLocale)
        } else {
            // Detect browser language
            const browserLang = navigator.language.split('-')[0]
            if (translations[browserLang]) {
                setLocale(browserLang)
            }
        }
    }, [])

    // Save language preference when changed
    const changeLocale = (newLocale) => {
        if (translations[newLocale]) {
            setLocale(newLocale)
            localStorage.setItem('locale', newLocale)
            // Update document language attribute
            document.documentElement.lang = newLocale
        }
    }

    const t = translations[locale]

    const value = {
        locale,
        changeLocale,
        t,
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

// Custom hook to use language context
export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

// Helper function to get nested translation
export function useTranslation() {
    const { t, locale } = useLanguage()

    const translate = (key) => {
        const keys = key.split('.')
        let value = t

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k]
            } else {
                return key // Return key if translation not found
            }
        }

        return value || key
    }

    return { t: translate, locale }
}