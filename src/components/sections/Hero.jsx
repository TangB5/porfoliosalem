'use client'

import { useCallback, useState, useEffect, useMemo } from 'react'
import FadeIn from '@/components/animations/FadeIn'
import TypingEffect from '@/components/animations/TypingEffect'
import Button from '@/components/ui/Button'
import { GlowOrb } from '@/components/ui/GlowEffect'
import { useLanguage } from '@/contexts/LanguageContext'

// --- 1. CONFIGURATION (Données Statiques) ---
const STATS = (t) => [
    { label: t.hero.yearsExp, value: '3+', color: 'text-cyber-green' },
    { label: t.hero.certifications, value: '3', color: 'text-cyber-pink' },
]

const SECURITY_LOGS = [
    { label: '[NET]', msg: 'Inbound traffic analyzed', color: 'text-cyber-blue' },
    { label: '[SCAN]', msg: 'Port 443 check... Clean', color: 'text-cyber-green' },
    { label: '[AUTH]', msg: 'User session verified', color: 'text-gray-300' },
    { label: '[FW]', msg: 'Packet filtered: 192.168.0.104', color: 'text-yellow-500' },
    { label: '[SYS]', msg: 'Daemon active: PID 4022', color: 'text-gray-400' },
    { label: '[IDS]', msg: 'Signature DB updated', color: 'text-cyber-pink' },
    { label: '[API]', msg: 'Handshake successful', color: 'text-cyber-blue' },
    { label: '[WARN]', msg: 'Brute force attempt blocked', color: 'text-red-500' },
]

// --- 2. SOUS-COMPOSANT : Terminal (Pour alléger le Hero) ---
const TerminalMonitor = () => {
    const [progress, setProgress] = useState(94)
    const [logs, setLogs] = useState(SECURITY_LOGS.slice(0, 4))

    // Animation: Fluctuation de la barre
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(p => {
                const noise = Math.floor(Math.random() * 5) - 2
                const next = p + noise
                return next > 99 ? 95 : next < 85 ? 90 : next
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    // Animation: Rotation des logs
    useEffect(() => {
        const interval = setInterval(() => {
            setLogs(current => {
                const nextLog = SECURITY_LOGS[Math.floor(Math.random() * SECURITY_LOGS.length)]
                return [...current.slice(1), { ...nextLog, id: Date.now() }]
            })
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative group perspective-1000 w-full max-w-lg mx-auto lg:mx-0">
            {/* --- THE GLOW EFFECT (Ambiance arrière-plan) --- */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green to-cyber-blue rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>

            {/* --- FRAME DU TERMINAL --- */}
            <div className="relative bg-[#0d1117]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.01] group-hover:-rotate-1">

                {/* Header */}
                <div className="bg-[#161b22] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyber-green rounded-full animate-pulse"></span>
                        live_monitor.sh
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 font-mono text-sm space-y-6 relative z-10">

                    {/* Status Box */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                        <div className="flex items-center space-x-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green"></span>
                            </span>
                            <span className="text-xs font-bold text-cyber-green tracking-wider shadow-cyber-green drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]">
                                SYSTEM_SECURE
                            </span>
                        </div>
                        <span className="text-[10px] text-gray-500">UPTIME: 99.9%</span>
                    </div>

                    {/* Logs Area - Texte net, pas de glow pour la lecture */}
                    <div className="space-y-2 h-[100px] flex flex-col justify-end overflow-hidden mask-image-gradient-b">
                        {logs.map((log, i) => (
                            <div key={log.id || i} className="flex justify-between text-[11px] items-center animate-slide-up">
                                <span className="text-gray-500 font-medium w-12">{log.label}</span>
                                <span className={`flex-1 ${log.color} opacity-90 truncate ml-2 font-semibold`}>
                                    {log.msg}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Progress Section */}
                    <div className="pt-2">
                        <div className="flex justify-between mb-2 text-[10px] items-end">
                            <span className="text-gray-500 font-bold uppercase tracking-wider">Net_Traffic</span>
                            <span className="text-cyber-green font-mono text-lg leading-none drop-shadow-[0_0_5px_rgba(0,255,65,0.8)]">
                                {progress}%
                            </span>
                        </div>
                        {/* Barre avec Glow intense */}
                        <div className="h-1.5 w-full bg-dark-bg rounded-full overflow-hidden border border-white/5 relative">
                            <div
                                className="h-full bg-cyber-green shadow-[0_0_15px_#00ff41] transition-all duration-700 ease-out relative z-10"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* --- EFFECTS LAYERS --- */}
                {/* Scanlines (Lignes TV) */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_3px] z-20 opacity-30"></div>

                {/* Reflet sur l'écran (Glass) */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-30"></div>

                {/* Ligne de scan mobile */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent,rgba(0,255,65,0.05),transparent)] bg-[size:100%_20%] animate-scan z-10"></div>
            </div>
        </div>
    )
}

// --- 3. COMPOSANT PRINCIPAL ---
export default function Hero() {
    const { t } = useLanguage()

    const scrollToSection = useCallback((e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
        }
    }, [])

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-bg">

            {/* Background Grid & Orbs */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2f4a_1px,transparent_1px),linear-gradient(to_bottom,#2a2f4a_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <GlowOrb color="green" size="lg" className="absolute -top-20 -left-20 opacity-20 blur-[150px]" />
                <GlowOrb color="blue" size="md" className="absolute bottom-20 -right-20 opacity-15 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT: Text Content */}
                    <div className="lg:col-span-7 space-y-10 text-left">
                        <div className="space-y-4">
                            <FadeIn direction="up" delay={0.2}>

                                <h1 className="text-4xl font-display font-bold tracking-tight leading-[1.1]">
                                    <span className="text-white">{t.hero.greeting}</span><br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue relative">
                                        {t.hero.name}
                                        {/* Soulignement stylisé */}
                                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-cyber-green opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                        </svg>
                                    </span>
                                </h1>
                            </FadeIn>

                            <FadeIn direction="up" delay={0.3}>
                                <h2 className="text-2xl md:text-3xl font-mono text-gray-400 flex items-center">
                                    <span className="text-cyber-green mr-3">root@kali:~$</span> {t.hero.role}
                                </h2>
                            </FadeIn>
                        </div>

                        <FadeIn direction="up" delay={0.4}>
                            <div className="max-w-xl min-h-[60px]">
                                <TypingEffect
                                    text={t.hero.tagline}
                                    speed={40}
                                    className="text-lg text-gray-400 font-medium leading-relaxed border-l-2 border-cyber-green/50 pl-4"
                                />
                            </div>
                        </FadeIn>

                        {/* Stats Cards */}
                        <FadeIn direction="up" delay={0.5}>
                            <div className="grid grid-cols-3 gap-6">
                                {STATS(t).map((stat, i) => (
                                    <div key={i} className="group p-4 bg-dark-surface/50 rounded-xl border border-white/5 hover:border-cyber-green/30 transition-all duration-300">
                                        <div className={`text-3xl font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform origin-left`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-white transition-colors">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Buttons */}
                        <FadeIn direction="up" delay={0.6}>
                            <div className="flex flex-wrap gap-4 items-center pt-2">
                                <Button variant="primary" size="xl" onClick={(e) => scrollToSection(e, '#projects')} className=" hover:bg-cyber-green p-4 border border-cyber-green hover:text-black">
                                    {t.hero.viewProjects}
                                </Button>
                                <Button variant="ghost" size="xl" onClick={() => window.open('/resume.pdf')} className="bg-white/5 hover:text-white border border-white/10">
                                    {t.hero.downloadCV}
                                </Button>
                            </div>
                        </FadeIn>
                    </div>

                    {/* RIGHT: The Terminal Component */}
                    <div className="lg:col-span-5 hidden lg:block">
                        <FadeIn direction="left" delay={0.5}>
                            <TerminalMonitor />
                        </FadeIn>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-cyber-green rounded-full animate-slide-up" />
                </div>
            </div>
        </section>
    )
}