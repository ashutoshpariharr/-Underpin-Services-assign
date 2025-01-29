import { EpisodeGrid } from '@/app/components/EpisodeGrid'
import { Features } from '@/app/components/Features'
import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { Membership } from '@/app/components/Membership'
import { Testimonials } from '@/app/components/Testimonials'
import './globals.css'
import { Pricing } from './components/Pricing'
import { Articles } from './components/Articles'
import { AppSection } from './components/AppSection'
import { Footer } from './components/Footer'


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <EpisodeGrid />
      <Features />
      <Testimonials />
      <Membership />
      <Pricing/>
      <Articles/>
      <AppSection/>
      <Footer/>
    </main>
  )
}