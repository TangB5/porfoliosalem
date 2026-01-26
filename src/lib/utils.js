// Utility functions for the portfolio

/**
 * Format date to readable string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
}

/**
 * Calculate years of experience
 * @param {string} startDate - Start date in YYYY-MM-DD format
 * @returns {number} Years of experience
 */
export function calculateExperience(startDate) {
    const start = new Date(startDate)
    const now = new Date()
    const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25)
    return Math.floor(years * 10) / 10 // Round to 1 decimal
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Max length
 * @returns {string} Truncated text
 */
export function truncateText(text, length = 100) {
    if (text.length <= length) return text
    return text.slice(0, length) + '...'
}

/**
 * Slugify string for URLs
 * @param {string} text - Text to slugify
 * @returns {string} Slugified text
 */
export function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-')
        .trim()
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
    let timeout
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout)
            func(...args)
        }
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 300) {
    let inThrottle
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args)
            inThrottle = true
            setTimeout(() => inThrottle = false, limit)
        }
    }
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @returns {boolean} True if in viewport
 */
export function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

/**
 * Smooth scroll to element
 * @param {string} elementId - ID of element to scroll to
 * @param {number} offset - Offset from top in pixels
 */
export function smoothScrollTo(elementId, offset = 80) {
    const element = document.getElementById(elementId)
    if (element) {
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch (err) {
        console.error('Failed to copy text: ', err)
        return false
    }
}

/**
 * Generate random ID
 * @param {number} length - Length of ID
 * @returns {string} Random ID
 */
export function generateId(length = 8) {
    return Math.random().toString(36).substring(2, length + 2)
}

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Get reading time estimate
 * @param {string} text - Text to estimate
 * @param {number} wpm - Words per minute (default: 200)
 * @returns {number} Estimated reading time in minutes
 */
export function getReadingTime(text, wpm = 200) {
    const words = text.trim().split(/\s+/).length
    return Math.ceil(words / wpm)
}

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

/**
 * Get contrast color (black or white) for background
 * @param {string} hexColor - Hex color code
 * @returns {string} 'black' or 'white'
 */
export function getContrastColor(hexColor) {
    const hex = hexColor.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness > 128 ? 'black' : 'white'
}

/**
 * Parse query string to object
 * @param {string} queryString - Query string
 * @returns {Object} Parsed query object
 */
export function parseQueryString(queryString) {
    const params = new URLSearchParams(queryString)
    const result = {}
    for (const [key, value] of params) {
        result[key] = value
    }
    return result
}

/**
 * Group array of objects by key
 * @param {Array} array - Array to group
 * @param {string} key - Key to group by
 * @returns {Object} Grouped object
 */
export function groupBy(array, key) {
    return array.reduce((result, item) => {
        const group = item[key]
        if (!result[group]) {
            result[group] = []
        }
        result[group].push(item)
        return result
    }, {})
}

/**
 * Sort array of objects by key
 * @param {Array} array - Array to sort
 * @param {string} key - Key to sort by
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} Sorted array
 */
export function sortBy(array, key, order = 'asc') {
    return [...array].sort((a, b) => {
        const aVal = a[key]
        const bVal = b[key]

        if (order === 'asc') {
            return aVal > bVal ? 1 : aVal < bVal ? -1 : 0
        } else {
            return aVal < bVal ? 1 : aVal > bVal ? -1 : 0
        }
    })
}

/**
 * Get random items from array
 * @param {Array} array - Source array
 * @param {number} count - Number of items to get
 * @returns {Array} Random items
 */
export function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}

/**
 * Calculate percentage
 * @param {number} value - Current value
 * @param {number} total - Total value
 * @returns {number} Percentage
 */
export function calculatePercentage(value, total) {
    return Math.round((value / total) * 100)
}

/**
 * Check if user prefers dark mode
 * @returns {boolean} True if dark mode preferred
 */
export function prefersDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Local storage helper with error handling
 */
export const storage = {
    get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key)
            return item ? JSON.parse(item) : defaultValue
        } catch (error) {
            console.error('Error reading from localStorage:', error)
            return defaultValue
        }
    },

    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value))
            return true
        } catch (error) {
            console.error('Error writing to localStorage:', error)
            return false
        }
    },

    remove(key) {
        try {
            localStorage.removeItem(key)
            return true
        } catch (error) {
            console.error('Error removing from localStorage:', error)
            return false
        }
    },

    clear() {
        try {
            localStorage.clear()
            return true
        } catch (error) {
            console.error('Error clearing localStorage:', error)
            return false
        }
    }
}

/**
 * Class name helper for conditional classes
 * @param  {...any} classes - Classes to combine
 * @returns {string} Combined class string
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(' ')
}