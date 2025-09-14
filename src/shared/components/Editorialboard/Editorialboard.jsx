import React from 'react'
import { FaCircleUser } from 'react-icons/fa6';

export default function Editorialboard() {


    const Organizingcommitte = [

        {
            name: "Dr. Hea Choon Ngo",
            department: "Department of Electronics and Communication Engineering",
            university: "Universiti Teknikal Malaysia Melaka",
            location: "Malaysia"
        },
        {
            name: "Dr. Sian Lun Lau",
            department: "Department of Engineering",
            university: "Sunway University",
            location: "Malaysia"
        },
        {
            name: "Dr. Hadhrami Ab. Ghani",
            department: "Department of Data Science and Computing",
            university: "Universiti Malaysia Kelantan",
            location: "Malaysia"
        },

        {
            name: "Dr. Ahmed Rimaz Faizabadi",
            department: "Department of Electrical and Computer Engineering",
            university: "International Islamic University Malaysia",
            location: "Malaysia"
        },
        {
            name: "Dr. Nor Musliza Mustafa",
            department: "Department of Creative Multimedia and Computing",
            university: "Selangor Islamic University",
            location: "Malaysia"
        },
    ];


    const technicalcomiittee = [
        {
            name: "Dr. Stephen Ekwe",
            department: "Department of Electrical Engineering",
            university: "University of Cape Town",
            location: "South Africa"
        },
        {
            name: "Dr. Sowmipriya Rajendiran",
            department: "Department of Computer Science and Engineering",
            university: "International School of Information Processing Sciences",
            location: "France"
        },
        {
            name: "Dr. Muhammad Asif Khan",
            department: "Department of Information Technology",
            university: "Qatar University",
            location: "Qatar"
        },
        {
            name: "Dr. Zouhour El-Abiad",
            department: "Department of Computer Science",
            university: "ESA Business School",
            location: "Lebanon"
        },
        {
            name: "Dr. Rohini Sharma",
            department: "Department of Computer Science and Applications",
            university: "Panjab University",
            location: "India"
        },
        {
            name: "Dr. Wasan Alamro",
            department: "Department of Electrical Engineering",
            university: "Auckland University of Technology",
            location: "New Zealand"
        },
        {
            name: "Dr. Shahzad Ali",
            department: "Department of Computer Science",
            university: "Dawood University Of Engineering and Technology Karachi",
            location: "Pakistan"
        },
        {
            name: "Dr. Maryam Anwer",
            department: "Department of Industrial Engineering",
            university: "Majma university",
            location: "Saudi Arabia"
        },
        {
            name: "Dr. Qian Liu",
            department: "Department of Computer Science and Engineering",
            university: "Krirk University",
            location: "Thailand"
        },
        {
            name: "Dr. Hansi Gunasinghe",
            department: "Department of Computing and Information Systems",
            university: "Sabaragamuwa University of Sri Lanka",
            location: "Sri Lanka"
        },
        {
            name: "Dr. Meenakshi Gupta",
            department: "Department of Computer Science",
            university: "National University of Singapore",
            location: "Singapore"
        },
        {
            name: "Dr. Ernesto Carrillo Arellano",
            department: "Department of Electronics Engineering",
            university: "Metropolitan Autonomous University",
            location: "Mexico"
        },
        {
            name: "Dr. Rogerio Espindola",
            department: "Department of Civil Engineering",
            university: "Federal University of Rio de Janeiro",
            location: "Brazil"
        },
        {
            name: "Dr. Bassam Talib Sabri ali",
            department: "Department of Businesses Information Technology",
            university: "University of Information Technology and Communication",
            location: "Iraq"
        },
        {
            name: "Dr. Robin Prakash Mathur",
            department: "Department of Computer Science and Engineering",
            university: "Lovely Professional University",
            location: "India"
        },
        {
            name: "Dr. Samir Hallaci",
            department: "Department of Computer Science",
            university: "Guelma University",
            location: "Algeria"
        },
        {
            name: "Dr. Alma Bangayan Manera",
            department: "Department of Electronics and Communication Engineering",
            university: "Cagayan State University",
            location: "Philippines"
        },
        {
            name: "Dr. Abolfazl Gandomi",
            department: "Department of Computer Engineering",
            university: "Islamic Azad University",
            location: "Iran"
        },
        {
            name: "Dr.Md Foysal",
            department: "Department of Electronics and Communication Engineering",
            university: "Khulna University of Engineering and Technology ",
            location: "Bangladesh"
        },
        {
            name: "Dr. Chinwe Peace Igiri",
            department: "Department of Computer Science",
            university: "Cavendish University",
            location: "Uganda"
        },
    ];



    const advisorycommittee = [
        {
            name: "Dr. Junaid Ahmed",
            department: "Department of Information Engineering",
            university: "Zhengzhou University",
            location: "China"
        },
        {
            name: "Dr. Tejas Dhote",
            department: "Department of Mechanical Engineering",
            university: "Michigan Technological University",
            location: "USA"
        },
        {
            name: "Dr. Asma Sbeih",
            department: "Department of Engineering and Information",
            university: "Palestine Ahliya University",
            location: "Palestine"
        },
        {
            name: "Dr. Rustam Asnawi",
            department: "Department of Electrical Engineering",
            university: "Universitas Negeri Yogyakarta",
            location: "Indonesia"
        },
        {
            name: "Dr. Ammar Amjad",
            department: "Department of Information Technology",
            university: "National Yang Ming Chiao Tung University",
            location: "Taiwan"
        },
        {
            name: "Dr. Twana A. Hamad",
            department: "Department of Computer Engineering",
            university: "Harran University",
            location: "Turkiye"
        },
        {
            name: "Dr. Chandan Jyoti Kumar",
            department: "Department of Computer Science and Information Technology",
            university: "Cotton University",
            location: "India"
        },
        {
            name: "Dr. Nguyen Van Thieu",
            department: "Department of Computer Science",
            university: "Phenikaa University",
            location: "Vietnam"
        },
        {
            name: "Dr. Hua Qu",
            department: "Department of Biomedical Engineering and Technology",
            university: "Tianjin Medical University",
            location: "China"
        },
        {
            name: "Dr. R. Arun Kumar",
            department: "Department of Digital Forensics and Cyber Security",
            university: "University of South Wales",
            location: "United Kingdom"
        },
        {
            name: "Dr. Oladayo Atanda",
            department: "Department of Computer Science",
            university: "Bowen University",
            location: "Nigeria"
        },
        {
            name: "Dr. Saqib Amin",
            department: "Department of Information Technology",
            university: "Riphah International University",
            location: "Pakistan"
        },
        {
            name: "Dr. Nour Moustafa",
            department: "Department of Computer Science",
            university: "American University of the Middle East",
            location: "Kuwait"
        },
        {
            name: "Dr. Kolawole Yusuf Obiwusi",
            department: "Department of Mathematics and Computer Science",
            university: "Summit University",
            location: "Nigeria"
        },
        {
            name: "Dr.Md Moshiur Rahman",
            department: "Department of Computer Science and Engineering",
            university: "Bangladesh Open University",
            location: "Bangladesh"
        },
        {
            name: "Dr. Aram Sabr Tahr",
            department: "Department of Computer Science",
            university: "Cyprus International University",
            location: "Cyprus"
        },
        {
            name: "Dr. Bilal Saoud",
            department: "Department of Electrical Engineering",
            university: "University of Bouira",
            location: "Algeria"
        },
        {
            name: "Dr. Ghasem Abbasi",
            department: "Department of Mathematics and Statistics",
            university: "Islamic Azad University",
            location: "Iran"
        },
        {
            name: "Dr. Leo John Baptist",
            department: "Department of Information Technology",
            university: "Botho University",
            location: "Botswana"
        },
        {
            name: "Dr. Salah Eddine Benatia",
            department: "Department of Computer Science",
            university: "Mascara University",
            location: "Algeria"
        },
        {
            name: "Dr. D. Kayathri Devi",
            department: "Department of Information Technology and Engineering",
            university: "Amity University",
            location: "Uzbekistan"
        },
        {
            name: "Dr. Ardhendu Mandala",
            department: "Department of Computer Science and Technology",
            university: "University of North Bengal",
            location: "India"
        },
        {
            name: "Dr. Sinarring Azi Laga",
            department: "Department of Informatics Technology",
            university: "Hayam Wuruk Perbanas University",
            location: "Indonesia"
        },
        {
            name: "Dr. Saman Almufti",
            department: "Department of Computer Science",
            university: "Nawroz University",
            location: "Iraq"
        },
        {
            name: "Dr. Puneet Sharma",
            department: "Department of Automation and Process Engineering",
            university: "The Arctic University of Norway",
            location: "Norway"
        },
        {
            name: "Dr. Asad Aziz",
            department: "Department of Geography",
            university: "University of Gujrat",
            location: "Pakistan"
        }
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

                        <div className="">
                            <h3 id="organizing" className="scroll-mt-22 font-semibold text-[25px] lg:text-[30px] text-gray-800 text-center ">Organizing Committee</h3>
                            <div className="max-w-[1300px] mx-auto py-3">
                                {Organizingcommitte.map((editor, index) => (
                                    <div key={index}>
                                        <div className='flex gap-2  mb-2 items-center'>
                                            <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                            <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <h3 id="technical" className="scroll-mt-22 font-semibold text-[25px] lg:text-[30px] text-gray-800 text-center mt-8 ">Technical Program Committee</h3>
                            <div className="max-w-[1300px] mx-auto py-3">
                                {technicalcomiittee.map((editor, index) => (
                                    <div key={index}>
                                        <div className='flex gap-2  mb-2 items-center'>
                                            <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                            <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h3 id="advisory" className="scroll-mt-22 font-semibold text-[25px] lg:text-[30px] text-gray-800 text-center mt-8 ">International Advisory Board Committee</h3>
                            <div className="max-w-[1300px] mx-auto py-3">
                                {advisorycommittee.map((editor, index) => (
                                    <div key={index}>
                                        <div className='flex gap-2  mb-2 items-center'>
                                            <FaCircleUser className='text-gray-600 flex-shrink-0' />
                                            <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}


{/* <div className="bg-white rounded-lg shadow-sm overflow-hidden">

                            
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

                          
                            {editorialMembers.map((member, index) => (
                                <div className={`flex items-center p-6 ${index !== editorialMembers.length - 1 ? 'border-b border-gray-200' : ''} hover:bg-gray-50 transition-colors`}>

                                   
                                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-6 flex-shrink-0">
                                        {index + 1}
                                    </div>

                                  
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">

                                        
                                        <div className="md:col-span-1">
                                            <h3 className="font-semibold text-gray-900 text-lg leading-tight hover:text-blue-600">
                                                Dr. {member.name}
                                            </h3>
                                        </div>

                                       
                                        <div className="md:col-span-1">
                                            <p className="text-gray-700 leading-tight">
                                                {member.department}
                                            </p>
                                        </div>

                                        
                                        <div className="md:col-span-1">
                                            <p className="text-gray-700 leading-tight">
                                                {member.university}
                                            </p>
                                        </div>

                                        
                                        <div className="md:col-span-1">
                                            <p className="text-gray-700  ">
                                                {member.country}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> */}