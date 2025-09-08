'use client'

import { useState } from 'react'
import { Phone, Mail, Clock, Send } from 'lucide-react'
import { Resend } from 'resend';

import { useRouter } from "next/navigation";

const apiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY
console.log(apiKey)

// Contact information data
const contactInfo = [

  {
    icon: Phone,
    title: 'Call Us',
    details: [
      '+1 (905) 431-7999',
      '+1 (437) 599-2346',
      'Mon-Fri 9AM-6PM PST'
    ],
    color: 'green',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: [
      'service@proto2plastic.com',
      'We reply within 2 hours'
    ],
    color: 'purple',
  },
  {
    icon: Clock,
    title: 'Rush Orders',
    details: [
      '24-hour turnaround',
      'Express shipping available'
    ],
    color: 'orange',
  },
]

type EmailPayload = {
  email: string;
  subject: string;
  message: string;
};

export async function sendEmail( payload: EmailPayload): Promise<any> {
  
 
  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Failed to send email: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("done")
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}


// Contact section component with form and contact info
export default function Contact() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    projectDetails: '',
  })

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // ✅ prevent page reload
  
    const { name, email, projectType, projectDetails } = formData;
  
    try {
      await sendEmail({
        email: email,
        subject: projectType,
        message: projectDetails,
      });
  
      setFormData({
        name: "",
        email: "",
        projectType: "",
        projectDetails: "",
      });
  
      router.push("/thanks"); // ✅ redirect after success
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section id='contact' className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let&apos;s Create Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let&apos;s start your 3D printing journey.
          </p>
        </div>

        {/* Contact content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Start Your Project
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>

                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>

                {/* Project Type field */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <input
                    type="text"
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    placeholder="Prototyping, Custom Design, etc."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>

                {/* Project Details field */}
                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, timeline, and requirements..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    required
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="card"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-${info.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-6 h-6 text-${info.color}-600`} />
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

