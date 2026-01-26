import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'
import Navigation from '@/components/layout/Navigation'
import { FloatingNav, ProgressNav } from '@/components/layout/Navigation'

export default function Home() {
    return (
        <>
            <ProgressNav />
            <Navigation />
            <FloatingNav />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
        </>
    )
}