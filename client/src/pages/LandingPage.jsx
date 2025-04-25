import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import bookhiveLogo from '../assets/bookhive1.png'; // Adjust the path as necessary


const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-indigo-50 to-purple-50 text-gray-800 font-sans">
      
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="flex items-center">
          <img src={bookhiveLogo} alt="Bookhive Logo" className="h-12 w-12 mr-3 rounded-full object-cover" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            BOOKHIVE
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
          <a href="#genres" className="text-gray-600 hover:text-purple-600 transition-colors">Genres</a>
          <a href="#community" className="text-gray-600 hover:text-purple-600 transition-colors">Community</a>
        </nav>
        <button className="md:hidden text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow px-6 py-12">
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-100 transform transition-all hover:shadow-2xl hover:-translate-y-1">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full mb-6 flex items-center justify-center overflow-hidden">
            <img src={bookhiveLogo} alt="Bookhive Logo" className="h-20 w-20 object-contain" />
          </div>
          <p className="text-sm font-medium text-purple-500 mb-2">YOUR PERSONAL LIBRARY</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Discover Your Next Favorite Book</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Organize your collection, explore new genres, and connect with fellow book lovers in our vibrant community.
          </p>
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
            <button className="w-full border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
              Browse Genres
            </button>
          </div>
        </div>

    
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-200 py-6 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} BookHive. All rights reserved.</p>
          </div>
          <div className="flex space-x-5 text-gray-500">
            <a href="#" className="hover:text-purple-600 transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              <FaEnvelope className="text-xl" />
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              <FaPhone className="text-xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
