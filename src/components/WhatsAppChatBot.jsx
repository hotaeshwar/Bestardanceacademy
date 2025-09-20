import React, { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle, Users, Clock, Headphones, Phone, Bot, Sparkles, Music, Heart, Star, Baby, Sun, Snowflake, Building } from 'lucide-react';

const WhatsAppChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [userResponses, setUserResponses] = useState({});
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Your WhatsApp number
  const whatsappNumber = '917696664161';

  // Show widget after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatHistory]);

  // Add message to chat
  const addMessage = (message, isBot = true, options = null) => {
    setChatHistory(prev => [...prev, {
      id: Date.now(),
      message,
      isBot,
      options,
      timestamp: new Date()
    }]);
  };

  // Simulate typing delay
  const simulateTyping = (callback, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  // Initialize chat
  useEffect(() => {
    if (isOpen && chatHistory.length === 0) {
      simulateTyping(() => {
        addMessage("Hello! Welcome to BeeStar Entertainment! I'm your AI assistant here to help you explore our amazing dance and fashion programs.", true);
        setTimeout(() => {
          addMessage("What brings you here today?", true, [
            { id: 'dance', text: 'Dance Classes', action: () => handleUserChoice('service', 'dance') },
            { id: 'fashion', text: 'Fashion Shows', action: () => handleUserChoice('service', 'fashion') },
            { id: 'both', text: 'Both Services', action: () => handleUserChoice('service', 'both') },
            { id: 'info', text: 'General Info', action: () => handleUserChoice('service', 'info') }
          ]);
        }, 1500);
      }, 500);
    }
  }, [isOpen]);

  // Handle user choices
  const handleUserChoice = (key, value) => {
    setUserResponses(prev => ({ ...prev, [key]: value }));
    addMessage(getChoiceText(key, value), false);

    // Navigate to next step based on choice
    setTimeout(() => {
      if (key === 'service') {
        if (value === 'dance') {
          showDanceOptions();
        } else if (value === 'fashion') {
          showFashionOptions();
        } else if (value === 'both') {
          showBothServicesInfo();
        } else {
          showGeneralInfo();
        }
      } else if (key === 'danceType') {
        askExperienceLevel();
      } else if (key === 'fashionType') {
        askAgeGroup();
      } else if (key === 'experience' || key === 'ageGroup') {
        askContactPreference();
      }
    }, 500);
  };

  const getChoiceText = (key, value) => {
    const choices = {
      service: {
        dance: 'Dance Classes',
        fashion: 'Fashion Shows',
        both: 'Both Services',
        info: 'General Info'
      },
      danceType: {
        hiphop: 'Hip Hop',
        bhangra: 'Bhangra',
        classical: 'Classical',
        bollywood: 'Bollywood',
        freestyle: 'Freestyle',
        popping: 'Popping',
        semiclassical: 'Semi-Classical',
        wedding: 'Wedding Choreography',
        corporate: 'Corporate Events',
        personal: 'Personal Classes',
        home: 'Home Tuitions',
        school: 'School Functions'
      },
      fashionType: {
        kids: 'Kids Fashion Show',
        summer: 'Summer Camp',
        winter: 'Winter Camp',
        government: 'Government Events'
      },
      experience: {
        beginner: 'Complete Beginner',
        intermediate: 'Some Experience',
        advanced: 'Advanced Level'
      },
      ageGroup: {
        kids: 'Kids (5-12 years)',
        teens: 'Teens (13-17 years)',
        adults: 'Adults (18+ years)'
      }
    };
    return choices[key]?.[value] || value;
  };

  const showDanceOptions = () => {
    simulateTyping(() => {
      addMessage("Our dance classes are absolutely amazing! Which style catches your interest?", true, [
        { id: 'hiphop', text: 'Hip Hop', action: () => handleUserChoice('danceType', 'hiphop') },
        { id: 'bhangra', text: 'Bhangra', action: () => handleUserChoice('danceType', 'bhangra') },
        { id: 'classical', text: 'Classical', action: () => handleUserChoice('danceType', 'classical') },
        { id: 'bollywood', text: 'Bollywood', action: () => handleUserChoice('danceType', 'bollywood') },
        { id: 'freestyle', text: 'Freestyle', action: () => handleUserChoice('danceType', 'freestyle') },
        { id: 'popping', text: 'Popping', action: () => handleUserChoice('danceType', 'popping') },
        { id: 'semiclassical', text: 'Semi-Classical', action: () => handleUserChoice('danceType', 'semiclassical') },
        { id: 'wedding', text: 'Wedding Choreography', action: () => handleUserChoice('danceType', 'wedding') },
        { id: 'corporate', text: 'Corporate Events', action: () => handleUserChoice('danceType', 'corporate') },
        { id: 'personal', text: 'Personal Classes', action: () => handleUserChoice('danceType', 'personal') },
        { id: 'home', text: 'Home Tuitions', action: () => handleUserChoice('danceType', 'home') },
        { id: 'school', text: 'School Functions', action: () => handleUserChoice('danceType', 'school') }
      ]);
    });
  };

  const showFashionOptions = () => {
    simulateTyping(() => {
      addMessage("Fashion shows are our specialty! Which program interests you most?", true, [
        { id: 'kids', text: 'Kids Fashion Show', action: () => handleUserChoice('fashionType', 'kids') },
        { id: 'summer', text: 'Summer Camp', action: () => handleUserChoice('fashionType', 'summer') },
        { id: 'winter', text: 'Winter Camp', action: () => handleUserChoice('fashionType', 'winter') },
        { id: 'government', text: 'Government Events', action: () => handleUserChoice('fashionType', 'government') }
      ]);
    });
  };

  const showBothServicesInfo = () => {
    simulateTyping(() => {
      addMessage("We offer comprehensive training in both dance and fashion! Our combined programs give you the complete entertainment experience.", true);
      setTimeout(() => {
        askContactPreference();
      }, 1000);
    });
  };

  const showGeneralInfo = () => {
    simulateTyping(() => {
      addMessage("BeeStar Entertainment has been nurturing talent since 2013! Founded by Shail and Deepa Parki, we offer 12+ Dance Styles, Professional Fashion Shows, Competition Training. Located in Zirakpur, Mon-Sat: 6AM-9PM", true);
      setTimeout(() => {
        askContactPreference();
      }, 1500);
    });
  };

  const askExperienceLevel = () => {
    simulateTyping(() => {
      addMessage("What's your current experience level?", true, [
        { id: 'beginner', text: 'Complete Beginner', action: () => handleUserChoice('experience', 'beginner') },
        { id: 'intermediate', text: 'Some Experience', action: () => handleUserChoice('experience', 'intermediate') },
        { id: 'advanced', text: 'Advanced Level', action: () => handleUserChoice('experience', 'advanced') }
      ]);
    });
  };

  const askAgeGroup = () => {
    simulateTyping(() => {
      addMessage("What age group are we planning for?", true, [
        { id: 'kids', text: 'Kids (5-12 years)', action: () => handleUserChoice('ageGroup', 'kids') },
        { id: 'teens', text: 'Teens (13-17 years)', action: () => handleUserChoice('ageGroup', 'teens') },
        { id: 'adults', text: 'Adults (18+ years)', action: () => handleUserChoice('ageGroup', 'adults') }
      ]);
    });
  };

  const askContactPreference = () => {
    simulateTyping(() => {
      addMessage("Perfect! I'll prepare a personalized message for our team. How would you like to connect?", true, [
        { id: 'whatsapp', text: 'WhatsApp (Instant)', action: () => generateWhatsAppMessage() },
        { id: 'call', text: 'Schedule Call', action: () => generateCallRequest() },
        { id: 'visit', text: 'Visit Studio', action: () => generateVisitRequest() }
      ]);
    }, 1500);
  };

  const generateWhatsAppMessage = () => {
    addMessage('WhatsApp (Instant)', false);
    
    simulateTyping(() => {
      const message = createPersonalizedMessage();
      addMessage(`I've created a personalized message for you. When you click the button below, it will open WhatsApp with this message ready to send:\n\n"${message}"`, true);
      
      setTimeout(() => {
        addMessage("Ready to connect?", true, [
          { 
            id: 'send', 
            text: 'Send WhatsApp Message', 
            action: () => {
              const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
              addMessage('WhatsApp opened! Send the message to connect with our team.', true);
            }
          },
          { id: 'restart', text: 'Start Over', action: () => restartChat() }
        ]);
      }, 1000);
    }, 2000);
  };

  const generateCallRequest = () => {
    addMessage('Schedule Call', false);
    const message = createPersonalizedMessage() + "\n\nI would prefer to schedule a phone call to discuss this further. Please let me know your available times.";
    
    simulateTyping(() => {
      addMessage("I'll send a message requesting a phone call consultation.", true, [
        { 
          id: 'send', 
          text: 'Request Call Back', 
          action: () => {
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            addMessage('Call request sent! Our team will contact you soon.', true);
          }
        }
      ]);
    });
  };

  const generateVisitRequest = () => {
    addMessage('Visit Studio', false);
    const message = createPersonalizedMessage() + "\n\nI would like to visit your studio to see the facilities and meet the team in person. Please let me know the best time to visit.";
    
    simulateTyping(() => {
      addMessage("I'll send a message requesting a studio visit.", true, [
        { 
          id: 'send', 
          text: 'Request Studio Visit', 
          action: () => {
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
            addMessage('Visit request sent! Our team will schedule your studio tour.', true);
          }
        }
      ]);
    });
  };

  const createPersonalizedMessage = () => {
    const { service, danceType, fashionType, experience, ageGroup } = userResponses;
    
    let message = "Hello BeeStar Entertainment Team!\n\n";
    message += "I'm interested in your services and contacted you through your AI assistant. Here are the details of my inquiry:\n\n";

    // Add service details based on customer choices
    if (service === 'dance' && danceType) {
      message += `SERVICE REQUESTED: Dance Classes\n`;
      message += `DANCE STYLE: ${getChoiceText('danceType', danceType)}\n`;
      if (experience) {
        message += `EXPERIENCE LEVEL: ${getChoiceText('experience', experience)}\n`;
      }
    } else if (service === 'fashion' && fashionType) {
      message += `SERVICE REQUESTED: Fashion Shows\n`;
      message += `PROGRAM TYPE: ${getChoiceText('fashionType', fashionType)}\n`;
      if (ageGroup) {
        message += `AGE GROUP: ${getChoiceText('ageGroup', ageGroup)}\n`;
      }
    } else if (service === 'both') {
      message += `SERVICE REQUESTED: Both Dance Classes and Fashion Shows\n`;
      message += `INTEREST: Complete entertainment training program\n`;
    } else if (service === 'info') {
      message += `SERVICE REQUESTED: General Information\n`;
      message += `INQUIRY TYPE: Learn about all your programs and services\n`;
    }

    message += "\nI would like information about:\n";
    message += "• Class schedules and timings\n";
    message += "• Fee structure and available packages\n";
    message += "• Trial class availability\n";
    message += "• Current offers or discounts\n";
    message += "• Enrollment process\n\n";
    
    message += "Please provide me with detailed information about the above mentioned service. I'm looking forward to joining the BeeStar Entertainment family!\n\n";
    message += "Thank you for your time and consideration.";

    return message;
  };

  const restartChat = () => {
    setChatHistory([]);
    setUserResponses({});
    setCurrentStep('welcome');
  };

  return (
    <>
      {/* AI WhatsApp Floating Button */}
      <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 
                      transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl 
                     w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 
                     flex items-center justify-center transform hover:scale-110 
                     transition-all duration-300 animate-pulse-ai"
        >
          {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          ) : (
            <div className="relative">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
              </svg>
              <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
            </div>
          )}
          
          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-bold 
                          w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center animate-bounce">
            AI
          </span>
        </button>

        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white 
                        text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 pointer-events-none">
          AI Assistant Ready to Help
          <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 
                          border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-end p-4 sm:p-6 lg:p-8">
          <div 
            className="absolute inset-0 bg-black bg-opacity-30 lg:bg-transparent"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg 
                          max-h-[85vh] flex flex-col overflow-hidden animate-slide-in border-2 border-purple-200">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 px-5 py-4 text-white flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#25D366]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg flex items-center">
                  BeeStar AI Assistant
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">SMART</span>
                </h3>
                <p className="text-purple-100 text-sm flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                  Dance & Fashion Expert
                </p>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 overflow-y-auto max-h-96">
              <div className="space-y-4">
                {chatHistory.map((chat) => (
                  <div key={chat.id} className={`flex ${chat.isBot ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-[80%] ${
                      chat.isBot 
                        ? 'bg-white border border-purple-100 text-gray-800' 
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    } rounded-xl p-3 shadow-sm`}>
                      <p className="text-sm whitespace-pre-line">{chat.message}</p>
                      
                      {chat.options && (
                        <div className="mt-3 space-y-2">
                          {chat.options.map((option) => (
                            <button
                              key={option.id}
                              onClick={option.action}
                              className="w-full text-left p-3 bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 
                                       rounded-lg border border-purple-200 transition-all duration-200 text-sm
                                       hover:shadow-md hover:scale-[1.02] group"
                            >
                              <span className="text-gray-700 group-hover:text-purple-700">{option.text}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-purple-100 text-gray-800 rounded-xl p-3 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-purple-100">
              <p className="text-center text-xs text-purple-600 flex items-center justify-center">
                <Bot className="w-3 h-3 mr-1" />
                Powered by BeeStar AI Technology
                <Sparkles className="w-3 h-3 ml-1 animate-pulse" />
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .animate-pulse-ai {
          animation: pulseAI 2s infinite;
        }
        
        @keyframes pulseAI {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0.5);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        
        .animate-slide-in {
          animation: slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppChatBot;
