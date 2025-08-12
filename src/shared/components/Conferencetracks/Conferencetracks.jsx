import React from 'react'

export default function Conferencetracks() {

  const tracks = [
    {
      title: "Sustainable Engineering",
      content: "Focuses on advancing green technologies, renewable energy systems, and innovative solutions for environmental preservation. Topics include climate change mitigation strategies, sustainable urban development, eco-friendly manufacturing, and resource efficiency to ensure a greener future."
    },
    {
      title: "AI & Machine Learning",
      content: "Explores the latest in artificial intelligence applications, deep learning models, neural networks, and intelligent systems. Emphasis is placed on AI-driven automation, predictive analytics, natural language processing, and ethical considerations in AI deployment."
    },
    {
      title: "Materials Science",
      content: "Covers cutting-edge advancements in advanced materials, nanotechnology, composites, and material characterization. Discussions include the development of smart materials, lightweight structural components, and innovations for aerospace, electronics, and biomedical applications."
    },
    {
      title: " Biomedical Engineering",
      content: "Highlights innovations in medical devices, biotechnology, bioinformatics, and healthcare solutions. Topics include regenerative medicine, wearable health monitoring systems, and diagnostic tools that enhance patient care and quality of life."
    },
    {
      title: "Digital Innovation",
      content: "Examines transformative technologies such as the Internet of Things (IoT), blockchain, cybersecurity frameworks, and digital transformation strategies. This track emphasizes building secure, interconnected, and intelligent systems that drive industry 4.0."
    },
    {
      title: " Applied Mathematics",
      content: "Focuses on mathematical modeling, optimization techniques, computational methods, and statistical analysis. Applications span engineering, finance, healthcare, and scientific simulations to solve complex real-world problems efficiently."
    }
  ];



  return (
    <>
      <div className='mt-[90px]'>
        <section>
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">CONFERENCE TRACKS</span>
              <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
                Key Focus Areas
              </h2>
              <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed mx-auto text-justify">
                ICASMET 2025 features a rich selection of conference tracks designed to foster cross-disciplinary dialogue and showcase the latest advancements in science, engineering, and technology. Each track invites researchers, academicians, industry experts, and innovators to share cutting-edge findings, practical solutions, and visionary ideas that address global challenges.
              </p>
            </div>
          </div>


            <div className="container mx-auto  px-8 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex items-center mb-4">
                      <span className="w-10 h-10 bg-blue-600 text-white text-xl font-semibold rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {track.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 sm:text-base md:text-lg lg:text-[16px] leading-relaxed mb-6">
                      {track.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

        </section>
      </div>
    </>
  )
}
