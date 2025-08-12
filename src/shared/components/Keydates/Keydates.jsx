import React from 'react'

export default function Keydates() {

  const keyDates = [
  {
    event: "Abstract Submission Deadline",
    date: "April 2, 2025",
    description: "Submit your research abstract for initial review and consideration.",
  },
  {
    event: "Full Paper Submission Deadline",
    date: "April 9, 2025",
    description: "Provide your complete research paper for detailed evaluation.",
  },
  {
    event: "Notification of Acceptance",
    date: "April 17, 2025",
    description: "Receive the official confirmation of your paper's acceptance.",
  },
  {
    event: "Final Paper Submission",
    date: "April 25, 2025",
    description: "Submit the revised and formatted final version of your paper.",
  },
  {
    event: "Conference Dates",
    date: "May 7, 2025",
    description: "Join us for the presentations, discussions, and networking sessions.",
  },
];



  return (
    <>
      <div className="mt-[90px]">
        <section>
          <div className="container mx-auto px-6 py-8">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">KEY DATES</span>
              <h2 className="md:text-4xl text-2xl font-bold text-gray-800  ">
                Countdown to ICASMET 2025
              </h2>
              <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-600  mt-4">
                Mark your calendar for the important milestones of ICASMET 2025.
              </p>

              <div className="max-w-2xl mx-auto   py-12">
                <div className="space-y-6 relative">
                  {/* Vertical line in background */}
                  <div className="absolute left-4 top-0 w-1 h-full bg-blue-200 rounded-full"></div>

                  {keyDates.map((date, index) => (
                    <div key={index} className="relative flex items-start space-x-4">
                      {/* Dot */}
                      <div className="w-8 h-8 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-md">
                        {index + 1}
                      </div>

                      {/* Card */}
                      <div className="bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.08)] border border-gray-200 p-5 w-full">
                        <h3 className="text-lg font-semibold text-gray-900">{date.event}</h3>
                        <p className="text-blue-600 font-medium">{date.date}</p>
                        <p className="text-gray-600 text-sm mt-1">{date.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>


          </div>
        </section>
      </div>
    </>
  )
}
