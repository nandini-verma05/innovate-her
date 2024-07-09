import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import p2 from './images/AI_6.png';
import p3 from './images/AI_7.png';
import p4 from './images/AI_8.png';
import p5 from './images/AI_5.png';
import p6 from './images/AI_1.png';

const OurWorks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ background: 'linear-gradient(to right, #143151, #B82E75)' }} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="text-white py-4 shadow-lg sticky top-0 z-50 border-b bg-slate-900 border-gray-800 w-full">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Gateway to Future</h1>
          </div>
        </div>
      
        <div className="container mx-auto px-4">
          <Slider {...settings} className="relative w-full">
            <div className="px-2">
              <img src={p2} alt="Project 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="px-2">
              <img src={p3} alt="Project 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="px-2">
              <img src={p4} alt="Project 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="px-2">
              <img src={p5} alt="Project 4" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="px-2">
              <img src={p6} alt="Project 5" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
