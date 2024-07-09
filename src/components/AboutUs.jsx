import React from 'react';
import p2Image from './images/logo5.jpeg'; // Import the image

const AboutUs = () => {
  return (
    <div id='vision-section' className="relative bg-black text-white py-12 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with subtle purple gradient */}
      <div style={{ background: 'linear-gradient(to right, #143151, #B82E75)' }} className="absolute top-0 left-0 w-full h-full z-0">
        {/* Subtle purple circles */}
        <svg className="absolute top-0 left-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#9b5de5" fillOpacity="0.1" d="M0,256L48,240C96,224,192,192,288,165.3C384,139,480,117,576,128C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute bottom-0 right-0 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f15bb5" fillOpacity="0.1" d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,213.3C672,245,768,235,864,202.7C960,171,1056,117,1152,90.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8"> {/* Added md:px-8 for side margins on larger screens */}
        {/* Stylish White Line */}
        <div className="border-t-2 border-white mb-12 mx-auto w-1/2"></div>

        {/* Achievements and About Section */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center mb-12">
          <img src={p2Image} alt="Startup for Women Empowerment" className="w-full md:w-1/3 rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8" /> {/* Increased margin right on large screens */}
          <div className="w-full md:w-2/3 px-4 md:px-0">
            <p className="mb-6 text-center md:text-justify">
              Led by the Electronics and Information Technology Department of Chhattisgarh, our vision is to create a future where women lead in AI innovation and entrepreneurship. We envision a landscape where women leverage technology to build successful ventures, drive sustainable growth, and inspire positive change in their communities.
            </p>
            <p className="text-center md:text-justify">
              Our initiative is dedicated to equipping women with essential AI and entrepreneurial skills. We aim to empower women to thrive in the digital age, fostering innovation, economic growth, and societal progress.
            </p>
          </div>
        </div>

        {/* Small Rectangular Boxes */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-center md:text-left">What will be covered?</h4>
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-gray-950 hover:via-gray-900 hover:to-gray-950 transform hover:-translate-y-2 hover:shadow-2xl transition-transform transition-shadow duration-300 rounded-lg p-6 flex flex-col text-white shadow-lg">
              <h3 className="text-xl font-bold">Creativity using MidJourney & DALL-E 3</h3>
            </div>
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-gray-950 hover:via-gray-900 hover:to-gray-950 transform hover:-translate-y-2 hover:shadow-2xl transition-transform transition-shadow duration-300 rounded-lg p-6 flex flex-col text-white shadow-lg">
              <h3 className="text-xl font-bold">Complete Course on ChatGPT & Gemini</h3>
            </div>
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-gray-950 hover:via-gray-900 hover:to-gray-950 transform hover:-translate-y-2 hover:shadow-2xl transition-transform transition-shadow duration-300 rounded-lg p-6 flex flex-col text-white shadow-lg">
              <h3 className="text-xl font-bold">Practical use-cases for Professionals</h3>
            </div>
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-gray-950 hover:via-gray-900 hover:to-gray-950 transform hover:-translate-y-2 hover:shadow-2xl transition-transform transition-shadow duration-300 rounded-lg p-6 flex flex-col text-white shadow-lg">
              <h3 className="text-xl font-bold">Entrepreneurship 101</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
