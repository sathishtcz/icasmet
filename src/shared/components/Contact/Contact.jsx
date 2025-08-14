import { Mail, MapPin } from 'lucide-react';
import React, { useState } from 'react'
import { GrLocation } from 'react-icons/gr'
import { LuMailOpen, LuSend } from 'react-icons/lu'
import { toast } from 'react-toastify';

export default function Contact() {

  const [formData, setFormData] = useState({
    firstname: '',
    secondname: '',
    number: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleFileInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://icasmet.com/api/contact.php', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.text();
      setStatus(result);

      if (response.ok) {
        toast.success("Message submitted successfully!");
        setFormData({
          firstname: '',
          secondname: '',
          number: '',
          email: '',
          message: '',
        });
      } else {
        toast.error('Failed to send submission. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className='mt-[90px]'>
      {/* Contact information section */}
      <section className="container mx-auto px-6 py-8">
        <div className=" mx-auto px-4">
          <div className="text-center  mb-10">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4 uppercase">Contact Us</span>
            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-4">
              Reach Out to Us
            </h2>
            <p className="sm:text-base md:text-lg lg:text-[16px] text-gray-900 leading-relaxed mx-auto ">
              For any questions regarding ICASMET 2025, paper submissions, registration, sponsorship, or partnership opportunities, our organizing team is here to help.
            </p>
          </div>


          <div className="gap-5 flex md:flex-row flex-col mb-10 justify-center ">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-800 wrap-anywhere">icasmet.conference@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-gray-800">
                 Kuala Lumpur, Malaysia
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='max-w-5xl mx-auto'>
            <div className="border rounded-xl p-8 ">
              <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3  border border-gray-600 rounded-lg focus:border-transparent"
                      placeholder="Enter your first name"
                      id="firstname"
                      value={formData.firstname}
                      onChange={handleFileInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3  border border-gray-600 rounded-lg focus:border-transparent"
                      placeholder="Enter your last name"
                      id="secondname"
                      value={formData.secondname}
                      onChange={handleFileInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3  border border-gray-600 rounded-lg focus:border-transparent"
                      placeholder="Enter your email address"
                      id="email"
                      value={formData.email}
                      onChange={handleFileInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mobile Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3  border border-gray-600 rounded-lg focus:border-transparent"
                      placeholder="Enter your Mobile number"
                      id="number"
                      value={formData.number}
                      onChange={handleFileInputChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3  border border-gray-600 rounded-lg focus:border-transparent"
                    placeholder="Write your message here..."
                    id="message"
                    value={formData.message}
                    onChange={handleFileInputChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  {status === 'Sending...' ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
