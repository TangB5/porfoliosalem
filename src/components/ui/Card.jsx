'use client'

export default function Card({
                                 children,
                                 className = '',
                                 hover = true,
                                 glow = false,
                                 onClick
                             }) {
    const baseStyles = 'bg-dark-surface border border-dark-border rounded-lg p-6 transition-all duration-300'
    const hoverStyles = hover ? 'hover:border-cyber-green/50 hover:shadow-lg hover:shadow-cyber-green/10' : ''
    const glowStyles = glow ? 'glow-border' : ''
    const clickableStyles = onClick ? 'cursor-pointer' : ''

    return (
        <div
            className={`${baseStyles} ${hoverStyles} ${glowStyles} ${clickableStyles} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

// Card subcomponents for better composition
export function CardHeader({ children, className = '' }) {
    return (
        <div className={`mb-4 pb-4 border-b border-dark-border ${className}`}>
            {children}
        </div>
    )
}

export function CardTitle({ children, className = '' }) {
    return (
        <h3 className={`text-xl font-display font-bold text-white ${className}`}>
            {children}
        </h3>
    )
}

export function CardDescription({ children, className = '' }) {
    return (
        <p className={`text-gray-400 text-sm ${className}`}>
            {children}
        </p>
    )
}

export function CardContent({ children, className = '' }) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export function CardFooter({ children, className = '' }) {
    return (
        <div className={`mt-4 pt-4 border-t border-dark-border ${className}`}>
            {children}
        </div>
    )
}