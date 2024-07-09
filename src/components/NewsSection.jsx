import React from 'react';
import NewsCard from './NewsCard';

import pic3Image from './images/pic3.jpeg'; // Import the image
import pic17Image from './images/pic8.jpeg'; // Import the image

import pic6Image from './images/3.jpg'; // Import the image
import pic16Image from './images/10.jpg'; // Import the image

import pic9Image from './images/9.jpg'; // Import the image
import pic10Image from './images/7.jpg'; // Import the image
import pic11Image from './images/6.jpg'; // Import the image
import pic12Image from './images/8.jpg'; // Import the image
import pic13Image from './images/5.jpg'; // Import the image
import pic14Image from './images/4.jpg'; // Import the image
import pic15Image from './images/rajat.jpg'; // Import the image
import pic18Image from './images/rohan.jfif'; // Import the image

const NewsSection = () => {
  return (
    <div
      id="vision-section"
      className="relative py-12 min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(to right, #143151, #B82E75)' }}
    >
      <div className="relative container mx-auto px-4 z-10">
        <h2 className="text-4xl text-yellow-50 font-bold mb-8 text-center">OUR MENTORS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <NewsCard
            image={pic17Image}
            profileImage="https://via.placeholder.com/100"
            creator="Shri Vishnu Deo Sai"
            date="Hon’ble CM Chhattisgarh"
          />
          <NewsCard
            image={pic10Image}
            profileImage="https://via.placeholder.com/100"
            creator="IAS Niharika Barik Singh"
            date="Secretary E & IT Department (Chhattisgarh)"
          />
          <NewsCard
            image={pic12Image}
            profileImage="https://via.placeholder.com/100"
            creator="IAS Ritesh Kumar Agarwal"
            date="Joint Secretary E & IT Department (Chhattisgarh)"
          />
          <NewsCard
            image={pic11Image}
            profileImage="https://via.placeholder.com/100"
            creator="Ms. Lathika Pai"
            date="Country Head, Microsoft - Venture Capital and PE Partnerships; SonderConnect"
          />
          <NewsCard
            image={pic14Image}
            profileImage="https://via.placeholder.com/100"
            creator="Mr. Arjun Vaidya"
            date="Co-Founder, V3 Ventures; Founder, Dr. Vaidya's (acquired)"
          />
          <NewsCard
            image={pic9Image}
            profileImage="https://via.placeholder.com/100"
            creator="Ms. Nupur Verma"
            date="Partnerships, VC & Startups Manager, Google"
          />
          <NewsCard
            image={pic16Image}
            profileImage="https://via.placeholder.com/100"
            creator="Mr. Abhishek Kumar"
            date="Co-Founder, Xoxoday"
          />
          <NewsCard
            image={pic6Image}
            profileImage="https://via.placeholder.com/100"
            creator="Ms. Gunjan Taneja"
            date="Co-Founder, Uclean"
          />
          <NewsCard
            image={pic13Image}
            profileImage="https://via.placeholder.com/100"
            creator="Ms. Kanchan Mishra"
            date="Chief Business Officer, Flipkart Healthplus"
          />
          <NewsCard
            image={pic15Image}
            profileImage="https://via.placeholder.com/100"
            creator="Mr. Rajat Mishra"
            date="Co-founder & CTO, Maytree AI"
          />
          <NewsCard
            image={pic3Image}
            profileImage="https://via.placeholder.com/100"
            creator="Shri Rohit Kashyap"
            date="Founder, Maytree School of Entrepreneurship"
          />
          <NewsCard
            image={pic18Image}
            profileImage="https://via.placeholder.com/100"
            creator="Shri Rohan Singh"
            date="Founder & Ex CPO MagTapp."
          />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
