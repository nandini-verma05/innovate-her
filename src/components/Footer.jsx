import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative">
      {/* White line at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Left Side */}
        <div className="mb-8 md:mb-0 md:w-1/2">
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold">INNOVATE HER</span>
          </div>
          <p className="mb-4 text-justify">
            We equip women with advanced AI skills and entrepreneurial knowledge to drive innovation and leadership.
          </p>
          <div className="mb-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-gray-900"
              />
              <div className='ml-11'>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:from-pink-500 hover:to-purple-500">
                  <a href="https://forms.gle/f7qfRRagDcraLCDv7">send</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
