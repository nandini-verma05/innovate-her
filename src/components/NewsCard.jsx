import React from 'react';

const NewsCard = ({ image, title, description, profileImage, creator, date }) => {
  return (
    <div id='Mentors-section' className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:from-gray-950 hover:via-gray-900 hover:to-gray-950 transform hover:-translate-y-2 hover:shadow-2xl transition-transform transition-shadow duration-300 rounded-lg border border-gray-700 p-6 flex flex-col text-white w-full max-w-md mx-auto my-6 shadow-lg">
      <img src={image} alt={title} className="rounded-t-lg w-full h-64 object-cover mb-4" />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-base mb-6">{description}</p>
      <hr className="w-full border-gray-600 mb-4" />
      <div className="flex items-center justify-between w-full">
    
          
        <div className="p-4 flex flex-col items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-bold">{creator}</h3>
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
        </div>
        
        </div>
   
   
  );
};

export default NewsCard;
