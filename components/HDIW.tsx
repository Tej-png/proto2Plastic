'use client'
import Image from 'next/image'
import Link from 'next/link'
// Services data with icons and features
const servicesData = [
    {
        //   icon: Laptop or computer screen,
        title: 'Upload a 3D model and get a quote.',
        description: 'Simply upload your .stl file to our website in the ‘Instant Quote’ tab. Once your specific parameters are selected you will recieve a price to print.',
        features: ['Fast turnaround', 'Multiple materials', 'Precision details'],
    },
    {
        //   icon: 3d printer image,
        title: 'Custom DesigPrinting of your 3D model commences.',
        description: 'Once you have accepted the quote we will start printing your prototype with the desired specifications. (note: Completion time is dependent upon size and quantity)',
        features: ['Personalized designs', 'Unlimited revisions', '3D visualization'],
    },
    {
        //   icon: delivery icon,
        title: 'Receive your newly created 3d model!',
        description: 'We give you the option of picking up your 3D print at our Hamilton-Westdale workshop, or the print can be shipped directly to you (Additional costs).',
       
    },
]

export default function About() {
    return (
        <section id="hdiw" className="section-padding bg-gray-50">
            <div className="container-custom">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        HOW DOES IT WORK?
                    </h2>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesData.map((service) => {
                        // const IconComponent = service.icon
                        return (
                            <div
                                key={service.title}
                                className="group"
                            >
                                <div className=" h-full flex flex-col ">
                                    {/* Icon */}
                                    <div className="flex justify-center mb-20">
                                        <div className={`w-25 h-20 rounded-xl bg-gradient-to-br flex items-center justify-center `}>
                                            <Image src="/images/delivery.svg" className='text-black' alt={service.title} width={200} height={200} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                    </div>


                                </div>

                            </div>
                        )
                    })}

                </div>
                {/* Learn More button */}
                <div className="mt-10 flex justify-center">
                    <Link href="#contact"><button className={`py-3 px-6 rounded-lg border-2 hover:bg-gray-100`}>
                        GET STARTED
                    </button></Link>
                </div>
            </div>
        </section>
    )
}