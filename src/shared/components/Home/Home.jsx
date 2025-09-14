import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Calendar, Clock, Mail, Phone, Users, BookOpen, Award, Globe, Lightbulb, Rocket, Shield } from 'lucide-react';
import Marquee from 'react-fast-marquee';


function Home() {

  const imageItems = [
    { src: 'assets/images/associates/1.png', },
    { src: 'assets/images/associates/2.jpg', },
    { src: 'assets/images/associates/3.jpg', },
    { src: 'assets/images/associates/4.jpg', },
    { src: 'assets/images/associates/5.jpg', },
    { src: 'assets/images/associates/6.jpg', },
    { src: "assets/images/associates/scopus.png", },
    { src: "assets/images/associates/8.jpg", },
    { src: "assets/images/associates/9.jpg", },
    { src: "assets/images/associates/10.jpg", },
    { src: "assets/images/associates/11.jpg", },
  ];


  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center relative">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-right  lg:bg-fixed"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/assets/images/Hero.jpg')",
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4">
          <h1 className="text-[28px] md:text-[42px] lg:text-6xl font-semibold leading-snug  ">
            International Conference on Applied Science, Multidisciplinary Engineering &amp; Technology
          </h1>
          <h2 className="md:mt-4 text-[28px] md:text-[38px] lg:text-[50px] font-medium leading-[1.3]  ">
            May 7, 2025
          </h2>
          <Link to="/paper-submission">
            <button
              className="uppercase px-6 md:px-8 py-2 md:py-3 md:mt-10 mt-5 font-medium bg-blue-600 border border-white rounded-lg text-white hover:bg-blue-700 transition-all duration-300 cursor-pointer"
              aria-label="Register for the conference"
            >
              Register Here
            </button>
          </Link>
        </div>
      </section>

      {/* About the Conference */}

      <section className='container mx-auto px-6 mt-15'>
        <div className="grid lg:grid-cols-2 gap-8 ">
          {/* Left Side - Dark Theme */}
          <div className="flex flex-col justify-center items-center">

            <div className="z-10">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-blue-600 uppercase tracking-wider text-sm font-semibold">About ICASMET 2025</span>
              </div>
              <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-8 leading-tight">
                Shaping the Future of Science & Technology
              </h2>
              <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 mb-4 leading-relaxed text-justify">
                The International Conference on Applied Science, Multidisciplinary Engineering & Technology is a premier global forum bringing together researchers, academicians, industry experts, and innovators to exchange ideas, present cutting-edge research, and explore emerging trends in science, engineering, and technology.
              </p>
              <p className='sm:text-base md:text-lg lg:text-[16px] text-gray-900 mb-8 leading-relaxed text-justify'>This event aims to foster collaboration across multiple disciplines — from applied sciences and engineering innovations to technological advancements that shape industries and communities. By creating a platform for knowledge sharing and networking, ICASMET 2025 empowers participants to address real-world challenges with interdisciplinary solutions.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-lg">Global Impact</h4>
                    <p className="text-gray-800">Researchers from 60+ countries</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-lg">Innovation Hub</h4>
                    <p className="text-gray-800">300+ cutting-edge presentations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Light Theme */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8  border-l-4 shadow-[0_0_10px_rgba(0,0,0,0.10)] border-blue-600 ">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Conference Highlights</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">3</div>
                    <div className="text-sm text-gray-600">Days of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Global Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Keynote Speakers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-800 mb-2">100+</div>
                    <div className="text-sm text-gray-600">Papers</div>
                  </div>
                </div>
              </div>

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


      {/* Scope of the Conference */}
      <section className=" bg-gray-100  mt-15">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">SCOPE OF THE CONFERENCE</span>
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
              Multidisciplinary Excellence
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed mx-auto">
              Explore cutting-edge research across diverse fields of science and engineering
            </p>
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


      {/* conference tracks */}

      <section className="container mx-auto px-6 mt-5">
        <div className="max-w-7xl mx-auto py-8 px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">CONFERENCE TRACKS</span>
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
              Diverse Tracks Driving Innovation
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed mx-auto">
              Discover a diverse range of themes covering cutting-edge advancements in applied science, engineering, and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 ">
            <div className="bg-white p-6 rounded-lg border  border-l-4 border-blue-600 ">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Track 1: Sustainable Engineering</h4>
              <p className="text-gray-600">Green technologies, renewable energy systems, and sustainable development practices.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-l-4 border-blue-600 ">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Track 2: AI & Machine Learning</h4>
              <p className="text-gray-600">Artificial intelligence applications, deep learning, and intelligent systems.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-l-4 border-blue-600 ">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Track 3: Materials Science</h4>
              <p className="text-gray-600">Advanced materials, nanotechnology, and material characterization.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-l-4 border-blue-600 ">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Track 4: Biomedical Engineering</h4>
              <p className="text-gray-600">Medical devices, biotechnology, and healthcare innovations.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-l-4 border-blue-600 ">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Track 5: Digital Innovation</h4>
              <p className="text-gray-600">IoT, blockchain, cybersecurity, and digital transformation.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-l-4 border-blue-600 ">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Track 6: Applied Mathematics</h4>
              <p className="text-gray-600">Mathematical modeling, optimization, and computational methods.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="container mx-auto px-6 mt-8">
        <div className="text-center">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
            Indexed Journals
          </h2>
          <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed mx-auto text-center max-w-5xl ">
           The Selective accepted papers of our International Conference on Applied Science, Multidisciplinary Engineering &amp; Technology will be recommended to publish in the following index & publisher Journals
          </p>
          <Marquee direction="left" speed={100}>
          {/* pauseOnHover={true} */}
          <div className="flex pb-5 pt-5 ">
            {imageItems.map((item, index) => (
              <div key={index} className="flex justify-center mr-10  py-5" >
                <img src={item.src} alt="images" className=" w-[300px] rounded-lg shadow-[0_0_8px_rgba(0,0,0,0.15)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-4" />
              </div>
            ))}
          </div>
        </Marquee>
        </div>


      </section>


    </>
  )
}

export default Home