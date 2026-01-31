'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import FadeIn from '@/components/animations/FadeIn'
import Card from '@/components/ui/Card'
import { useLanguage } from '@/contexts/LanguageContext'

// --- SOUS-COMPOSANT : LE BOUCLIER TACTIQUE ---
const ProfileShield = () => (

        <div className="w-40 h40">
            <Image
                src="/images/profile.jpg"
                alt="Salem Profile"
                fill
                className="object-cover w-full h-full"
                priority
            />
        </div>


)


// --- COMPOSANT PRINCIPAL ---
export default function About() {
    const { t } = useLanguage()
    const [activeTab, setActiveTab] = useState('overview')

    // Architecture des données : centralisée et mémoïsée
    const sections = useMemo(() => ({
        tabs: [
            { id: 'overview', label: t.about.overview },
            { id: 'expertise', label: t.about.expertise },
            { id: 'approach', label: t.about.approach }
        ],
        expertise: [
            { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', title: t.about.incidentResponse, desc: t.about.incidentResponseDesc },
            { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: t.about.siemEngineering, desc: t.about.siemEngineeringDesc },
            { icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', title: t.about.securityAutomation, desc: t.about.securityAutomationDesc }
        ],
        approach: [
            { step: '01', title: t.about.identify, desc: t.about.identifyDesc },
            { step: '02', title: t.about.analyze, desc: t.about.analyzeDesc },
            { step: '03', title: t.about.contain, desc: t.about.containDesc },
            { step: '04', title: t.about.eradicate, desc: t.about.eradicateDesc },
            { step: '05', title: t.about.recover, desc: t.about.recoverDesc },
            { step: '06', title: t.about.learn, desc: t.about.learnDesc }
        ]
    }), [t])

    return (
        <section id="about" className="relative py-24 bg-dark-bg/50">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyber-green/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header de Section */}
                <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase tracking-tighter">
                            {t.about.title} <span className="text-cyber-green shadow-cyber-green drop-shadow-[0_0_8px_rgba(0,255,65,0.4)]">{t.about.me}</span>
                        </h2>
                        <div className="flex justify-center items-center space-x-4">
                            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyber-green" />
                            <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">{t.about.subtitle}</p>
                            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyber-green" />
                        </div>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-12 gap-16 items-start">

                    {/* COLONNE GAUCHE : Photo & Navigation */}
                    <div className="lg:col-span-5 space-y-12">
                        <FadeIn direction="right">
                            <ProfileShield />
                        </FadeIn>

                        {/* Navigation des Onglets (Verticale Style Console) */}
                        <div className="flex flex-col space-y-3">
                            {sections.tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`group flex items-center justify-between px-6 py-4 rounded-xl border transition-all duration-300 ${
                                        activeTab === tab.id
                                            ? 'bg-cyber-green/10 border-cyber-green/50 text-cyber-green'
                                            : 'bg-white/[0.02] border-white/5 text-gray-500 hover:border-white/20'
                                    }`}
                                >
                                    <span className="font-bold uppercase tracking-widest text-xs">{tab.label}</span>
                                    <div className={`w-2 h-2 rounded-full transition-all duration-500 ${activeTab === tab.id ? 'bg-cyber-green shadow-[0_0_8px_#00ff41]' : 'bg-gray-800'}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* COLONNE DROITE : Contenu Dynamique */}
                    <div className="lg:col-span-7 pt-4">

                        {/* OVERVIEW */}
                        {activeTab === 'overview' && (
                            <FadeIn key="overview" className="space-y-10">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-display font-bold text-white leading-tight">
                                        {t.about.yearsSecuring}
                                    </h3>
                                    <div className="space-y-4 text-gray-400 text-lg leading-relaxed font-light">
                                        <p>{t.about.description1}</p>
                                        <p>{t.about.description2}</p>
                                    </div>
                                </div>

                                {/* Stats Dashboard */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: '99.2%', label: t.about.slaCompliance, color: 'text-cyber-green' },
                                        { value: '150+', label: t.about.detectionRules, color: 'text-cyber-blue' },
                                        { value: '60%', label: t.about.falsePositiveReduction, color: 'text-cyber-pink' },
                                        { value: '24/7', label: t.about.threatMonitoring, color: 'text-white' }
                                    ].map((stat, idx) => (
                                        <div key={idx} className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl group hover:border-white/20 transition-all">
                                            <div className={`text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
                                            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        )}

                        {/* EXPERTISE */}
                        {activeTab === 'expertise' && (
                            <div className="grid sm:grid-cols-2 gap-6">
                                {sections.expertise.map((item, index) => (
                                    <FadeIn key={index} delay={index * 0.1}>
                                        <Card glow className="h-full bg-dark-surface/30 border-white/5">
                                            <div className="flex flex-col h-full space-y-4">
                                                <div className="w-12 h-12 bg-cyber-green/10 rounded-lg flex items-center justify-center text-cyber-green">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{item.title}</h4>
                                                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </FadeIn>
                                ))}
                            </div>
                        )}

                        {/* APPROACH */}
                        {activeTab === 'approach' && (
                            <div className="grid grid-cols-1 gap-4">
                                {sections.approach.map((item, index) => (
                                    <FadeIn key={index} delay={index * 0.05} direction="up">
                                        <div className="flex items-center space-x-6 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-all group">
                                            <span className="text-3xl font-display font-black text-cyber-green/20 group-hover:text-cyber-green/100 transition-colors duration-500">
                                                {item.step}
                                            </span>
                                            <div>
                                                <h4 className="text-white font-bold uppercase text-sm tracking-wider">{item.title}</h4>
                                                <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}