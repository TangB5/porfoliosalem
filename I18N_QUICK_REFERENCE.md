# 🌐 i18n Quick Reference Guide

## 📋 Checklist - What You Need to Do

### ✅ Files to Create (Copy Code Provided):

1. **i18n Configuration**
    - [ ] `src/i18n/config.js`
    - [ ] `src/i18n/translations/en.js`
    - [ ] `src/i18n/translations/fr.js`

2. **Context & Components**
    - [ ] `src/contexts/LanguageContext.jsx`
    - [ ] `src/components/LanguageSwitcher.jsx`

3. **Updated Core Files**
    - [ ] `src/app/layout.tsx` (wrap with LanguageProvider)
    - [ ] `src/components/layout/Header.jsx` (add language switcher)

### 🔄 Files to Update (Apply Translations):

Update each section component to use translations:

```jsx
// Add at the top of each component:
import { useLanguage } from '@/contexts/LanguageContext'

// Inside component:
const { t } = useLanguage()

// Replace hardcoded text with:
{t.section.key}
```

**Components to update:**
- [ ] `Hero.jsx` - See example provided
- [ ] `About.jsx`
- [ ] `Skills.jsx`
- [ ] `Experience.jsx`
- [ ] `Projects.jsx`
- [ ] `Certifications.jsx`
- [ ] `Contact.jsx`
- [ ] `Footer.jsx`

## 🚀 Implementation Steps

### Step 1: Run Setup Script
```bash
chmod +x setup-portfolio.sh
./setup-portfolio.sh
```

### Step 2: Copy i18n Files
Copy the provided code for:
1. `i18n/config.js`
2. `i18n/translations/en.js`
3. `i18n/translations/fr.js`
4. `contexts/LanguageContext.jsx`
5. `components/LanguageSwitcher.jsx`

### Step 3: Update Layout
Replace `layout.tsx` with the provided code that includes `<LanguageProvider>`

### Step 4: Update Header
Replace `Header.jsx` with the provided code that includes language switcher

### Step 5: Update Section Components
For each section, add the translation hook and replace text.

**Example Pattern:**
```jsx
// Before:
<h1>Hi, I'm John Cipher</h1>

// After:
const { t } = useLanguage()
<h1>{t.hero.greeting} {t.hero.name}</h1>
```

### Step 6: Test
```bash
npm run dev
```

Test language switching in browser.

## 📝 Common Translation Patterns

### Simple Text
```jsx
const { t } = useLanguage()

// Usage:
<h1>{t.hero.title}</h1>
<p>{t.about.description}</p>
```

### With Variables
```jsx
// In translation file:
welcome: 'Welcome, {name}!'

// In component:
<p>{t.welcome.replace('{name}', userName)}</p>
```

### Conditional Content
```jsx
const { t, locale } = useLanguage()

<p>{locale === 'en' ? t.english.specific : t.french.specific}</p>
```

### Arrays/Lists
```jsx
// Translation:
items: ['Item 1', 'Item 2', 'Item 3']

// Usage:
{t.items.map(item => <li key={item}>{item}</li>)}
```

## 🎨 Language Switcher Placement

### Header (Desktop):
```jsx
<div className="flex items-center space-x-3">
  <LanguageSwitcher variant="compact" />
  <Button>CTA</Button>
</div>
```

### Header (Mobile):
```jsx
<div className="mobile-menu">
  <MobileLanguageSwitcher />
</div>
```

### Footer:
```jsx
<footer>
  <LanguageSwitcher variant="icon" />
</footer>
```

## 🔍 Quick Debug Commands

### Check Current Language:
```jsx
const { locale } = useLanguage()
console.log('Current:', locale) // 'en' or 'fr'
```

### Check Available Translations:
```jsx
const { t } = useLanguage()
console.log('Keys:', Object.keys(t))
```

### Test Translation:
```jsx
const { t } = useLanguage()
console.log('Test:', t.hero.greeting) // Should show translation
```

## 📊 Translation Keys Reference

### Navigation (`t.nav`)
```
home, about, skills, experience, projects, 
certifications, contact, resume, letsConnect
```

### Hero (`t.hero`)
```
greeting, name, role, tagline, availability,
yearsExp, incidents, certifications, viewProjects,
contactMe, downloadCV, scrollDown
```

### About (`t.about`)
```
title, me, subtitle, overview, expertise, approach,
yearsSecuring, description1, description2, description3,
slaCompliance, detectionRules, etc.
```

### Contact (`t.contact`)
```
title, titleHighlight, subtitle, letsConnect,
description, sendMessage, yourName, yourEmail,
subject, message, sending, sendMessageBtn, etc.
```

### Common (`t.common`)
```
loading, error, success, learnMore, readMore,
close, save, cancel, delete, edit, etc.
```

## ⚡ Quick Fixes

### Translation Not Showing?
1. Check if key exists in both `en.js` and `fr.js`
2. Verify correct path: `t.section.key`
3. Clear cache: `rm -rf .next && npm run dev`

### Language Not Switching?
1. Check localStorage in browser DevTools
2. Verify LanguageProvider wraps app
3. Check console for errors

### Switcher Not Visible?
1. Verify import: `import LanguageSwitcher from '@/components/LanguageSwitcher'`
2. Check z-index and positioning
3. Ensure it's inside LanguageProvider

## 📱 Mobile Testing

Test on mobile:
1. Menu opens correctly
2. Language switcher visible
3. Language switches on selection
4. Menu closes after selection
5. Preference persists

## 🎯 Production Checklist

Before deploying:
- [ ] All sections translated in both languages
- [ ] Language switcher works on all pages
- [ ] No console errors
- [ ] localStorage working
- [ ] Browser detection working
- [ ] Mobile menu language switcher functional
- [ ] Translations reviewed by native speakers
- [ ] Alt text and SEO in both languages

## 🚨 Important Notes

1. **Add 'use client'** to components using `useLanguage()`
2. **Import at top** of each component
3. **Test both languages** before committing
4. **Keep translation keys consistent** across languages
5. **Use descriptive keys** for maintainability

## 💡 Pro Tips

1. **Organize translations** by section for easy maintenance
2. **Use same structure** in both language files
3. **Add comments** for complex translations
4. **Keep a translation map** document
5. **Test edge cases** (long text, special characters)

## 📞 Need Help?

Common issues and solutions in full implementation guide:
`I18N_IMPLEMENTATION_GUIDE.md`

---

**Your portfolio is now ready for international audiences! 🌍🚀**

Languages supported:
- 🇺🇸 English
- 🇫🇷 French

Want to add more languages? See the "Adding More Languages" section in the full guide.