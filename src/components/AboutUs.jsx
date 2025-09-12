import React, { useState, useEffect } from 'react';
import videoFile from '../assets/images/BeStar.png';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    students: 0,
    performances: 0,
    domains: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Element is visible when its top is within 80% of viewport height
        const isInView = rect.top <= windowHeight * 0.8 && rect.bottom >= 0;
        
        if (isInView && !isVisible) {
          setIsVisible(true);
          
          // Animate statistics
          const animateNumber = (target, key, duration = 2000) => {
            const start = 0;
            const startTime = Date.now();
            
            const updateNumber = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const current = Math.floor(start + (target - start) * progress);
              
              setAnimatedStats(prev => ({ ...prev, [key]: current }));
              
              if (progress < 1) {
                requestAnimationFrame(updateNumber);
              }
            };
            
            updateNumber();
          };

          // Start animations with different delays
          setTimeout(() => animateNumber(10, 'years'), 500);
          setTimeout(() => animateNumber(500, 'students'), 700);
          setTimeout(() => animateNumber(50, 'performances'), 900);
          setTimeout(() => animateNumber(2, 'domains'), 1100);
        }
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);
  
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header - Always visible */}
        <div className="text-center mb-8 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">BeStar</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Image Section - Always visible */}
          <div className="order-2 lg:order-1">
            <div className="relative group max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-lg xl:max-w-xl">
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl sm:rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl">
                <img
                  src={videoFile}
                  alt="BeeStar Entertainment - Shail and Deepa Parki"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg sm:rounded-xl object-cover shadow-md sm:shadow-lg transform transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 md:space-y-8">
            {/* Our Journey - Always visible */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                Our <span className="text-purple-600">Journey</span>
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 leading-relaxed">
                <span className="font-semibold text-purple-600">Founded in 2013</span>, BeStar Entertainment has been a beacon of creativity and artistic excellence for over a decade. What started as a passionate dream has blossomed into a premier destination for dance and fashion enthusiasts.
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 leading-relaxed">
                Under the visionary leadership of <span className="font-semibold text-pink-600">Shail and Deepa Parki</span>, our studio has nurtured countless talents and transformed lives through the power of dance and fashion.
              </p>
            </div>

            {/* Our Mission - Scroll triggered */}
            <div className={`space-y-3 sm:space-y-4 md:space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                Our <span className="text-pink-600">Mission</span>
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-700 leading-relaxed">
                We believe that <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">every individual has a star within them</span> waiting to shine. Our mission is to provide a nurturing environment where creativity flourishes, confidence builds, and dreams take flight.
              </p>
            </div>

            {/* Core Values - Scroll triggered */}
            <div className={`space-y-3 sm:space-y-4 md:space-y-6 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                Our <span className="text-purple-600">Values</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-purple-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Innovation</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Constantly evolving with <span className="font-semibold">modern techniques</span> and trending styles</p>
                </div>

                <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg border border-pink-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 md:mb-4">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Passion</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Dedicated to nurturing <span className="font-semibold">artistic excellence</span> in every student</p>
                </div>
              </div>
            </div>

            {/* Call to Action - Scroll triggered */}
            <div className={`pt-4 sm:pt-6 md:pt-8 transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl text-white">
                <h4 className="text-lg sm:text-xl md:text-xl font-bold mb-2 sm:mb-2 md:mb-2">Join Our Family</h4>
                <p className="mb-3 sm:mb-4 opacity-90 text-sm sm:text-base">
                  <span className="font-semibold">Discover your potential</span> and be part of our amazing community of artists and performers.
                </p>
                <button className="bg-white text-purple-600 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md sm:rounded-lg text-sm sm:text-base font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Scroll triggered */}
        <div className={`mt-12 sm:mt-16 md:mt-18 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 transition-all duration-1000 transform delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="text-center transform transition-all duration-300 hover:scale-110">
            <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {isVisible ? animatedStats.years : '10'}+
            </div>
            <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Years of <span className="text-purple-600">Excellence</span></div>
          </div>
          
          <div className="text-center transform transition-all duration-300 hover:scale-110">
            <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {isVisible ? animatedStats.students : '500'}+
            </div>
            <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Happy <span className="text-pink-600">Students</span></div>
          </div>
          
          <div className="text-center transform transition-all duration-300 hover:scale-110">
            <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {isVisible ? animatedStats.performances : '50'}+
            </div>
            <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Award Winning <span className="text-purple-600">Performances</span></div>
          </div>
          
          <div className="text-center transform transition-all duration-300 hover:scale-110">
            <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1 sm:mb-2">
              {isVisible ? animatedStats.domains : '2'}
            </div>
            <div className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Specialized <span className="text-pink-600">Domains</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;