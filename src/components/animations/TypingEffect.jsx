'use client'

import { useState, useEffect } from 'react'

export default function TypingEffect({
                                         text = '',
                                         speed = 50,
                                         delay = 0,
                                         cursor = true,
                                         onComplete,
                                         className = ''
                                     }) {
    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (delay > 0) {
            const delayTimer = setTimeout(() => {
                setCurrentIndex(0)
            }, delay)
            return () => clearTimeout(delayTimer)
        }
    }, [delay])

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, speed)
            return () => clearTimeout(timer)
        } else if (currentIndex === text.length && !isComplete) {
            setIsComplete(true)
            if (onComplete) onComplete()
        }
    }, [currentIndex, text, speed, isComplete, onComplete])

    return (
        <span className={className}>
      {displayText}
            {cursor && !isComplete && (
                <span className="inline-block w-0.5 h-5 bg-cyber-green ml-1 animate-pulse" />
            )}
    </span>
    )
}

// Multiple Text Typing with Loop
export function TypingLoop({
                               texts = [],
                               speed = 100,
                               deleteSpeed = 50,
                               pauseDuration = 2000,
                               className = ''
                           }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentText = texts[currentTextIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1))
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), pauseDuration)
                }
            } else {
                // Deleting
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setCurrentTextIndex((currentTextIndex + 1) % texts.length)
                }
            }
        }, isDeleting ? deleteSpeed : speed)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseDuration])

    return (
        <span className={className}>
      {displayText}
            <span className="inline-block w-0.5 h-6 bg-cyber-green ml-1 animate-pulse" />
    </span>
    )
}

// Command Line Typing Effect
export function CommandTyping({
                                  commands = [],
                                  speed = 50,
                                  promptSymbol = '$',
                                  className = ''
                              }) {
    const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (currentCommandIndex < commands.length) {
            const currentCommand = commands[currentCommandIndex]

            if (displayText.length < currentCommand.length) {
                const timer = setTimeout(() => {
                    setDisplayText(prev => prev + currentCommand[displayText.length])
                }, speed)
                return () => clearTimeout(timer)
            } else {
                const timer = setTimeout(() => {
                    setCurrentCommandIndex(prev => prev + 1)
                    setDisplayText('')
                }, 1000)
                return () => clearTimeout(timer)
            }
        } else {
            setIsComplete(true)
        }
    }, [displayText, currentCommandIndex, commands, speed])

    return (
        <div className={`font-mono ${className}`}>
            {commands.slice(0, currentCommandIndex).map((cmd, idx) => (
                <div key={idx} className="text-gray-300 mb-2">
                    <span className="text-cyber-green">{promptSymbol}</span> {cmd}
                </div>
            ))}
            {currentCommandIndex < commands.length && (
                <div className="text-gray-300">
                    <span className="text-cyber-green">{promptSymbol}</span> {displayText}
                    {!isComplete && (
                        <span className="inline-block w-2 h-4 bg-cyber-green ml-1 animate-pulse" />
                    )}
                </div>
            )}
        </div>
    )
}

// Matrix-style Typing Effect
export function MatrixTyping({
                                 text = '',
                                 speed = 30,
                                 className = ''
                             }) {
    const [displayText, setDisplayText] = useState('')
    const [glitchText, setGlitchText] = useState('')

    useEffect(() => {
        const chars = '01アイウエオカキクケコサシスセソタチツテト'
        let currentIndex = 0

        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                // Add glitch effect
                const glitch = Array(3).fill(0).map(() =>
                    chars[Math.floor(Math.random() * chars.length)]
                ).join('')
                setGlitchText(glitch)

                // Add actual character
                setTimeout(() => {
                    setDisplayText(prev => prev + text[currentIndex])
                    setGlitchText('')
                    currentIndex++
                }, 50)
            } else {
                clearInterval(interval)
            }
        }, speed)

        return () => clearInterval(interval)
    }, [text, speed])

    return (
        <span className={className}>
      {displayText}
            <span className="text-cyber-green opacity-50">{glitchText}</span>
      <span className="inline-block w-0.5 h-5 bg-cyber-green ml-1 animate-pulse" />
    </span>
    )
}