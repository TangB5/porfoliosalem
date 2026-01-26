'use client'

export default function Badge({
                                  children,
                                  variant = 'default',
                                  size = 'md',
                                  className = ''
                              }) {
    const baseStyles = 'inline-flex items-center font-medium rounded-full transition-all duration-300'

    const variants = {
        default: 'bg-dark-surface text-gray-300 border border-dark-border',
        primary: 'bg-cyber-green/10 text-cyber-green border border-cyber-green/30',
        secondary: 'bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30',
        accent: 'bg-cyber-pink/10 text-cyber-pink border border-cyber-pink/30',
        success: 'bg-green-500/10 text-green-400 border border-green-500/30',
        warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
        danger: 'bg-red-500/10 text-red-400 border border-red-500/30',
        outline: 'bg-transparent text-gray-400 border border-dark-border hover:border-cyber-green hover:text-cyber-green'
    }

    const sizes = {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base'
    }

    return (
        <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
    )
}

// Icon Badge variant
export function IconBadge({ icon, children, variant = 'primary', className = '' }) {
    const variants = {
        primary: 'bg-cyber-green/10 text-cyber-green border border-cyber-green/30',
        secondary: 'bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30',
        accent: 'bg-cyber-pink/10 text-cyber-pink border border-cyber-pink/30'
    }

    return (
        <span className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full font-medium ${variants[variant]} ${className}`}>
      {icon && <span className="w-4 h-4">{icon}</span>}
            <span>{children}</span>
    </span>
    )
}

// Status Badge with dot indicator
export function StatusBadge({ status = 'active', children, className = '' }) {
    const statuses = {
        active: {
            dot: 'bg-cyber-green',
            bg: 'bg-cyber-green/10',
            text: 'text-cyber-green',
            border: 'border-cyber-green/30'
        },
        inactive: {
            dot: 'bg-gray-500',
            bg: 'bg-gray-500/10',
            text: 'text-gray-400',
            border: 'border-gray-500/30'
        },
        pending: {
            dot: 'bg-yellow-500',
            bg: 'bg-yellow-500/10',
            text: 'text-yellow-400',
            border: 'border-yellow-500/30'
        },
        error: {
            dot: 'bg-red-500',
            bg: 'bg-red-500/10',
            text: 'text-red-400',
            border: 'border-red-500/30'
        }
    }

    const currentStatus = statuses[status]

    return (
        <span className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full font-medium border ${currentStatus.bg} ${currentStatus.text} ${currentStatus.border} ${className}`}>
      <span className={`w-2 h-2 rounded-full ${currentStatus.dot} ${status === 'active' ? 'animate-pulse' : ''}`} />
      <span>{children || status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </span>
    )
}