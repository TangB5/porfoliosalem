import './globals.css'
import '../styles/animations.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ProgressNav } from '@/components/layout/Navigation'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata = {
    title: 'John Cipher | Senior SOC Analyst & Cybersecurity Professional',
    description: 'Portfolio of John Cipher - Senior SOC Analyst specializing in threat detection, incident response, SIEM platforms, and security operations. 5+ years of experience protecting digital infrastructure. | Portfolio de John Cipher - Analyste SOC senior spécialisé en détection des menaces, réponse aux incidents, plateformes SIEM et opérations de sécurité.',
    keywords: 'SOC Analyst, Cybersecurity, Incident Response, Threat Detection, SIEM, Security Operations, Threat Hunting, Malware Analysis, Security Automation, Splunk, CrowdStrike, Analyste SOC, Cybersécurité, Réponse aux incidents, Détection des menaces',
    authors: [{ name: 'John Cipher' }],
    creator: 'John Cipher',
    publisher: 'John Cipher',
    openGraph: {
        title: 'John Cipher | Senior SOC Analyst Portfolio',
        description: 'Senior SOC Analyst specializing in threat detection, incident response, and security operations | Analyste SOC senior spécialisé en détection des menaces et réponse aux incidents',
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['fr_FR'],
        siteName: 'John Cipher Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'John Cipher | Senior SOC Analyst',
        description: 'Senior SOC Analyst specializing in threat detection and incident response',
        creator: '@johncipher',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
        yandex: 'your-yandex-verification-code',
    },
    alternates: {
        languages: {
            'en': '/en',
            'fr': '/fr',
        },
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                rel="stylesheet"
            />
            <meta name="theme-color" content="#0a0e27" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        </head>
        <body className="custom-scrollbar bg-dark-bg text-gray-100">
        <LanguageProvider>
            {/* Progress Bar Navigation */}
            <ProgressNav />

            {/* Main Layout Container */}
            <div className="min-h-screen flex flex-col relative">
                {/* Animated Background Elements */}
                <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                    {/* Cyber Grid */}
                    <div className="absolute inset-0 cyber-grid opacity-20" />

                    {/* Floating Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl animate-float" />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl animate-float"
                        style={{ animationDelay: '1s' }}
                    />
                    <div
                        className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyber-pink/5 rounded-full blur-3xl animate-float"
                        style={{ animationDelay: '2s' }}
                    />
                </div>

                {/* Header */}
                <Header />

                {/* Main Content */}
                <main className="flex-grow relative z-10">
                    {children}
                </main>

                {/* Footer */}
                <Footer />
            </div>

            {/* Gradient Overlay at edges */}
            <div className="fixed inset-x-0 top-0 h-32 bg-gradient-to-b from-dark-bg to-transparent pointer-events-none z-40" />
            <div className="fixed inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-bg to-transparent pointer-events-none z-40" />
        </LanguageProvider>
        </body>
        </html>
    )
}