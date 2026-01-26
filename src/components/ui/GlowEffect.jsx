'use client'

export default function GlowEffect({
                                       children,
                                       color = 'green',
                                       intensity = 'medium',
                                       className = ''
                                   }) {
    const colors = {
        green: {
            light: 'shadow-cyber-green/20',
            medium: 'shadow-cyber-green/40',
            strong: 'shadow-cyber-green/60'
        },
        blue: {
            light: 'shadow-cyber-blue/20',
            medium: 'shadow-cyber-blue/40',
            strong: 'shadow-cyber-blue/60'
        },
        pink: {
            light: 'shadow-cyber-pink/20',
            medium: 'shadow-cyber-pink/40',
            strong: 'shadow-cyber-pink/60'
        }
    }

    return (
        <div className={`relative ${className}`}>
            <div className={`absolute inset-0 blur-xl ${colors[color][intensity]} animate-pulse`} />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

// Text Glow Effect
export function GlowText({
                             children,
                             color = 'green',
                             className = ''
                         }) {
    const textColors = {
        green: 'text-cyber-green',
        blue: 'text-cyber-blue',
        pink: 'text-cyber-pink'
    }

    const shadowColors = {
        green: 'drop-shadow-[0_0_10px_rgba(0,255,65,0.5)]',
        blue: 'drop-shadow-[0_0_10px_rgba(0,217,255,0.5)]',
        pink: 'drop-shadow-[0_0_10px_rgba(255,0,128,0.5)]'
    }

    return (
        <span className={`${textColors[color]} ${shadowColors[color]} ${className}`}>
      {children}
    </span>
    )
}

// Border Glow Effect
export function GlowBorder({
                               children,
                               color = 'green',
                               rounded = true,
                               className = ''
                           }) {
    const borderColors = {
        green: 'border-cyber-green shadow-[0_0_20px_rgba(0,255,65,0.3)]',
        blue: 'border-cyber-blue shadow-[0_0_20px_rgba(0,217,255,0.3)]',
        pink: 'border-cyber-pink shadow-[0_0_20px_rgba(255,0,128,0.3)]'
    }

    return (
        <div className={`border-2 ${borderColors[color]} ${rounded ? 'rounded-lg' : ''} ${className}`}>
            {children}
        </div>
    )
}

// Animated Glow Orb
export function GlowOrb({
                            color = 'green',
                            size = 'md',
                            animate = true,
                            className = ''
                        }) {
    const colors = {
        green: 'bg-cyber-green/20',
        blue: 'bg-cyber-blue/20',
        pink: 'bg-cyber-pink/20'
    }

    const sizes = {
        sm: 'w-32 h-32',
        md: 'w-64 h-64',
        lg: 'w-96 h-96'
    }

    return (
        <div
            className={`${sizes[size]} ${colors[color]} rounded-full blur-3xl ${animate ? 'animate-pulse' : ''} ${className}`}
        />
    )
}

// Scanning Line Effect
export function ScanLine({ className = '' }) {
    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-scan" />
        </div>
    )
}