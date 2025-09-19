import { Calendar, Clock, MapPin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Register() {
    return (
        <>
            

      <section className="bg-blue-100 mt-5">
        <div className="container mx-auto px-6 py-10 ">
          <div className='space-y-4 mb-8'>
            <h2 className="md:text-4xl text-2xl  font-bold text-gray-800 mb-6">
              Conference Information
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed text-justify">Join us at the International Conference on Applied Science, Multidisciplinary Engineering & Technology for an unparalleled platform of knowledge exchange, networking, and innovation. Engage with global experts, present your research, and explore groundbreaking developments shaping the future. Don’t miss this opportunity to be part of a transformative event that brings together the brightest minds from academia, industry, and research.</p>
            <Link to="/paper-submission">
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition'>Register Now</button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Date Card */}
            <div className="border bg-white border-gray-200 shadow-sm backdrop-blur-sm rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">Conference Dates</h3>
              </div>
              <div className="text-center">
                <div className="text-2xl text-gray-800 mb-1">8<sup>th</sup> October 2025</div>
                <div className="text-sm text-gray-500">The Days of Excellence</div>
              </div>
            </div>

            {/* Location Card */}
            <div className="border bg-white border-gray-200 shadow-sm backdrop-blur-sm rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-600">Venue</h3>
              </div>
              <div className="text-center">
                <div className="text-2xl text-gray-800">Kuala Lumpur, Malaysia</div>
                <div className="text-sm text-gray-500">State-of-the-art Facilities</div>
              </div>
            </div>

            {/* Duration Card */}
            <div className="border bg-white border-gray-200 shadow-sm  backdrop-blur-sm rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-600">Duration</h3>
              </div>
              <div className="text-center">
                <div className="text-2xl text-gray-800">9:00 AM – 5:00 PM</div>
                <div className="text-sm text-gray-500">Intensive Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
