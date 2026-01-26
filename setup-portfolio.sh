#!/bin/bash

# SOC Analyst Portfolio Setup Script with Multilingual Support
# This script creates the complete folder structure and files

echo "🚀 Setting up SOC Analyst Portfolio with i18n support..."

# Create directory structure
mkdir -p public/images/{projects,certifications}
mkdir -p src/app
mkdir -p src/components/{layout,sections,ui,animations}
mkdir -p src/lib/data
mkdir -p src/styles
mkdir -p src/contexts
mkdir -p src/i18n/translations

# Create placeholder files in public
touch public/resume.pdf
touch public/images/profile.jpg
touch public/images/projects/.gitkeep
touch public/images/certifications/.gitkeep

# Create app files
touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/globals.css
touch src/app/favicon.ico

# Create layout components
touch src/components/layout/Header.jsx
touch src/components/layout/Footer.jsx
touch src/components/layout/Navigation.jsx

# Create section components
touch src/components/sections/Hero.jsx
touch src/components/sections/About.jsx
touch src/components/sections/Skills.jsx
touch src/components/sections/Experience.jsx
touch src/components/sections/Projects.jsx
touch src/components/sections/Certifications.jsx
touch src/components/sections/Contact.jsx

# Create UI components
touch src/components/ui/Button.jsx
touch src/components/ui/Card.jsx
touch src/components/ui/Badge.jsx
touch src/components/ui/GlowEffect.jsx

# Create animation components
touch src/components/animations/FadeIn.jsx
touch src/components/animations/TypingEffect.jsx

# Create data files
touch src/lib/data/skills.js
touch src/lib/data/projects.js
touch src/lib/data/experience.js
touch src/lib/data/certifications.js
touch src/lib/utils.js

# Create styles
touch src/styles/animations.css

# Create i18n files
touch src/i18n/config.js
touch src/i18n/translations/en.js
touch src/i18n/translations/fr.js

# Create context files
touch src/contexts/LanguageContext.jsx

# Create Language Switcher
touch src/components/LanguageSwitcher.jsx

# Create config files if they don't exist
if [ ! -f "next.config.js" ]; then
    touch next.config.js
fi

if [ ! -f "tailwind.config.js" ]; then
    touch tailwind.config.js
fi

# Create README if it doesn't exist
if [ ! -f "README.md" ]; then
    touch README.md
fi

echo "✅ Folder structure created successfully!"
echo ""
echo "📁 Project structure:"
echo "├── public/ (static assets)"
echo "├── src/app/ (Next.js app directory)"
echo "├── src/components/ (React components)"
echo "│   ├── layout/ (Header, Footer, Navigation)"
echo "│   ├── sections/ (Page sections)"
echo "│   ├── ui/ (Reusable UI components)"
echo "│   └── animations/ (Animation components)"
echo "├── src/lib/ (data and utilities)"
echo "├── src/contexts/ (React contexts)"
echo "├── src/i18n/ (Internationalization)"
echo "│   ├── config.js"
echo "│   └── translations/"
echo "│       ├── en.js (English)"
echo "│       └── fr.js (French)"
echo "└── src/styles/ (custom styles)"
echo ""
echo "🌐 Multilingual Features:"
echo "- English (en) 🇺🇸"
echo "- French (fr) 🇫🇷"
echo "- Language switcher component"
echo "- Persistent language preference"
echo "- Auto-detect browser language"
echo ""
echo "🎯 Next steps:"
echo "1. Add your profile image to public/images/profile.jpg"
echo "2. Add your resume to public/resume.pdf"
echo "3. Update translations in src/i18n/translations/"
echo "4. Run the development server: npm run dev"
echo ""
echo "Happy coding! 🚀"