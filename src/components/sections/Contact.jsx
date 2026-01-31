'use client'

import { useState } from 'react'
import FadeIn from '@/components/animations/FadeIn'
import Card from '@/components/ui/Card'
import Badge, { StatusBadge } from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [status, setStatus] = useState({ type: '', message: '' })
    const { t } = useLanguage()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ type: 'loading', message: t.contact.sending })

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setStatus({
                type: 'success',
                message: t.contact.messageSent
            })
            setFormData({ name: '', email: '', subject: '', message: '' })

            setTimeout(() => setStatus({ type: '', message: '' }), 5000)
        }, 1500)
    }

    const contactMethods = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            value: 'salemkawein65@gmail.com',
            link: 'mailto:salemkawein65@gmail.com',
            color: 'cyber-green'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            ),
            title: 'LinkedIn',
            value: 'linkedin.com/in/johncipher',
            link: 'https://linkedin.com/in/salem-kaweina-ngamdere-34ab6230a',
            color: 'cyber-blue'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            title: 'GitHub',
            value: 'github.com/johncipher',
            link: 'https://github.com/johncipher',
            color: 'cyber-pink'
        }
    ]

    return (
        <section id="contact" className="section-container">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            {t.contact.title} <span className="text-cyber-green">{t.contact.titleHighlight}</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            {t.contact.subtitle}
                        </p>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info - Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Introduction */}
                        <FadeIn>
                            <h3 className="text-2xl font-display font-bold text-white mb-4">
                                {t.contact.letsConnect}
                            </h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                {t.contact.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <StatusBadge status="active">
                                    {t.contact.openToOpportunities}
                                </StatusBadge>
                                <Badge variant="secondary">
                                    {t.contact.availableForConsulting}
                                </Badge>
                            </div>
                        </FadeIn>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => (
                                <FadeIn key={index} delay={0.1 + index * 0.1}>
                                    <Card hover onClick={() => window.open(method.link, '_blank')}>
                                        <div className="flex items-center space-x-4">
                                            <div className={`flex-shrink-0 w-12 h-12 bg-${method.color}/10 rounded-lg flex items-center justify-center text-${method.color} group-hover:scale-110 transition-transform`}>
                                                {method.icon}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm text-gray-500 mb-1">{method.title}</div>
                                                <div className="text-white font-medium truncate group-hover:text-cyber-green transition-colors">
                                                    {method.value}
                                                </div>
                                            </div>
                                            <svg className="w-5 h-5 text-gray-600 group-hover:text-cyber-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </Card>
                                </FadeIn>
                            ))}
                        </div>

                        {/* Response Time */}
                        <FadeIn delay={0.4}>
                            <Card>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-cyber-green/10 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{t.contact.quickResponse}</h4>
                                        <p className="text-sm text-gray-400">
                                            {t.contact.quickResponseDesc}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </FadeIn>
                    </div>

                    {/* Contact Form - Right Column */}
                    <FadeIn delay={0.3} className="lg:col-span-3">
                        <Card>
                            <h3 className="text-2xl font-display font-bold text-white mb-6">
                                {t.contact.sendMessage}
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                        {t.contact.yourName} *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyber-green transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                        {t.contact.yourEmail} *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyber-green transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                                        {t.contact.subject} *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyber-green transition-colors"
                                        placeholder="Project Inquiry / Job Opportunity / Consultation"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                        {t.contact.message} *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-cyber-green transition-colors resize-none"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>

                                {/* Status Message */}
                                {status.message && (
                                    <div className={`p-4 rounded-lg ${
                                        status.type === 'success'
                                            ? 'bg-cyber-green/10 text-cyber-green border border-cyber-green/30'
                                            : status.type === 'error'
                                                ? 'bg-red-500/10 text-red-400 border border-red-500/30'
                                                : 'bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30'
                                    }`}>
                                        {status.message}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    disabled={status.type === 'loading'}
                                    className="w-full"
                                >
                                    {status.type === 'loading' ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            {t.contact.sending}
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            {t.contact.sendMessageBtn}
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-gray-500 text-center">
                                    {t.contact.formDisclaimer}
                                </p>
                            </form>
                        </Card>
                    </FadeIn>
                </div>

                {/* Additional CTA */}
                <FadeIn delay={0.5}>
                    <Card hover className="mt-16 max-w-3xl mx-auto text-center">
                        <h3 className="text-xl font-display font-bold text-white mb-3">
                            {t.contact.scheduleCall}
                        </h3>
                        <p className="text-gray-400 mb-6">
                            {t.contact.scheduleCallDesc}
                        </p>
                        <Button
                            variant="secondary"
                            size="lg"
                            onClick={() => window.open('https://calendly.com/johncipher', '_blank')}
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {t.contact.scheduleMeeting}
                        </Button>
                    </Card>
                </FadeIn>
            </div>
        </section>
    )
}