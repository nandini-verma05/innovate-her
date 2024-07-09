import React from 'react';
import img from './images/pic1.jpeg'
const Cards = () => {
  // Sample data for cards
  const cardsData = [
    { id: 1, imageSrc: img, name: "John Doe", position: "CEO" },
    { id: 2, imageSrc: "image2.jpg", name: "Jane Smith", position: "CTO" },
    { id: 3, imageSrc: "image3.jpg", name: "Alice Johnson", position: "Developer" },
    // Add more data as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {cardsData.map((card) => (
        <div key={card.id} className="border border-gray-400 bg-black rounded-lg overflow-hidden shadow-lg">
          {/* Image Section */}
          <div className="relative">
            <img src="pic1.jpeg" alt="Profile" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="absolute inset-x-0 bottom-0 h-4 bg-white"></div>
          </div>

          {/* Name and Position */}
          <div className="p-6">
            <h2 className="text-white text-2xl font-bold">{card.name}</h2>
            <p className="text-pink-500">{card.position}</p>
          </div>
        </div>
      ))}   
    </div>
  );
};

export default Cards;