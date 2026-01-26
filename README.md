# 🔐 SOC Analyst Portfolio - Complete Implementation Guide

A modern, cybersecurity-themed portfolio website built with Next.js 14, Tailwind CSS v4, and advanced animations.

## 🎯 Features

- ✅ Modern cybersecurity-themed design with neon accents
- ✅ Fully responsive and mobile-optimized
- ✅ Smooth scroll animations and transitions
- ✅ Interactive UI components
- ✅ Reusable component architecture
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ TypeScript ready

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: JavaScript/TypeScript
- **Components**: Custom React components
- **Animations**: Custom CSS + React hooks

## 🚀 Quick Start

### 1. Run the Setup Script

```bash
chmod +x setup-portfolio.sh
./setup-portfolio.sh
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 📁 Project Structure

```
soc-analyst-portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg          # Your profile photo
│   │   ├── projects/            # Project screenshots
│   │   └── certifications/      # Certification badges
│   └── resume.pdf               # Your resume PDF
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Main landing page
│   │   └── globals.css          # Global styles & animations
│   ├── components/
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── Button.jsx       # Button with variants
│   │   │   ├── Card.jsx         # Card with subcomponents
│   │   │   ├── Badge.jsx        # Badge with status indicators
│   │   │   └── GlowEffect.jsx   # Glow & neon effects
│   │   ├── animations/          # Animation components
│   │   │   ├── FadeIn.jsx       # Scroll-triggered fade-ins
│   │   │   └── TypingEffect.jsx # Typing animations
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.jsx       # Site header & navigation
│   │   │   ├── Footer.jsx       # Site footer
│   │   │   └── Navigation.jsx   # Side navigation with scroll spy
│   │   └── sections/            # Page sections
│   │       ├── Hero.jsx         # Hero section with animations
│   │       ├── About.jsx        # About section with tabs
│   │       ├── Skills.jsx       # Skills with progress bars
│   │       ├── Experience.jsx   # Experience timeline
│   │       ├── Projects.jsx     # Project showcase
│   │       ├── Certifications.jsx # Certification badges
│   │       └── Contact.jsx      # Contact form
│   ├── lib/
│   │   ├── data/               # Data files
│   │   │   ├── skills.js       # Skills data
│   │   │   ├── projects.js     # Projects data
│   │   │   ├── experience.js   # Experience data
│   │   │   └── certifications.js # Certifications data
│   │   └── utils.js            # Utility functions
│   └── styles/
│       └── animations.css       # Custom animations
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── README.md                   # This file
```

## 🎨 Customization Guide

### Update Personal Information

#### 1. Edit Data Files

**Skills** (`src/lib/data/skills.js`):
```javascript
export const topSkills = [
  "Your Skill 1",
  "Your Skill 2",
  // Add your skills
]
```

**Projects** (`src/lib/data/projects.js`):
```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    // Add your projects
  }
]
```

**Experience** (`src/lib/data/experience.js`):
```javascript
export const experience = [
  {
    role: "Your Role",
    company: "Company Name",
    period: "Jan 2020 - Present",
    // Add your experience
  }
]
```

**Certifications** (`src/lib/data/certifications.js`):
```javascript
export const certifications = [
  {
    name: "Certification Name",
    acronym: "CERT",
    issuer: "Issuer Name",
    // Add your certifications
  }
]
```

#### 2. Update Contact Information

Edit these files:
- `src/components/sections/Contact.jsx` - Update email and social links
- `src/components/layout/Footer.jsx` - Update footer contact info
- `src/components/sections/Hero.jsx` - Update name and title

#### 3. Update Metadata (SEO)

Edit `src/app/layout.tsx`:
```javascript
export const metadata = {
  title: 'Your Name | Job Title',
  description: 'Your description',
  // Update metadata
}
```

### Change Color Scheme

Edit `tailwind.config.js`:
```javascript
colors: {
  cyber: {
    green: '#00ff41',  // Primary color
    blue: '#00d9ff',   // Secondary color
    pink: '#ff0080',   // Accent color
  },
  dark: {
    bg: '#0a0e27',     // Background
    surface: '#1a1f3a', // Surface
    border: '#2a2f4a',  // Border
  },
}
```

### Add New Sections

1. Create component in `src/components/sections/YourSection.jsx`
2. Import and add to `src/app/page.tsx`:

```javascript
import YourSection from '@/components/sections/YourSection'

export default function Home() {
  return (
    <>
      <Hero />
      <YourSection /> {/* Add here */}
      <About />
      // ...
    </>
  )
}
```

## 🔧 Component Usage Examples

### Button Component

```jsx
import Button from '@/components/ui/Button'

// Primary button
<Button variant="primary" size="lg">Click Me</Button>

// Outline button
<Button variant="outline">Secondary Action</Button>

// Ghost button
<Button variant="ghost" onClick={handleClick}>
  Subtle Action
</Button>
```

### Card Component

```jsx
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

<Card hover glow>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

### Badge Component

```jsx
import Badge, { StatusBadge, IconBadge } from '@/components/ui/Badge'

<Badge variant="primary">New</Badge>
<StatusBadge status="active">Active</StatusBadge>
<IconBadge icon={<YourIcon />} variant="secondary">
  With Icon
</IconBadge>
```

### FadeIn Animation

```jsx
import FadeIn from '@/components/animations/FadeIn'

<FadeIn direction="up" delay={0.2}>
  <h1>This will fade in from bottom</h1>
</FadeIn>
```

### Typing Effect

```jsx
import TypingEffect, { TypingLoop } from '@/components/animations/TypingEffect'

<TypingEffect 
  text="Your text here..." 
  speed={50}
  cursor={true}
/>

<TypingLoop 
  texts={["Text 1", "Text 2", "Text 3"]}
  speed={100}
/>
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎭 Animations

Custom animations included:
- `animate-glow` - Glowing effect
- `animate-float` - Floating animation
- `animate-slide-up` - Slide up on load
- `animate-fade-in` - Fade in effect
- `animate-pulse-slow` - Slow pulse

## 🚢 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload 'out' folder to Netlify
```

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Checklist

Before deploying, make sure to:

- [ ] Add your profile photo to `public/images/profile.jpg`
- [ ] Add your resume to `public/resume.pdf`
- [ ] Update all personal information in data files
- [ ] Update contact information (email, social links)
- [ ] Add project screenshots to `public/images/projects/`
- [ ] Add certification badges to `public/images/certifications/`
- [ ] Update metadata and SEO information
- [ ] Test all links and forms
- [ ] Test on mobile devices
- [ ] Optimize images for web

## 🎨 Design Features

### Color Palette
- **Matrix Green**: `#00ff41` - Primary actions
- **Cyber Blue**: `#00d9ff` - Secondary elements
- **Neon Pink**: `#ff0080` - Accents
- **Deep Space**: `#0a0e27` - Background
- **Dark Surface**: `#1a1f3a` - Cards/surfaces

### Typography
- **Headings**: Space Grotesk (bold, tech-inspired)
- **Body**: Inter (clean, readable)
- **Code**: JetBrains Mono (monospace)

### Interactive Elements
- Smooth scroll navigation
- Hover glow effects on cards
- Animated typing effect
- Floating background orbs
- Terminal-style displays
- Pulsing status indicators
- Progress bars with gradients

## 🛠️ Troubleshooting

**Issue**: Styles not applying
- **Fix**: Make sure `globals.css` is imported in `layout.tsx`

**Issue**: Animations not working
- **Fix**: Check Tailwind config includes custom animations

**Issue**: Components not found
- **Fix**: Verify import paths use `@/` alias

**Issue**: Build errors
- **Fix**: Run `npm install` and check for TypeScript errors

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [MITRE ATT&CK Framework](https://attack.mitre.org/)

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📄 License

MIT License - Feel free to use this template for your personal portfolio

## 👤 Author

**John Cipher**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]
- Email: john.cipher@securitypro.com

---

Built with ❤️ and ☕ by a cybersecurity professional

**Ready to secure the digital world! 🔐🚀**