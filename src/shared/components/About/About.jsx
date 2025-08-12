import { Globe, Lightbulb, Rocket, Users } from 'lucide-react'
import React from 'react'

function About() {
  return (
    <>
      <div className="mt-[90px]">
        {/* About the Conference */}

        <section className='container mx-auto px-6 py-8'>
          <div className='space-y-8'>
            {/* Left Side - Dark Theme */}
            <div className="z-10">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold uppercase">About the Conference</span>
              </div>
              <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-8 leading-tight text-center">
                Shaping the Future of Science & Technology
              </h2>
              <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 mb-4 leading-relaxed text-justify">
                The International Conference on Applied Science, Multidisciplinary Engineering & Technology is a premier global forum bringing together researchers, academicians, industry experts, and innovators to exchange ideas, present cutting-edge research, and explore emerging trends in science, engineering, and technology.
              </p>
              <p className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 mb-8 leading-relaxed text-justify'>This event aims to foster collaboration across multiple disciplines — from applied sciences and engineering innovations to technological advancements that shape industries and communities. By creating a platform for knowledge sharing and networking, ICASMET 2025 empowers participants to address real-world challenges with interdisciplinary solutions.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-lg">Global Impact</h4>
                    <p className="text-gray-800">Researchers from 60+ countries</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-lg">Innovation Hub</h4>
                    <p className="text-gray-800">300+ cutting-edge presentations</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Right Side - Light Theme */}
            <div className="flex flex-col justify-center gap-8">
              <div className="space-y-4">
                <p className="md:text-xl text-lg font-medium">Key Highlights of ICASMET 2025</p>
                <ul className=' list-disc list-inside text-gray-800 space-y-2'>
                  <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Renowned Speakers</strong> – Learn from leading experts and innovators from across the globe.</li>
                  <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Multidisciplinary Tracks</strong> – Covering applied sciences, engineering, and emerging technologies.</li>
                  <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Networking Opportunities</strong> – Connect with researchers, industry leaders, and academic peers.</li>
                  <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Publication Opportunities</strong> – Selected papers to be published in reputed journals/conference proceedings.</li>
                  
                </ul>
              </div>
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.10)]">
                    <Lightbulb className="w-8 h-8 text-blue-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Innovation Focus</h4>
                    <p className="text-sm text-gray-600">Breakthrough technologies and revolutionary research</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-[0_0_10px_rgba(0,0,0,0.10)]">
                    <Users className="w-8 h-8 text-blue-500 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Networking</h4>
                    <p className="text-sm text-gray-600">Connect with industry leaders and peers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default About