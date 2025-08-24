'use client'

import { motion } from 'framer-motion'
import { Zap, Play } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image";

// Hero section component with animated content
export default function Hero() {

  return (
    <section id='hero' className="relative min-h-screen flex items-center justify-center overflow-hidden  pt-16">
      {/* Background Image - Temporarily commented out until proper image is added */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/images/3d-printer-bg.png" 
          alt="3D Printer Background" 
          fill
          className="object-cover opacity-20"
          priority
        />
      </div> */}

      <Image src="/images/3d-printer-bg.png" alt="3D Printer Background" fill className="object-cover opacity-90" priority />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-secondary rounded-full blur-3xl"
        />
      </div>

      {/* Main content container */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Print Your</span>{' '}
            <span className="text-gray-900">Future</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your wildest ideas into reality with cutting-edge 3D printing
            technology. Fast, precise, and absolutely mind-blowing results.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Start Creating
            </Link>

            <Link
              href="#demo"
              className="btn-secondary inline-flex items-center gap-2 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

