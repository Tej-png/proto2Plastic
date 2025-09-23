'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, Award, Target, Heart } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
 

  return (
    <>
      <section id='aboutUs' className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="gradient-text">Proto2Plastic</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We&apos;re a passionate team of innovators, engineers, and designers dedicated to
              transforming ideas into reality through cutting-edge 3D printing technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize access to high-quality 3D printing services, making it possible
                for anyone to bring their innovative ideas to life. We believe in the power of
                additive manufacturing to solve complex problems and create beautiful, functional objects.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From rapid prototyping to production-scale manufacturing, we&apos;re committed to
                delivering exceptional results with every project, no matter how big or small.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-color rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Guaranteed best price
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  State-of-the-art 3D printing technology
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Expert team with years of experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Fast turnaround times
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Dedicated customer support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  )
}
