import React from 'react'

export default function Editorialboard() {

    const editorialMembers = [
        {            
            name: "Stanley Adiele Okolie",
            department: "Computer Science",
            university: "Federal University of Technology Owerri",
            country: "Nigeria"
        },
        {
            name: "Bilal Saoud",
            department: "Electrical Engineering",
            university: "University of Bouira",
            country: "Algeria"
        },
        {
            name: "Anuj Kumar",
            department: "Computer Science",
            university: "Doon University",
            country: "India"
        },
        
          {  name: "Monday Fredrick Ohemu",
            department: "Electrical and Electronics Engineering",
            university: "Airforce Institute of Technology",
            country: "Nigeria"
        },
        {
            name: "Kabelo Given Chuma",
            department: "Information Science",
            university: "University of South Africa",
            country: "South Africa"
        },
        {
            name: "Pravin Futane",
            department: "Computer Engineering",
            university: "Vishwakarma Institute of Information Technology",
            country: "India"
        },
        {
            name: "Ajaegbu Chigozirim",
            department: "Information Technology",
            university: "Babcock University",
            country: "Nigeria"
        },
        {
            name: "Grace Egbi Alilu",
            department: "Computer Science",
            university: "Hallmark University",
            country: "Nigeria"
        },
        {
            name: "Arindom Kundu",
            department: "Computer Science and Engineering",
            university: "Daffodil International University",
            country: "Bangladesh"
        },
        {
            name: "Sidaoui Boutkhil",
            department: "Computer Science",
            university: "Salhi Ahmed University of Naama",
            country: "Algeria"
        },
        {
            name: "Kolawole Yusuf Obiwusi",
            department: "Mathematics and Computer Science",
            university: "Summit University",
            country: "Nigeria"
        },
         {
            name: "Citra Fathia Palembang",
            department: "Computer Science",
            university: "Pattimura University",
            country: "Indonesia"
        },
        {
            name: "Abderrahim Bouchair",
            department: "Computer Science",
            university: "University of Oran1 Ahmed Ben Bella",
            country: "Algeria"
        },
        {
            name: "Arun Kumar Rouniyar",
            department: "Mechanical Engineering",
            university: "Saharsa college of Engineering",
            country: "India"
        },
        {
            name: "Ghasem Abbasi",
            department: "Mathematics and Statistics",
            university: "Islamic Azad University",
            country: "Iran"
        },
         {
            name: "Marwan Ramdhany Edy",
            department: "Informatics and Computer Engineering",
            university: "Universitas Negeri Makassar",
            country: "Indonesia"
        },
        {
            name: "Shazia Riaz",
            department: "Computer Science",
            university: "Women University Faisalabad",
            country: "Pakistan"
        },
        {
            name: "Rahman Shafique",
            department: "Information and Communication Engineering",
            university: "Yeungnam University",
            country: "South Korea"
        },
        {
            name: "Robin Prakash Mathur",
            department: "Computer Science and Engineering",
            university: "Lovely Professional University",
            country: "India"
        },
        {
            name: "Lamia Abed Noor Muhammed",
            department: "Computer Science",
            university: "University of Al-Qadisiyah",
            country: "Iraq"
        },
        {
            name: "Ardhendu Mandala",
            department: "Computer Science and Technology",
            university: "University of North Bengal",
            country: "India"
        },
        {
            name: "Tanimu Mohammed",
            department: "Statistics",
            university: "University of Abuja",
            country: "Nigeria"
        },
         {
            name: "Muhammad Mujahid",
            department: "Computer Science",
            university: "Khwaja Fareed University of Engineering & Information Technology",
            country: "Pakistan"
        },
    ];

    return (
        <>
            <div className="mt-[90px]">
                <section>
                    <div className="container mx-auto px-6 py-8">
                        <div className="text-center mb-12">
                            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">EDITORIAL BOARD</span>
                            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
                                Guiding Academic Excellence
                            </h2>
                            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed mx-auto text-justify">
                                The Editorial Board of ICASMET 2025 is composed of distinguished scholars, researchers, and subject matter experts from leading universities and institutions worldwide. With deep expertise across diverse disciplines, the board plays a pivotal role in maintaining the conference’s academic integrity and ensuring the highest quality of published content. The board is entrusted with overseeing the peer-review process, ensuring that every submission meets rigorous academic and ethical standards. They carefully evaluate research papers for originality, technical merit, and relevance to the conference themes, providing constructive feedback to authors to enhance the quality of their work.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">

                            {/* Table Header */}
                            <div className="md:block hidden">
                                <div className="flex items-center p-6 bg-gray-50 border-b border-gray-200 ">
                                    <div className="w-8 h-8 mr-6 flex-shrink-0"></div>
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <div className="md:col-span-1">
                                            <p className="text-sm text-gray-700 font-bold uppercase tracking-wide">NAME</p>
                                        </div>
                                        <div className="md:col-span-1">
                                            <p className="text-sm text-gray-700 font-bold uppercase tracking-wide">DEPARTMENT</p>
                                        </div>
                                        <div className="md:col-span-1">
                                            <p className="text-sm text-gray-700 font-bold uppercase tracking-wide">UNIVERSITY</p>
                                        </div>
                                        <div className="md:col-span-1">
                                            <p className="text-sm text-gray-700 font-bold uppercase tracking-wide">COUNTRY</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Members Rows */}
                            {editorialMembers.map((member, index) => (
                                <div className={`flex items-center p-6 ${index !== editorialMembers.length - 1 ? 'border-b border-gray-200' : ''} hover:bg-gray-50 transition-colors`}>

                                    {/* Number */}
                                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-6 flex-shrink-0">
                                        {index + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">

                                        {/* Name */}
                                        <div className="md:col-span-1">
                                            <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                                                Dr. {member.name}
                                            </h3>
                                        </div>

                                        {/* Department */}
                                        <div className="md:col-span-1">
                                            <p className="text-gray-700 leading-tight">
                                                {member.department}
                                            </p>
                                        </div>

                                        {/* University */}
                                        <div className="md:col-span-1">
                                            <p className="text-gray-700 leading-tight">
                                                {member.university}
                                            </p>
                                        </div>

                                        {/* Country */}
                                        <div className="md:col-span-1">
                                            <p className="text-gray-700  ">
                                                {member.country}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
