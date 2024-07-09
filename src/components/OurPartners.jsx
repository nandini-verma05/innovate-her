import React from 'react';

import pic2Image from './images/mylogo.jpg';
import pic4Image from './images/pic10.jpeg';
import po1Image from './images/po1.jfif';  
import p02Image from './images/p02.jpeg';  


const OurPartners = () => {
  const partnerImages = [
    pic2Image,
    pic4Image,
    po1Image,
    p02Image
  ];

  return (
    <div style={{ background: 'linear-gradient(to right, #143151, #B82E75)' }} className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white py-12 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with enhanced gradient */}
      <div 
        className="text-white py-4 shadow-lg sticky top-0 z-50 border-b border-gray-800"
      >
        {/* Your content here */}
      </div>

      {/* Subtle circles */}
      <svg
        className="absolute top-0 left-0 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#9b5de5"
          fillOpacity="0.1"
          d="M0,256L48,240C96,224,192,192,288,165.3C384,139,480,117,576,128C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className="absolute bottom-0 right-0 z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f15bb5"
          fillOpacity="0.1"
          d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,213.3C672,245,768,235,864,202.7C960,171,1056,117,1152,90.7C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="relative z-10 container-fluid mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center">Our Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partnerImages.map((image, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 flex justify-center items-center p-4"
              style={{ margin: '10px' }}
            >
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="w-full h-auto object-cover rounded-md"
                style={{ maxHeight: '150px' }}
              />
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );  
};

export default OurPartners;
