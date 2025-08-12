import { Award, BookOpen, Shield } from 'lucide-react'
import React from 'react'

export default function Committee() {
    return (
        <>
            <div className='mt-[90px]'>
                <section>
                    <div className="container mx-auto px-6 py-8">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">ORGANIZING COMMITEE</span>
                            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
                               Pillars of Coordination
                            </h2>
                            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed mx-auto text-justify">
                                The success of ICASMET 2025 is the result of the vision, dedication, and expertise of a highly committed Organizing Committee, comprising renowned academicians, eminent researchers, experienced industry leaders, and skilled professionals from across the globe. Each member brings unique knowledge, valuable experience, and an unwavering commitment to excellence, ensuring that every aspect of the conference is executed to the highest standards. From conceptualizing the conference theme and structure to curating an engaging scientific program and managing the smallest logistical details, the committee works tirelessly behind the scenes to create an enriching and seamless experience for all participants. 
                            </p>

                            <div className="space-y-4 mt-5">
                                <p className="md:text-xl text-lg font-medium text-start">Key Responsibilities</p>
                                <ul className=' list-disc list-inside text-gray-800 space-y-2'>
                                    <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Conference Leadership</strong> – Define the vision, objectives, and overall direction of the event.</li>
                                    <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Program Planning</strong> – Curate technical sessions, keynote speeches, and panel discussions.</li>
                                    <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Publication Management</strong> – Coordinate conference proceedings and journal collaborations.</li>
                                    <li className='sm:text-base md:text-lg lg:text-[16px] leading-relaxed text-justify'><strong>Logistics & Operations</strong> – Manage venue arrangements, travel support, and delegate services.</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
