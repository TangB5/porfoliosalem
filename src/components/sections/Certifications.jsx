'use client'

import { certifications, upcomingCertifications } from '@/lib/data/certifications'
import FadeIn from '@/components/animations/FadeIn'
import Card from '@/components/ui/Card'
import Badge, { StatusBadge } from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Certifications() {
    const { t } = useLanguage()

    return (
        <section id="certifications" className="section-container bg-dark-bg/50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            <span className="text-cyber-green">{t.certifications.title}</span> {t.certifications.titleHighlight}
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t.certifications.subtitle}
                        </p>
                    </div>
                </FadeIn>

                {/* Active Certifications */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {certifications.map((cert, index) => (
                        <FadeIn key={cert.id} delay={index * 0.05}>
                            <Card hover className="cursor-pointer">
                                {/* Badge/Icon */}
                                <div className="relative mb-6">
                                    <div className="w-full h-40 bg-cyber-green/10 border-2 border-cyber-green/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                                        <div className="relative z-10 text-center">
                                            <div className="text-4xl font-bold text-cyber-green font-display mb-2">
                                                {cert.acronym}
                                            </div>
                                            <div className="text-sm text-gray-400">{cert.issuer}</div>
                                        </div>
                                    </div>
                                    {/* Priority Badge */}
                                    {cert.priority === 1 && (
                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyber-green rounded-full flex items-center justify-center border-2 border-dark-bg shadow-lg">
                                            <svg className="w-4 h-4 text-dark-bg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Certification Info */}
                                <div className="space-y-3">
                                    <h3 className="text-lg font-display font-bold text-white group-hover:text-cyber-green transition-colors line-clamp-2">
                                        {cert.name}
                                    </h3>

                                    <p className="text-sm text-gray-400 line-clamp-2">
                                        {cert.description}
                                    </p>

                                    {/* Details */}
                                    <div className="flex items-center justify-between text-xs pt-3 border-t border-dark-border">
                                        <span className="text-gray-500">{t.certifications.issued}: {cert.date}</span>
                                        <StatusBadge status="active">
                                            {cert.status}
                                        </StatusBadge>
                                    </div>

                                    {/* Credential ID */}
                                    <div className="text-xs font-mono text-gray-500">
                                        ID: {cert.credentialId}
                                    </div>

                                    {/* Action Button */}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full mt-4"
                                        onClick={() => window.open(cert.link, '_blank')}
                                    >
                                        {t.certifications.verifyCredential}
                                    </Button>
                                </div>
                            </Card>
                        </FadeIn>
                    ))}
                </div>

                {/* Certification Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            icon: (
                                <svg className="w-8 h-8 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            ),
                            value: certifications.length,
                            label: t.certifications.activeCertifications
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            ),
                            value: certifications.filter(c => c.priority === 1).length,
                            label: t.certifications.expertLevel
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8 text-cyber-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ),
                            value: '100%',
                            label: t.certifications.maintained
                        }
                    ].map((stat, idx) => (
                        <FadeIn key={idx} delay={0.4 + idx * 0.1}>
                            <Card hover className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-cyber-green/10 rounded-full flex items-center justify-center">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-white mb-2 font-display">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </Card>
                        </FadeIn>
                    ))}
                </div>

                {/* Upcoming Certifications */}
                <FadeIn delay={0.5}>
                    <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
                        {t.certifications.pursuingNext}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {upcomingCertifications.map((cert, index) => (
                            <Card key={index} hover>
                                <div className="flex items-start space-x-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-cyber-green/10 border border-cyber-green/30 rounded-lg flex items-center justify-center">
                                        <svg className="w-6 h-6 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-display font-semibold text-white mb-2">
                                            {cert.name}
                                        </h4>
                                        <div className="flex items-center space-x-4 text-sm">
                                            <span className="text-gray-400">{t.certifications.target}: {cert.targetDate}</span>
                                            <Badge variant="secondary" size="sm">
                                                {cert.status}
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </FadeIn>

                {/* Continuous Learning Message */}
                <FadeIn delay={0.6}>
                    <Card hover className="mt-16 max-w-3xl mx-auto text-center">
                        <div className="flex items-center justify-center mb-4">
                            <div className="w-12 h-12 bg-cyber-green/10 border border-cyber-green/30 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-xl font-display font-bold text-white mb-3">
                            {t.certifications.continuousLearning}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            {t.certifications.continuousLearningDesc}
                        </p>
                    </Card>
                </FadeIn>
            </div>
        </section>
    )
}