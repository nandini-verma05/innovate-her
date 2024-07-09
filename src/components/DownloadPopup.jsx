import React from 'react';

const DownloadPopup = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-lg shadow-xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Download Brochure</h2>
        <p className="text-lg mb-6 text-white">Learn more about women empowerment and our initiatives.</p>
        <div className="flex flex-col gap-4">
          <button onClick={onConfirm} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
            Download PDF
          </button>
          <button onClick={onClose} className="text-sm text-gray-300 hover:text-gray-400 focus:outline-none">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadPopup;