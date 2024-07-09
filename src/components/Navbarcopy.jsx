import React, { useState, useEffect } from 'react';
import GradientButton from './GradientButton';
import BrochurePDF from './images/U.pdf'; // Import the PDF file
import DownloadPopup from './DownloadPopup'; // Import the DownloadPopup component

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleSpeakersClick = () => {
    // Scroll logic
  };

  const handleVisionClick = () => {
    // Scroll logic
  };

  const handleContactUsClick = () => {
    // Scroll logic
  };

  const handleAboutUsClick = () => {
    // Scroll logic
  };

  const handleAboutUsSectionClick = () => {
    // Scroll logic
  };

  const handleDownloadBrochure = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleConfirmDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = BrochurePDF;
    anchor.download = 'brochure.pdf';
    anchor.click();
    setShowPopup(false);
  };

  return (
    <nav
      style={{
        background: isTransparent ? 'rgba(20, 49, 81, 0.8)' : 'linear-gradient(to right, #143151, #B82E75)',
      }}
      className="text-white py-4 shadow-lg sticky top-0 z-50 border-b border-gray-800"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-2xl font-bold text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
            INNOVATE HER
          </h1>
        </div>
        {/* Right Side - Desktop View */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={handleSpeakersClick} className="hover:text-green-300">Speakers</button>
          <button onClick={handleVisionClick} className="hover:text-green-300">Vision</button>
          <button onClick={handleContactUsClick} className="hover:text-green-300">Contact Us</button>
          <button onClick={handleAboutUsClick} className="hover:text-green-300">About Us</button>
          <button onClick={handleAboutUsSectionClick} className="hover:text-green-300">Team</button>
          <GradientButton />
          <button onClick={handleDownloadBrochure} className="hover:text-green-300">Download Brochure</button>
        </div>
        {/* Right Side - Mobile View */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="outline-none mobile-menu-button"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <ul className="bg-black text-white border-t border-gray-800">
            <li><button onClick={handleSpeakersClick} className="block px-4 py-2 hover:text-blue-500">Speakers</button></li>
            <li><button onClick={handleVisionClick} className="block px-4 py-2 hover:text-blue-500">Vision</button></li>
            <li><button onClick={handleContactUsClick} className="block px-4 py-2 hover:text-blue-500">Contact Us</button></li>
            <li><button onClick={handleAboutUsClick} className="block px-4 py-2 hover:text-blue-500">About Us</button></li>
            <li><button onClick={handleAboutUsSectionClick} className="block px-4 py-2 hover:text-blue-500">Team</button></li>
          </ul>
        </div>
      )}
      {/* Download Popup */}
      {showPopup && (
        <DownloadPopup
          onClose={handleClosePopup}
          onConfirm={handleConfirmDownload}
        />
      )}
    </nav>
  );
};

export default Navbar;