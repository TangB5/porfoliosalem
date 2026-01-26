# 🌐 Multilingual Implementation Guide

Your portfolio now supports **English** and **French** with a complete i18n (internationalization) system.

## 📁 New File Structure

```
src/
├── i18n/
│   ├── config.js                 # i18n configuration
│   └── translations/
│       ├── en.js                 # English translations
│       └── fr.js                 # French translations
├── contexts/
│   └── LanguageContext.jsx       # Language state management
└── components/
    └── LanguageSwitcher.jsx      # Language switcher UI
```

## 🚀 Quick Start

### 1. Files Already Created:

- ✅ `src/i18n/config.js` - Language configuration
- ✅ `src/i18n/translations/en.js` - English translations
- ✅ `src/i18n/translations/fr.js` - French translations
- ✅ `src/contexts/LanguageContext.jsx` - Language context
- ✅ `src/components/LanguageSwitcher.jsx` - Switcher component
- ✅ Updated `layout.tsx` with LanguageProvider
- ✅ Updated `Header.jsx` with language switcher

### 2. How It Works:

```javascript
// The system provides:
- Automatic browser language detection
- Persistent language preference (localStorage)
- Easy-to-use translation hook
- Three switcher variants (dropdown, compact, icon)
```

## 🎨 Using Translations in Components

### Method 1: Using the Hook

```jsx
'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function MyComponent() {
  const { t } = useLanguage()
  
  return (
    <div>
      <h1>{t.hero.greeting} {t.hero.name}</h1>
      <p>{t.about.subtitle}</p>
    </div>
  )
}
```

### Method 2: Using Nested Keys

```jsx
'use client'

import { useTranslation } from '@/contexts/LanguageContext'

export default function MyComponent() {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('hero.greeting')}</h1>
      <p>{t('about.subtitle')}</p>
    </div>
  )
}
```

## 🔧 Language Switcher Variants

### Variant 1: Dropdown (Default)

```jsx
import LanguageSwitcher from '@/components/LanguageSwitcher'

<LanguageSwitcher variant="default" />
```

**Features:**
- Shows current language with flag
- Dropdown menu with all languages
- Checkmark for active language

### Variant 2: Compact Toggle

```jsx
<LanguageSwitcher variant="compact" />
```

**Features:**
- Side-by-side language buttons
- Highlighted active language
- Perfect for desktop header

### Variant 3: Icon Only

```jsx
<LanguageSwitcher variant="icon" />
```

**Features:**
- Flag icons only
- Minimal design
- Great for mobile

### Mobile Version

```jsx
import { MobileLanguageSwitcher } from '@/components/LanguageSwitcher'

<MobileLanguageSwitcher />
```

## 📝 Adding New Translations

### 1. Add to English (`src/i18n/translations/en.js`):

```javascript
export const en = {
  newSection: {
    title: 'New Section',
    description: 'This is a new section',
  }
}
```

### 2. Add to French (`src/i18n/translations/fr.js`):

```javascript
export const fr = {
  newSection: {
    title: 'Nouvelle section',
    description: 'Ceci est une nouvelle section',
  }
}
```

### 3. Use in Component:

```jsx
const { t } = useLanguage()

<h2>{t.newSection.title}</h2>
<p>{t.newSection.description}</p>
```

## 🌍 Adding More Languages

### Step 1: Update Config

Edit `src/i18n/config.js`:

```javascript
export const locales = ['en', 'fr', 'es'] // Add Spanish
export const localeNames = {
  en: 'English',
  fr: 'Français',
  es: 'Español' // Add Spanish name
}
export const localeFlags = {
  en: '🇺🇸',
  fr: '🇫🇷',
  es: '🇪🇸' // Add Spanish flag
}
```

### Step 2: Create Translation File

Create `src/i18n/translations/es.js`:

```javascript
export const es = {
  nav: {
    home: 'Inicio',
    about: 'Acerca de',
    // ... add all translations
  }
}
```

### Step 3: Import in Context

Edit `src/contexts/LanguageContext.jsx`:

```javascript
import { es } from '@/i18n/translations/es'

const translations = { en, fr, es }
```

## 🎯 Translation Structure

All translations follow this structure:

```javascript
{
  nav: {},              // Navigation menu
  hero: {},             // Hero section
  about: {},            // About section
  skills: {},           // Skills section
  experience: {},       // Experience section
  projects: {},         // Projects section
  certifications: {},   // Certifications section
  contact: {},          // Contact section
  footer: {},           // Footer
  stats: {},            // Statistics
  common: {}            // Common terms
}
```

## 🔄 Language Switching Logic

### 1. On First Visit:
```
1. Check localStorage for saved preference
2. If not found, detect browser language
3. Fall back to English (default)
```

### 2. When User Switches:
```
1. Update state
2. Save to localStorage
3. Update document lang attribute
```

### 3. Persistence:
```
Language preference is saved and restored on next visit
```

## 📱 Where Language Switchers Are Placed

### Desktop (Header):
- Compact variant in header
- Between navigation and CTA buttons

### Mobile (Menu):
- Mobile variant in collapsed menu
- Below navigation links

### Alternative Placements:
```jsx
// In footer
<LanguageSwitcher variant="icon" />

// In settings modal
<LanguageSwitcher variant="default" />

// Floating button
<div className="fixed bottom-4 left-4">
  <LanguageSwitcher variant="icon" />
</div>
```

## 🎨 Customizing Switcher Styles

### Custom Colors:

```jsx
<div className="my-custom-wrapper">
  <LanguageSwitcher variant="compact" />
</div>

<style>
  .my-custom-wrapper .bg-cyber-green {
    background-color: your-color;
  }
</style>
```

### Custom Position:

```jsx
<div className="fixed top-4 right-4 z-50">
  <LanguageSwitcher variant="icon" />
</div>
```

## 🧪 Testing Translations

### Test Checklist:

- [ ] All sections display correctly in both languages
- [ ] Language switcher works on all pages
- [ ] Preference persists after refresh
- [ ] Browser language detection works
- [ ] No missing translation keys
- [ ] Mobile menu language switcher works
- [ ] RTL languages (if added) display correctly

### Debug Mode:

```jsx
// Add to any component to see current language
const { locale, t } = useLanguage()
console.log('Current language:', locale)
console.log('Available translations:', Object.keys(t))
```

## 📊 Translation Coverage

| Section | English | French |
|---------|---------|--------|
| Navigation | ✅ | ✅ |
| Hero | ✅ | ✅ |
| About | ✅ | ✅ |
| Skills | ✅ | ✅ |
| Experience | ✅ | ✅ |
| Projects | ✅ | ✅ |
| Certifications | ✅ | ✅ |
| Contact | ✅ | ✅ |
| Footer | ✅ | ✅ |
| Common | ✅ | ✅ |

## 🚨 Common Issues & Solutions

### Issue 1: Translations Not Updating

**Solution:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Issue 2: localStorage Not Working

**Solution:**
```javascript
// Check browser support
if (typeof window !== 'undefined' && window.localStorage) {
  // localStorage is available
}
```

### Issue 3: Missing Translation

**Solution:**
```javascript
// Translations return the key if not found
// Check console for missing keys
// Add missing translations to respective files
```

## 🎯 Best Practices

1. **Keep Keys Consistent**
    - Use same structure in all languages
    - Follow dot notation: `section.subsection.key`

2. **Avoid Hardcoded Text**
   ```javascript
   // ❌ Bad
   <button>Click Here</button>
   
   // ✅ Good
   <button>{t.common.clickHere}</button>
   ```

3. **Group Related Translations**
   ```javascript
   // Keep related translations together
   contact: {
     title: '...',
     subtitle: '...',
     form: {
       name: '...',
       email: '...',
     }
   }
   ```

4. **Use Descriptive Keys**
   ```javascript
   // ❌ Bad
   btn1: 'Submit'
   
   // ✅ Good
   submitButton: 'Submit'
   ```

## 📚 Resources

- [React Context API](https://react.dev/reference/react/useContext)
- [Next.js Internationalization](https://nextjs.org/docs/advanced-features/i18n-routing)
- [MDN - Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

## 🎉 Your Portfolio is Now Bilingual!

Your portfolio now fully supports:
- 🇺🇸 English
- 🇫🇷 French
- 🔄 Easy language switching
- 💾 Persistent preferences
- 🌐 Browser language detection

Ready to impress international employers! 🚀