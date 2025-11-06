import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Details from './components/Details'
import RSVP from './components/RSVP'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <Hero />
      <Details />
      <RSVP />
      <Footer />
    </div>
  )
}
