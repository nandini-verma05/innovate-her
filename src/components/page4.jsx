import React from 'react';

import GradientButton from './GradientButton';


const ContactUs = () => {
  return (
    <div id='contact-us-section' className="relative py-12 min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(to right, #143151, #B82E75)' }}>
      {/* Black background with subtle purple gradient */}
      <div className="text-white py-4 shadow-lg sticky top-0 z-50 border-b border-gray-800">
        {/* Your content here */}
      
        {/* Subtle purple circles */}
        <svg className="absolute top-0 left-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#9b5de5" fillOpacity="0.1" d="M0,256L48,240C96,224,192,192,288,165.3C384,139,480,117,576,128C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 right-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f15bb5" fillOpacity="0.1" d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,213.3C672,245,768,235,864,202.7C960,171,1056,117,1152,90.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>

        <div className="relative container mx-auto px-4 z-10">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <p className="text-lg text-center mb-8">
            Please feel free to reach out to us using the contact form below or visit us at our address.
          </p>
          <div className="flex flex-col lg:flex-row justify-between bg-gray-900 p-8 rounded-lg shadow-lg">
            {/* Left side: Contact information */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="mb-4">3rd Floor, SDC BUILDING, opp. New Circuit House, Civil Lines, Raipur, Chhattisgarh 492001</p>

              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="mb-2">+91 9958455776</p>

              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="mb-2">office@maytreeschool.com</p>
            </div>
            
            {/* Right side: Contact form */}
            <div className="lg:w-1/2 lg:pl-8">
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <GradientButton/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
;

export default ContactUs;
