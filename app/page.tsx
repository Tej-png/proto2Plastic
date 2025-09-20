import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import AboutPage from './about/page'
import HDIW from '@/components/HDIW'

// Main homepage component that combines all sections
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header with navigation */}
      <Header />

      {/* Hero section with main call-to-action */}
      <Hero />

      <HDIW />
      <div className="flex justify-center space-x-4 my-8">
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
      </div>

      {/* Portfolio section displaying completed projects */}
      <AboutPage></AboutPage>

      <div className="flex justify-center space-x-4 my-8">
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
      </div>

     

      {/* Services section showcasing 3D printing offerings */}
      <Services />
      <div className="flex justify-center space-x-4 my-8">
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        <div className="w-2 h-2 rounded-full bg-gray-500"></div>
      </div>


      {/* Contact section with form and contact information */}
      <Contact />

      {/* Footer with links and company information */}
      <Footer />
    </main>
  )
}

