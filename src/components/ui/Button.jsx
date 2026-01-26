'use client'

export default function Button({
                                   children,
                                   variant = 'primary',
                                   size = 'md',
                                   className = '',
                                   disabled = false,
                                   onClick,
                                   type = 'button',
                                   ...props
                               }) {
    const baseStyles = 'font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center'

    const variants = {
        primary: 'cyber-button rounded-lg',
        secondary: 'px-6 py-3 border-2 border-white/20 text-white rounded-lg hover:border-cyber-blue hover:text-cyber-blue',
        outline: 'px-6 py-3 border-2 border-cyber-green text-cyber-green rounded-lg hover:bg-cyber-green hover:text-dark-bg',
        ghost: 'px-6 py-3 text-gray-300 hover:text-cyber-green hover:bg-cyber-green/10 rounded-lg',
        link: 'text-cyber-green hover:text-cyber-blue underline-offset-4 hover:underline'
    }

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    }

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}