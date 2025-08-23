'use client'

import { Heart, ArrowRight } from 'lucide-react'
import Image from 'next/image'

// Portfolio project data
const portfolioData = [
  {
    id: 1,
    title: 'Gaming Controller Prototype',
    description: 'Custom ergonomic gaming controller with haptic feedback integration',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    category: 'Prototyping',
    tags: ['PLA', 'Resin', 'Electronics'],
    likes: 127,
    featured: true,
  },
  {
    id: 2,
    title: 'Architectural Model',
    description: 'Detailed scale model of modern residential complex',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
    category: 'Professional',
    tags: ['ABS', 'Multi-color', 'High Detail'],
    likes: 89,
    featured: false,
  },
  {
    id: 3,
    title: 'Custom Jewelry Collection',
    description: 'Intricate jewelry pieces with personalized engravings',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop',
    category: 'Design',
    tags: ['Resin', 'Metal Plating', 'Custom'],
    likes: 203,
    featured: true,
  },
  {
    id: 4,
    title: 'Engineering Prototype',
    description: 'Advanced mechanical component for industrial application',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    category: 'Engineering',
    tags: ['Metal', 'Precision', 'Industrial'],
    likes: 156,
    featured: false,
  },
  {
    id: 5,
    title: 'Healthcare Device',
    description: 'Medical device prototype for patient monitoring',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    category: 'Healthcare',
    tags: ['Medical Grade', 'Biocompatible', 'FDA Approved'],
    likes: 234,
    featured: true,
  },
  {
    id: 6,
    title: 'Artistic Sculpture',
    description: 'Complex geometric sculpture with organic forms',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
    category: 'Art',
    tags: ['Resin', 'Multi-material', 'Artistic'],
    likes: 178,
    featured: false,
  },
]

// Portfolio section component with project grid
export default function Portfolio() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the amazing projects we&apos;ve brought to life through precision 3D printing.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="group"
            >
              <div className="card overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Project image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer with likes and action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-medium">{project.likes}</span>
                    </div>
                    <button className="flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm group/btn">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

