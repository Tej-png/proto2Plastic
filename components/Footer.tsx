'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HelpCircle } from 'lucide-react'

// Footer component with links and company information
export default function Footer() {
  // Footer links organized by category
  const footerLinks = {
    services: [
      { name: 'Prototyping', href: '/services#prototyping' },
      { name: 'Custom Design', href: '/services#custom-design' },
      { name: 'Production Scale', href: '/services#production' },
      { name: 'Consulting', href: '/services#consulting' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Shipping Info', href: '/shipping' },
    ],
    // legal: [
    //   { name: 'Privacy Policy', href: '/privacy' },
    //   { name: 'Terms of Service', href: '/terms' },
    //   { name: 'Cookie Policy', href: '/cookies' },
    //   { name: 'GDPR', href: '/gdpr' },
    // ],
  }

  return (
    <footer id='footer' className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="text-2xl font-bold gradient-text">
                  Proto2Plastic
                </Link>
                <p className="mt-4 text-gray-400 leading-relaxed">
                  Transforming ideas into reality with cutting-edge 3D printing technology. 
                  From rapid prototyping to production-scale manufacturing, we&apos;re your 
                  trusted partner in additive manufacturing.
                </p>
                
                {/* Social media links */}
                <div className="flex space-x-4 mt-6">
                  {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map((platform) => (
                    <a
                      key={platform}
                      href={`https://${platform.toLowerCase()}.com/proto2plastic`}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                      aria-label={`Follow us on ${platform}`}
                    >
                      <span className="text-sm font-medium">{platform[0]}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

     
            {/* {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))} */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2025 Proto2Plastic. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mt-4 md:mt-0"
            >
              <span className="text-gray-400 text-sm">Made with ❤️ for creators</span>
              <button
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                aria-label="Help"
              >
                <HelpCircle className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

