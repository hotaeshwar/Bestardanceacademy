import React from 'react';
import beestarImage from '../assets/images/428629782_122148540770072652_8701818441761608521_n.jpg';

const Footer = ({ onDanceClassClick, onFashionClassClick }) => {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Logo and About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative">
                <img
                  src={beestarImage}
                  alt="BeeStar Entertainment"
                  className="h-16 w-auto object-contain bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-white/10"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                  BeeStar Entertainment
                </h3>
                <p className="text-slate-400 text-xs font-medium tracking-wide">SINCE 2013</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-4 max-w-md text-sm">
              Led by <span className="font-bold text-white">Shail and Deepa Parki</span>, we offer premium dance classes and fashion workshops to nurture artistic excellence.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/bestarentertainment.official?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-blue-500/25 group"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-105 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/bestar_entertainmentofficial/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-pink-500/25 group"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-105 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white tracking-tight">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block relative group">
                  <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-4 transition-all duration-300 -translate-y-1/2"></span>
                  <span className="group-hover:ml-6 transition-all duration-300">Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block relative group">
                  <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-4 transition-all duration-300 -translate-y-1/2"></span>
                  <span className="group-hover:ml-6 transition-all duration-300">About Us</span>
                </a>
              </li>
              <li>
                <button onClick={onDanceClassClick} className="text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block relative group">
                  <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-4 transition-all duration-300 -translate-y-1/2"></span>
                  <span className="group-hover:ml-6 transition-all duration-300">Dance Classes</span>
                </button>
              </li>
              <li>
                <button onClick={onFashionClassClick} className="text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block relative group">
                  <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 group-hover:w-4 transition-all duration-300 -translate-y-1/2"></span>
                  <span className="group-hover:ml-6 transition-all duration-300">Fashion Classes</span>
                </button>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block relative group">
                  <span className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-4 transition-all duration-300 -translate-y-1/2"></span>
                  <span className="group-hover:ml-6 transition-all duration-300">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white tracking-tight">Contact Info</h4>
            
            {/* Address */}
            <div className="mb-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-slate-300 text-xs leading-relaxed">
                  <p>2nd Floor SCO 05, Above J&K Bank</p>
                  <p className="text-white font-medium">VIP Road Block B, Zirakpur</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-slate-300 text-xs">
                  <p>+91 98721 14161 • +91 81463 04161</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-slate-300 text-xs">bestar5678@gmail.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-300 text-xs"><span className="text-white font-medium">Mon-Sat:</span> 6AM - 9PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/30 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-xs">
                © {new Date().getFullYear()} BeStar Entertainment. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Founded in 2013 by Shail and Deepa Parki
              </p>
            </div>
            
            <div className="flex space-x-6 text-xs">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;