import { Award, BookOpen, Shield } from 'lucide-react'
import React from 'react'

export default function Scope() {
  return (
    <div className='mt-[90px]'>
      {/* Scope of the Conference */}
      <section>
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">SCOPE OF THE CONFERENCE</span>
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
              Multidisciplinary Excellence
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed mx-auto text-justify">
              The International Conference on Applied Science, Multidisciplinary Engineering & Technology serves as a vibrant platform for knowledge exchange across diverse domains of science, engineering, and technology. It brings together academicians, researchers, industry professionals, and students from around the globe to discuss advancements, share innovative ideas, and explore collaborative opportunities. The conference welcomes original research papers, case studies, experimental findings, and practical applications that address pressing global challenges while pushing the boundaries of existing knowledge.
            </p>

            <div className="space-y-4 mt-5">
                <p className="md:text-xl text-lg font-medium text-start">Core Themes of ICASMET 2025</p>
                <ul className=' list-disc list-inside text-gray-800 space-y-2'>
                  <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Applied Sciences</strong> – Physics, chemistry, biology, environmental science, and material science.</li>
                  <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Engineering Disciplines</strong> – Civil, mechanical, electrical, electronics, and computer engineering.</li>
                  <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Emerging Technologies</strong> – Artificial Intelligence, Machine Learning, IoT, robotics, and automation.</li>
                  <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Sustainable Development</strong> – Renewable energy, climate change solutions, and green technologies.</li>
                  
                </ul>
              </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 h-full">
            <div className="group ">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-300 h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <BookOpen className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advancements in Applied Sciences</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Innovative research in physics, chemistry, biology, and environmental sciences.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Sustainable solutions for real-world problems.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Integration of fundamental science with practical applications.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group ">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-300 h-full">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                  <Award className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Multidisciplinary Engineering Innovations</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Cross-domain engineering approaches for complex challenges.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Smart manufacturing, robotics, and automation.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Renewable energy systems and sustainable infrastructure.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group ">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-300 h-full">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                  <Shield className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emerging Technologies & Future Trends</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Artificial Intelligence, Machine Learning, and Data Science.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Internet of Things (IoT) and advanced communication systems.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">Nanotechnology, material science, and biomedical engineering.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
