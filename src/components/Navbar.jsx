import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GradientButton from './GradientButton';
import BrochurePDF from './images/pdf.pdf'; // Import the PDF file
import DownloadPopup from './DownloadPopup'; // Import the DownloadPopup component

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleMentorsClick = () => {
    const MentorsSection = document.getElementById('Mentors-section');
    if (MentorsSection) {
      MentorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVisionClick = () => {
    const visionSection = document.getElementById('vision-section');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactUsClick = () => {
    const contactUsSection = document.getElementById('contact-us-section');
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: 'smooth' });
    }
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
            <Link to="/">INNOVATE HER</Link>
          </h1>
        </div>
        {/* Right Side - Desktop View */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-green-300">Home</Link>
          <Link to="/about-us" className="hover:text-green-300">About Us</Link>
          <Link to="/vision" className="hover:text-green-300">Vision</Link>
          <Link to="/mission" className="hover:text-green-300">Offerings</Link>
          <Link to="/Blog" className="hover:text-green-300">36INC</Link>
          <Link to="/contactus" className="hover:text-green-300">Contact us</Link>
        {/*<button onClick={handleDownloadBrochure} className="hover:text-green-300">Download Brochure</button>*/}  
          <GradientButton />
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
            <li><Link to="/" className="block px-4 py-2 hover:text-green-300">Home</Link></li>
            <li><Link to="/about-us" className="block px-4 py-2 hover:text-green-300">About Us</Link></li>
            <li><Link to="/mission" className="block px-4 py-2 hover:text-green-300">Offerings</Link></li>
            <li><Link to="/Blog" className="block px-4 py-2 hover:text-green-300">36INC</Link></li>
            <li><Link to="/vision" className="block px-4 py-2 hover:text-green-300">Vision</Link></li>
            <li><Link to="/contactus" className="block px-4 py-2 hover:text-green-300">Contact us</Link></li>
           {/*<li><button onClick={handleDownloadBrochure} className="block px-4 py-2 hover:text-green-300">Download Brochure</button></li> */ }
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
