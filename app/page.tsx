import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Main homepage component that combines all sections
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header with navigation */}
      <Header />
      
      {/* Hero section with main call-to-action */}
      <Hero />
      
      
      {/* Services section showcasing 3D printing offerings */}
      <Services />
      
      {/* Portfolio section displaying completed projects */}
      <Portfolio />
      
      {/* Contact section with form and contact information */}
      <Contact />
      
      {/* Footer with links and company information */}
      <Footer />
    </main>
  )
}

