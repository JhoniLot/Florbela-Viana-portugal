import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import { MessageCircle } from 'lucide-react'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer style={{backgroundColor: '#0f172a', color: '#94a3b8', padding: '2rem 0', textAlign: 'center'}}>
        <p>&copy; {new Date().getFullYear()} Florbela Viana - Estética Avançada. Beleza e Bem-estar.</p>
      </footer>
      
      {/* Botão Flutuante do WhatsApp */}
      <a href="https://wa.me/351969065846" target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Fale conosco no WhatsApp">
        <MessageCircle size={32} />
      </a>
    </>
  )
}

export default App
