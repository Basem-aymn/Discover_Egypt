import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 jura-font">Discover Egypt</h3>
            <p className="text-gray-300 leading-relaxed jura-font">Your ultimate guide to the wonders of Egypt. From ancient pyramids to modern marvels, let us help you create unforgettable memories.</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 jura-font">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors jura-font">Home</a></li>
              <li><a href="/places" className="text-gray-300 hover:text-white transition-colors jura-font">Places</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors jura-font">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors jura-font">Contact</a></li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4 jura-font">Connect With Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-2xl">📘</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-2xl">🐦</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-2xl">📷</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300  jura-font">&copy; 2023 Discover Egypt. All rights reserved.</p>
          <p className="text-gray-400 mt-2  jura-font">Explore the wonders of Egypt with us! 🏛️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
