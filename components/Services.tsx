'use client'

// Simple SVG icon components
const CubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
)

const PaletteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
  </svg>
)

const FactoryIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)

// Services data with icons and features
const servicesData = [
  {
    icon: CubeIcon,
    title: 'Prototyping',
    description: 'Rapid prototyping for your innovative ideas. From concept to reality in 24-48 hours.',
    features: ['Fast turnaround', 'Multiple materials', 'Precision details'],
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: PaletteIcon,
    title: 'Custom Design',
    description: 'Bespoke 3D models designed specifically for your needs and vision.',
    features: ['Personalized designs', 'Unlimited revisions', '3D visualization'],
    color: 'purple',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    icon: FactoryIcon,
    title: 'Production Scale',
    description: 'Large-scale 3D printing for businesses and manufacturers.',
    features: ['Bulk discounts', 'Quality assurance', 'Scalable solutions'],
    color: 'green',
    gradient: 'from-green-500 to-green-600',
  },
]

// Services section component with animated cards
export default function Services() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to creation, we&apos;ve got every step of your 3D printing journey covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.title}
                className="group"
              >
                <div className="card h-full flex flex-col hover:scale-105 transition-transform duration-300">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className={`w-2 h-2 rounded-full bg-${service.color}-500 mr-3`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More button */}
                  <div className="mt-auto">
                    <button className={`w-full py-3 px-6 rounded-lg border-2 border-${service.color}-200 text-${service.color}-600 font-semibold hover:bg-${service.color}-50 transition-colors duration-300`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
