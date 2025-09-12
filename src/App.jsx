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
    // Apply Tailwind classes to body and html for full width
    document.body.className = 'm-0 p-0 overflow-x-hidden w-full box-border';
    document.documentElement.className = 'm-0 p-0 overflow-x-hidden w-full box-border';
    
    // Apply to root element
    const root = document.getElementById('root');
    if (root) {
      root.className = 'm-0 p-0 w-full box-border';
    }

    // Function to handle smooth scrolling to top of sections
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleDanceClassClick = (e) => {
    e.preventDefault();
    setActiveTab('dance');
    
    setTimeout(() => {
      const element = document.getElementById('classes');
      if (element) {
        const navbarHeight = 96;
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleFashionClassClick = (e) => {
    e.preventDefault();
    setActiveTab('fashion');
    
    setTimeout(() => {
      const element = document.getElementById('classes');
      if (element) {
        const navbarHeight = 96;
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <>
      <RegistrationModal />
      <SwitchTabNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <section id="home" className="m-0 p-0">
        <VideoHero />
      </section>
      
      <div className="App">
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
    </>
  );
}

export default App;