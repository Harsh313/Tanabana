import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <img 
              src="/WhatsApp Image 2025-07-18 at 22.35.01.jpeg" 
              alt="Tanabana Logo" 
              className="h-20 w-20 mx-auto mb-4 object-contain bg-white rounded-full p-2"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            TANABANA
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            Minimalist fashion for the modern woman
          </p>
          <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
            Discover timeless pieces designed for the confident, contemporary woman. 
            Each garment is carefully crafted to elevate your feminine style with effortless elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-black text-lg font-medium rounded-none hover:bg-gray-100 transition-colors group"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/categories/dresses"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white text-lg font-medium rounded-none hover:bg-white hover:text-black transition-colors"
            >
              Shop Dresses
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero