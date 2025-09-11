import React, { useState } from 'react';
import { X, Music, Heart, Star, Users, Facebook, Instagram, Zap, Sparkles, Crown, Award, Home, Building2, UserCheck, GraduationCap, Music2, Radio, Wind, Play, RotateCw, Flame, Trophy, Phone } from 'lucide-react';

const DanceClass = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const danceClasses = [
    {
      id: 1,
      name: "Hip Hop",
      icon: <Radio className="w-6 h-6" />,
      description: "Urban street dance with strong beats and energetic movements"
    },
    {
      id: 2,
      name: "Freestyle",
      icon: <Wind className="w-6 h-6" />,
      description: "Express yourself freely with improvised dance movements"
    },
    {
      id: 3,
      name: "Bhangra",
      icon: <Crown className="w-6 h-6" />,
      description: "Traditional Punjabi folk dance full of joy and energy"
    },
    {
      id: 4,
      name: "Popping",
      icon: <RotateCw className="w-6 h-6" />,
      description: "Street dance with quick muscle contractions and robotic movements"
    },
    {
      id: 5,
      name: "Classical",
      icon: <Award className="w-6 h-6" />,
      description: "Traditional Indian classical dance forms with grace and precision"
    },
    {
      id: 6,
      name: "Semi-Classical",
      icon: <Music2 className="w-6 h-6" />,
      description: "Fusion of classical and contemporary dance styles"
    },
    {
      id: 7,
      name: "Bollywood",
      icon: <Sparkles className="w-6 h-6" />,
      description: "Vibrant Indian cinema-inspired dance with storytelling"
    },
    {
      id: 8,
      name: "School Functions",
      icon: <GraduationCap className="w-6 h-6" />,
      description: "Choreography for annual days, competitions, and school events"
    },
    {
      id: 9,
      name: "Wedding Choreography",
      icon: <Heart className="w-6 h-6" />,
      description: "Special choreography for your memorable wedding moments"
    },
    {
      id: 10,
      name: "Corporate Events",
      icon: <Building2 className="w-6 h-6" />,
      description: "Professional choreography for corporate functions and team events"
    },
    {
      id: 11,
      name: "Personal Classes",
      icon: <UserCheck className="w-6 h-6" />,
      description: "One-on-one personalized dance training sessions"
    },
    {
      id: 12,
      name: "Home Tuitions",
      icon: <Home className="w-6 h-6" />,
      description: "Convenient dance lessons at your home"
    }
  ];

  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/bestarentertainment.official?locale=es_ES",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600",
      shadowColor: "hover:shadow-blue-500/25"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/bestar_entertainmentofficial/?hl=en",
      bgColor: "bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500",
      shadowColor: "hover:shadow-pink-500/25"
    }
  ];

  const openClassDetails = (danceClass) => {
    setSelectedClass(danceClass);
  };

  const closeClassDetails = () => {
    setSelectedClass(null);
  };

  const redirectToSocialMedia = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const closeContactModal = () => {
    setShowContactModal(false);
    setSubmitStatus('');
  };

  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateCustomerUUID = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleContactSubmit = async () => {
    if (!contactFormData.name || !contactFormData.email || !contactFormData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const customerUUID = generateCustomerUUID();
      
      const formElement = document.createElement('form');
      formElement.action = 'https://formsubmit.co/bestar5678@gmail.com';
      formElement.method = 'POST';
      formElement.style.display = 'none';

      const fields = {
        'Customer ID': customerUUID,
        'Name': contactFormData.name,
        'Phone': contactFormData.phone || 'Not provided',
        'Email': contactFormData.email,
        'Subject': contactFormData.subject || 'General Inquiry',
        'Message': contactFormData.message,
        'Timestamp': new Date().toLocaleString(),
        '_subject': `New BeeStar Contact - Customer ID: ${customerUUID}`,
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

      setSubmitStatus('success');
      
      setTimeout(() => {
        setContactFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setSubmitStatus('');
        setShowContactModal(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-900">Dance </span>
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">Classes</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your passion for dance with our diverse range of classes
          </p>
        </div>

        {/* Dance Class Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {danceClasses.map((danceClass) => (
            <div
              key={danceClass.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-gray-100"
              onClick={() => openClassDetails(danceClass)}
            >
              {/* Icon Display */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg">
                    {danceClass.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {danceClass.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 line-clamp-2">
                  {danceClass.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm text-purple-600 font-medium">
                    Click for details
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Class Details Modal */}
        {selectedClass && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl">
              {/* Close Button */}
              <button
                onClick={closeClassDetails}
                className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                {/* Class Icon and Title */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                    {React.cloneElement(selectedClass.icon, { className: "w-12 h-12" })}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {selectedClass.name}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {selectedClass.description}
                  </p>
                </div>

                {/* Social Media and Contact Links */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us & Contact</h3>
                  <div className="flex justify-center space-x-4">
                    {socialMediaLinks.map((social) => (
                      <button
                        key={social.name}
                        onClick={() => redirectToSocialMedia(social.url)}
                        className={`w-12 h-12 ${social.bgColor} rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md ${social.shadowColor} group`}
                        aria-label={`Follow us on ${social.name}`}
                      >
                        <div className="text-white group-hover:scale-105 transition-transform duration-300">
                          {social.icon}
                        </div>
                      </button>
                    ))}
                    {/* Contact Us Icon */}
                    <button
                      onClick={openContactModal}
                      className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-green-500/25"
                      aria-label="Contact us about this class"
                      title="Contact Us"
                    >
                      <Phone className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Connect with us for updates and behind-the-scenes content
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Form Modal */}
        {showContactModal && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={closeContactModal}
                className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Contact Us
                  </h2>
                  <p className="text-gray-600">
                    Ready to start your journey? Get in touch with us!
                  </p>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        name="name"
                        value={contactFormData.name}
                        onChange={handleContactInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        name="email"
                        value={contactFormData.email}
                        onChange={handleContactInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="modal-phone"
                        name="phone"
                        value={contactFormData.phone}
                        onChange={handleContactInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        placeholder="+91 98721 14161"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="modal-subject"
                        name="subject"
                        value={contactFormData.subject}
                        onChange={handleContactInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="Dance Classes">Dance Classes</option>
                        <option value="Fashion Workshops">Fashion Workshops</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Collaboration">Collaboration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      value={contactFormData.message}
                      onChange={handleContactInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                      placeholder="Tell us about your interest in our programs..."
                    ></textarea>
                  </div>

                  {/* Submit Status */}
                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {submitStatus === 'success' 
                        ? 'Message sent successfully! We will get back to you soon.'
                        : 'Please fill in all required fields and try again.'
                      }
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleContactSubmit}
                    disabled={isSubmitting || !contactFormData.name || !contactFormData.email || !contactFormData.message}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
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
      </div>
    </div>
  );
};

export default DanceClass;