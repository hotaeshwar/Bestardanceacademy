import React, { useEffect, useState } from 'react';
import './App.css';
import SwitchTabNavbar from './components/SwitchTabNavbar';
import VideoHero from './components/VideoHero';
import AboutUs from './components/AboutUs';
import DanceClass from './components/DanceClass';
import FashionShowClass from './components/FashionShowClass';
import ContactUs from './components/ContactUs';
import RegistrationModal from './components/RegistrationModal';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('dance');

  useEffect(() => {
    // Function to handle smooth scrolling to top of sections
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Get the navbar height for offset (adjust this value based on your navbar height)
          const navbarHeight = 80; // Adjust this value to match your navbar height
          
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Handle initial load with hash
    if (window.location.hash) {
      // Small delay to ensure DOM is fully loaded
      setTimeout(handleHashChange, 100);
    }

    // Listen for hash changes (when clicking nav links)
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup event listener
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Function to handle dance class link click
  const handleDanceClassClick = (e) => {
    e.preventDefault();
    console.log('Dance class clicked'); // Debug log
    setActiveTab('dance');
    
    // Small delay to ensure state update, then scroll
    setTimeout(() => {
      const element = document.getElementById('classes');
      if (element) {
        const navbarHeight = 96; // Match your navbar height
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  // Function to handle fashion class link click
  const handleFashionClassClick = (e) => {
    e.preventDefault();
    console.log('Fashion class clicked'); // Debug log
    setActiveTab('fashion');
    
    // Small delay to ensure state update, then scroll
    setTimeout(() => {
      const element = document.getElementById('classes');
      if (element) {
        const navbarHeight = 96; // Match your navbar height
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="App">
      <RegistrationModal />
      
      <SwitchTabNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Make sure each section has the corresponding id */}
      <section id="home">
        <VideoHero />
      </section>
      
      <section id="about">
        <AboutUs />
      </section>
      
      <section id="classes">
        {activeTab === 'dance' ? <DanceClass /> : <FashionShowClass />}
      </section>
      
      <section id="contact">
        <ContactUs />
      </section>
      
      <Footer 
        onDanceClassClick={handleDanceClassClick}
        onFashionClassClick={handleFashionClassClick}
      />
    </div>
  );
}

export default App;