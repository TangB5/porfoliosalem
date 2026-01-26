'use client'

import { useEffect, useRef, useState } from 'react'

export default function FadeIn({
                                   children,
                                   direction = 'up',
                                   delay = 0,
                                   duration = 0.6,
                                   threshold = 0.1,
                                   className = ''
                               }) {
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold }
        )

        const currentElement = elementRef.current
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [threshold])

    const directions = {
        up: {
            initial: 'translate-y-8 opacity-0',
            animate: 'translate-y-0 opacity-100'
        },
        down: {
            initial: 'translate-y-[-2rem] opacity-0',
            animate: 'translate-y-0 opacity-100'
        },
        left: {
            initial: 'translate-x-8 opacity-0',
            animate: 'translate-x-0 opacity-100'
        },
        right: {
            initial: 'translate-x-[-2rem] opacity-0',
            animate: 'translate-x-0 opacity-100'
        },
        none: {
            initial: 'opacity-0',
            animate: 'opacity-100'
        }
    }

    return (
        <div
            ref={elementRef}
            className={`transition-all ${directions[direction].initial} ${
                isVisible ? directions[direction].animate : ''
            } ${className}`}
            style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}s`
            }}
        >
            {children}
        </div>
    )
}

// Staggered Children Animation
export function FadeInStagger({
                                  children,
                                  staggerDelay = 0.1,
                                  className = ''
                              }) {
    return (
        <div className={className}>
            {Array.isArray(children)
                ? children.map((child, index) => (
                    <FadeIn key={index} delay={index * staggerDelay}>
                        {child}
                    </FadeIn>
                ))
                : children
            }
        </div>
    )
}

// Scale Fade In
export function ScaleFadeIn({
                                children,
                                delay = 0,
                                duration = 0.5,
                                className = ''
                            }) {
    const [isVisible, setIsVisible] = useState(false)
    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1 }
        )

        const currentElement = elementRef.current
        if (currentElement) {
            observer.observe(currentElement)
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement)
            }
        }
    }, [])

    return (
        <div
            ref={elementRef}
            className={`transition-all scale-95 opacity-0 ${
                isVisible ? 'scale-100 opacity-100' : ''
            } ${className}`}
            style={{
                transitionDuration: `${duration}s`,
                transitionDelay: `${delay}s`
            }}
        >
            {children}
        </div>
    )
}