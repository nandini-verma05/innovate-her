import React from 'react';
import  { useEffect } from 'react';
import video from './images/app.mp4'; // Import the video file
import logo from './images/logocrop.png';
import Footer from './Footer';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="relative min-h-screen flex flex-col justify-center items-center text-white">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      ></video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from- #143151 to-#B82E75 text-transparent bg-clip-text">
      <br />
      <img src={logo} alt="logo" className="logo" />
</h1>

 
<p className="text-lg md:text-xl mb-8 text-center text-gray-300 font-medium">
Women AI & Entrepreneurship development program by  E & IT Department(Chhattisgarh)
</p>
<p className="text-lg md:text-xl mb-8 text-center text-gray-300 font-medium">
Empowering women with AI skills and entrepreneurial prowess for a brighter tomorrow.
</p>

        <div className="flex justify-center space-x-4">
       
  
    <button className="bg-gradient-to-r from-yellow-500 via-orange-500 via-pink-500 to-purple-500 text-white font-bold py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:from-pink-500 hover:to-purple-500">
      <a href="https://forms.gle/f7qfRRagDcraLCDv7">Apply now</a>
     
    </button>
        </div>
      </div>
     
      
    </div>
  
      
   
    </div>
  );
};

export default HomePage;
