import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import danceImage from '../assets/images/428629782_122148540770072652_8701818441761608521_n.jpg';

const RegistrationModal = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    age: '',
    address: '',
    state: '',
    participation: '',
    groupname: '',
    email: '',
    contact: ''
  });
  const [isSubmittingRegistration, setIsSubmittingRegistration] = useState(false);
  const [registrationSubmitStatus, setRegistrationSubmitStatus] = useState('');
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Show modal immediately for testing, then add proper logic later
  useEffect(() => {
    console.log('RegistrationModal mounted');
    
    // Clear localStorage and show modal after 2 seconds
    localStorage.removeItem('hasSeenRegistration');
    
    setTimeout(() => {
      console.log('Showing registration modal');
      setShowRegistrationModal(true);
    }, 2000);
    
  }, []);

  // Check if user has started filling the form
  useEffect(() => {
    const hasFormData = Object.values(registrationData).some(value => value.trim() !== '');
    setIsUserInteracting(hasFormData);
  }, [registrationData]);

  // Auto-close modal after 8 seconds only if user is not interacting
  useEffect(() => {
    let autoCloseTimer;
    
    if (showRegistrationModal && !isUserInteracting) {
      autoCloseTimer = setTimeout(() => {
        setShowRegistrationModal(false);
        localStorage.setItem('hasSeenRegistration', 'true');
        setRegistrationSubmitStatus('');
      }, 8000); // 8 seconds
    }

    return () => {
      if (autoCloseTimer) {
        clearTimeout(autoCloseTimer);
      }
    };
  }, [showRegistrationModal, isUserInteracting]);

  const handleRegistrationInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateCustomerUUID = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const closeRegistrationModal = () => {
    setShowRegistrationModal(false);
    localStorage.setItem('hasSeenRegistration', 'true');
    setRegistrationSubmitStatus('');
  };

  const handleRegistrationSubmit = async () => {
    if (!registrationData.name || !registrationData.age || !registrationData.email || !registrationData.contact || !registrationData.participation) {
      setRegistrationSubmitStatus('error');
      return;
    }

    setIsSubmittingRegistration(true);
    setRegistrationSubmitStatus('');

    try {
      const customerUUID = generateCustomerUUID();
      
      const formElement = document.createElement('form');
      formElement.action = 'https://formsubmit.co/bestar5678@gmail.com';
      formElement.method = 'POST';
      formElement.style.display = 'none';

      const fields = {
        'Registration ID': customerUUID,
        'Name': registrationData.name,
        'Age': registrationData.age,
        'Address': registrationData.address || 'Not provided',
        'State': registrationData.state || 'Not provided',
        'Participation Type': registrationData.participation,
        'Group Name': registrationData.groupname || 'Not applicable',
        'Email': registrationData.email,
        'Contact Number': registrationData.contact,
        'Registration Date': new Date().toLocaleString(),
        '_subject': `The Star Dance Championship Registration - ID: ${customerUUID}`,
        '_next': window.location.href,
        '_captcha': 'false'
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        formElement.appendChild(input);
      });

      document.body.appendChild(formElement);
      formElement.submit();

      setTimeout(() => {
        if (document.body.contains(formElement)) {
          document.body.removeChild(formElement);
        }
      }, 1000);

      setRegistrationSubmitStatus('success');
      
      setTimeout(() => {
        setRegistrationData({
          name: '',
          age: '',
          address: '',
          state: '',
          participation: '',
          groupname: '',
          email: '',
          contact: ''
        });
        setRegistrationSubmitStatus('');
        closeRegistrationModal();
      }, 3000);

    } catch (error) {
      console.error('Error submitting registration:', error);
      setRegistrationSubmitStatus('error');
    } finally {
      setIsSubmittingRegistration(false);
    }
  };

  return (
    <>
      {showRegistrationModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeRegistrationModal}
              className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="p-4 sm:p-6">
              {/* Header */}
              <div className="text-center mb-4">
                {/* YOUR DANCE IMAGE - FINALLY! */}
                <div className="mb-3">
                  <img 
                    src={danceImage} 
                    alt="The Star Dance Championship" 
                    className="w-16 h-16 object-cover rounded-full mx-auto shadow-lg border-4 border-purple-200"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  The Star Dance Championship
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  Join BeeStar Entertainment - Limited Time Offer
                </p>
                <p className="text-xs text-red-600 font-semibold">
                  Event Date: November 2nd, 2025 - Registration closes on September 30th
                </p>
              </div>

              {/* Registration Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="reg-name" className="block text-xs font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="reg-name"
                      name="name"
                      value={registrationData.name}
                      onChange={handleRegistrationInputChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-age" className="block text-xs font-medium text-gray-700 mb-1">
                      Age <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="reg-age"
                      name="age"
                      value={registrationData.age}
                      onChange={handleRegistrationInputChange}
                      required
                      min="5"
                      max="80"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Your age"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reg-address" className="block text-xs font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <textarea
                    id="reg-address"
                    name="address"
                    value={registrationData.address}
                    onChange={handleRegistrationInputChange}
                    rows="2"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                    placeholder="Your complete address"
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="reg-state" className="block text-xs font-medium text-gray-700 mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      id="reg-state"
                      name="state"
                      value={registrationData.state}
                      onChange={handleRegistrationInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="Your state"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-participation" className="block text-xs font-medium text-gray-700 mb-1">
                      Participation Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="reg-participation"
                      name="participation"
                      value={registrationData.participation}
                      onChange={handleRegistrationInputChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    >
                      <option value="">Select type</option>
                      <option value="Solo">Solo</option>
                      <option value="Duet">Duet</option>
                      <option value="Group">Group</option>
                    </select>
                  </div>
                </div>

                {(registrationData.participation === 'Duet' || registrationData.participation === 'Group') && (
                  <div>
                    <label htmlFor="reg-groupname" className="block text-xs font-medium text-gray-700 mb-1">
                      {registrationData.participation === 'Duet' ? 'Partner Name' : 'Group Name'}
                    </label>
                    <input
                      type="text"
                      id="reg-groupname"
                      name="groupname"
                      value={registrationData.groupname}
                      onChange={handleRegistrationInputChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder={registrationData.participation === 'Duet' ? 'Partner name' : 'Your group name'}
                    />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="reg-email" className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="reg-email"
                      name="email"
                      value={registrationData.email}
                      onChange={handleRegistrationInputChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="reg-contact" className="block text-xs font-medium text-gray-700 mb-1">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="reg-contact"
                      name="contact"
                      value={registrationData.contact}
                      onChange={handleRegistrationInputChange}
                      required
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      placeholder="+91 98721 14161"
                    />
                  </div>
                </div>

                {/* Submit Status */}
                {registrationSubmitStatus && (
                  <div className={`p-3 rounded-lg text-sm ${
                    registrationSubmitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {registrationSubmitStatus === 'success' 
                      ? 'Registration submitted successfully! We will contact you soon.'
                      : 'Please fill in all required fields and try again.'
                    }
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleRegistrationSubmit}
                  disabled={isSubmittingRegistration || !registrationData.name || !registrationData.age || !registrationData.email || !registrationData.contact || !registrationData.participation}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-bold text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmittingRegistration ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Register Now'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your information is secure and will be sent directly to BeeStar Entertainment.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationModal;