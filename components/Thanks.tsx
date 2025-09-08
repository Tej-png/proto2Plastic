'use client'
import Image from 'next/image'
import Link from 'next/link'


export default function Thanks() {
    return (
        <div id="thanks" className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-4xl font-bold text-green-600">Thank You!</h1>
          <p className="mt-4 text-gray-700">
            Your message has been sent successfully. We’ll be in touch soon.
          </p>
        </div>
      );
}