import React, { useState, useEffect } from 'react';
import danceImage from '../assets/images/428629782_122148540770072652_8701818441761608521_n.jpg';

const SwitchTabNavbar = ({ activeTab, setActiveTab }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 96; // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle link click
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    scrollToSection(linkId);
  };

  // Handle tab switch
  const handleTabSwitch = () => {
    setActiveTab(activeTab === 'dance' ? 'fashion' : 'dance');
    setActiveLink('home');
  };

  const danceLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'classes', label: 'DANCE CLASSES' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const fashionLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'classes', label: 'FASHION CLASSES' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const currentLinks = activeTab === 'dance' ? danceLinks : fashionLinks;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={danceImage}
              alt="Be Star Entertainment"
              className="object-contain"
              style={{ 
                height: '80px', 
                width: 'auto',
                background: 'transparent',
                mixBlendMode: 'multiply'
              }}
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {currentLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 transform hover:scale-105 ${
                  activeLink === link.id
                    ? `${activeTab === 'dance' 
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-purple-300/50' 
                        : 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg hover:shadow-pink-300/50'
                      } skew-x-[-10deg] hover:skew-x-[-5deg]`
                    : 'text-gray-700 hover:text-white hover:bg-gray-600 skew-x-[-10deg] hover:skew-x-[-5deg]'
                }`}
                style={{
                  clipPath: activeLink === link.id ? 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' : 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)'
                }}
              >
                <span className="block skew-x-[10deg]">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Switch Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleTabSwitch}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'dance'
                  ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:shadow-lg hover:shadow-pink-300/50'
                  : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-300/50'
              }`}
            >
              SWITCH TO {activeTab === 'dance' ? 'FASHION' : 'DANCE'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            {/* Mobile Tab Switch */}
            <div className="flex justify-center py-4">
              <button
                onClick={() => {
                  handleTabSwitch();
                  setIsMobileMenuOpen(false);
                }}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === 'dance'
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white'
                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'
                }`}
              >
                SWITCH TO {activeTab === 'dance' ? 'FASHION' : 'DANCE'}
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="pb-4">
              {currentLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    handleLinkClick(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-3 text-sm font-bold transition-all duration-300 ${
                    activeLink === link.id
                      ? `${activeTab === 'dance' 
                          ? 'text-purple-600 bg-purple-50 border-l-4 border-purple-600' 
                          : 'text-pink-600 bg-pink-50 border-l-4 border-pink-600'
                        }`
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SwitchTabNavbar;