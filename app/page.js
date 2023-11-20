import Image from 'next/image'

import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import About from '@/components/About'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MetricContent from '@/components/MetricContent'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]' >
      <NavBar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <Hero />
        <MetricContent />
        <About />
        <Project />
        <Contact />
      </div>
      <Footer />
     
    </main>
  )
}
