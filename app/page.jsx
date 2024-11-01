'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import Services from '../components/Services'
import ServiceDetail from '../components/ServiceDetail'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [activeService, setActiveService] = useState(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const navigateToServices = () => {
    setActiveSection('services')
  }

  const showServiceDetail = (service) => {
    setActiveService(service)
    setActiveSection('serviceDetail')
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        setActiveSection={setActiveSection} 
      />
      <main className="text-gray-900 dark:text-white">
        {activeSection === 'home' && <Home navigateToServices={navigateToServices} />}
        {activeSection === 'services' && <Services showServiceDetail={showServiceDetail} />}
        {activeSection === 'serviceDetail' && <ServiceDetail service={activeService} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  )
}