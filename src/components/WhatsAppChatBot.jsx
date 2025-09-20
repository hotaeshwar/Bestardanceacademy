import React, { useState, useEffect, useRef } from 'react';
import { X, Send, MessageCircle, Bot, User } from 'lucide-react';

const WhatsAppChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState('initial');
  const [userChoices, setUserChoices] = useState({});
  const chatEndRef = useRef(null);

  // WhatsApp Business configuration - using the same format as reference
  const WHATSAPP_NUMBER = "7696664161";

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isTyping]);

  useEffect(() => {
    if (isOpen && chatHistory.length === 0) {
      setTimeout(() => {
        setChatHistory([{ type: 'bot', text: "Hello! Welcome to BeeStar Entertainment!" }]);
        setTimeout(() => {
          setChatHistory(prev => [...prev, { type: 'bot', text: "I'm here to help you with our dance and fashion programs. What interests you?" }]);
        }, 1000);
      }, 500);
    }
  }, [isOpen]);

  const quickMessages = [
    {
      id: 'dance',
      title: 'Dance Classes',
      message: 'Hello BeeStar Entertainment! I am interested in your dance classes. I would like to know more about:\n\n• Available dance styles (Hip Hop, Bhangra, Classical, Bollywood, etc.)\n• Class schedules and timings\n• Fee structure and packages\n• Trial class availability\n• Current offers and discounts\n\nPlease provide me with detailed information. Thank you!'
    },
    {
      id: 'fashion',
      title: 'Fashion Shows',
      message: 'Hello BeeStar Entertainment! I am interested in your fashion show programs. I would like to know more about:\n\n• Kids Fashion Shows\n• Summer and Winter Camps\n• Government Events\n• Runway training programs\n• Age group requirements\n• Fee structure and packages\n\nPlease provide me with detailed information. Thank you!'
    },
    {
      id: 'wedding',
      title: 'Wedding Choreography',
      message: 'Hello BeeStar Entertainment! I need choreography services for wedding events. I would like to know about:\n\n• Wedding dance choreography\n• Sangeet ceremony performances\n• Couple dance training\n• Group choreography\n• Pricing and packages\n• Available dates\n\nPlease provide me with detailed information. Thank you!'
    },
    {
      id: 'personal',
      title: 'Personal Classes',
      message: 'Hello BeeStar Entertainment! I am interested in personal dance training. I would like to know about:\n\n• One-on-one training sessions\n• Home tuition services\n• Flexible scheduling\n• Personalized curriculum\n• Fee structure\n• Trial sessions\n\nPlease provide me with detailed information. Thank you!'
    },
    {
      id: 'pricing',
      title: 'Pricing & Packages',
      message: 'Hello BeeStar Entertainment! I would like to know about your pricing and packages for:\n\n• Monthly class packages\n• Personal training rates\n• Group discount offers\n• Trial class pricing\n• Payment methods\n• Special offers\n\nPlease share your complete fee structure. Thank you!'
    },
    {
      id: 'studio',
      title: 'Studio Visit',
      message: 'Hello BeeStar Entertainment! I would like to visit your studio. Please provide:\n\n• Studio address: 2nd Floor SCO 05, Above J&K Bank, VIP Road Block B, Zirakpur\n• Operating hours: Mon-Sat 6AM-9PM\n• Best time to visit\n• Facilities available\n• Parking information\n• Contact person details\n\nI look forward to visiting soon. Thank you!'
    }
  ];

  // Function to open WhatsApp with pre-filled message - same as reference
  const openWhatsApp = (selectedMessage) => {
    // Encode the message exactly like the reference
    const encodedMessage = encodeURIComponent(selectedMessage);
    const whatsappURL = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Add confirmation message
    setChatHistory(prev => [...prev, { 
      type: 'bot', 
      text: "Perfect! WhatsApp is opening with your message ready to send. Our team will respond to you shortly!" 
    }]);
    
    // Close chat after delay
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  const handleQuickMessage = (option) => {
    if (option.id === 'custom') {
      setSelectedOption('custom');
      return;
    }

    setChatHistory(prev => [...prev, { type: 'user', text: option.title }]);
    setUserChoices(prev => ({ ...prev, service: option.id }));

    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatHistory(prev => [...prev, { 
          type: 'bot', 
          text: `Great choice! I'll prepare a detailed message for ${option.title}. Click the WhatsApp button below to send your inquiry.` 
        }]);
        setCurrentStep('contact');
        setUserChoices(prev => ({ ...prev, selectedMessage: option.message }));
      }, 1000);
    }, 500);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setChatHistory([]);
      setSelectedOption('');
      setMessage('');
      setCurrentStep('initial');
      setUserChoices({});
    }
  };

  const handleCustomMessage = () => {
    if (!message.trim()) return;
    
    setChatHistory(prev => [...prev, { type: 'user', text: message }]);
    
    const customWhatsAppMessage = `Hello BeeStar Entertainment!\n\n${message}\n\nPlease provide me with detailed information about your services.\n\nThank you!`;
    
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatHistory(prev => [...prev, { type: 'bot', text: "Thank you for your message! I'll prepare it for WhatsApp." }]);
        setCurrentStep('contact');
        setUserChoices(prev => ({ ...prev, selectedMessage: customWhatsAppMessage }));
      }, 1000);
    }, 500);
    
    setMessage('');
    setSelectedOption('');
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 relative"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
          
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
            </svg>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 max-w-[calc(100vw-2rem)]">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">BeeStar Assistant</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  <p className="text-sm text-green-100">Online now</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-1 hover:bg-green-600 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="p-4 h-96 overflow-y-auto bg-gray-50">
              <div className="space-y-3">
                {chatHistory.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-green-500 text-white rounded-br-sm' 
                        : 'bg-white text-gray-800 rounded-bl-sm shadow-sm border'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{msg.text}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-2xl rounded-bl-sm shadow-sm border px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Quick Action Buttons */}
              {selectedOption !== 'custom' && chatHistory.length >= 2 && currentStep === 'initial' && (
                <div className="space-y-2 mt-4">
                  {quickMessages.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleQuickMessage(option)}
                      className="w-full text-left p-3 bg-white hover:bg-green-50 rounded-xl transition-all duration-200 text-sm border border-gray-200 hover:border-green-300"
                    >
                      <span className="font-medium">{option.title}</span>
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedOption('custom')}
                    className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-200 text-sm border border-blue-200"
                  >
                    <span className="font-medium">Type Custom Message</span>
                  </button>
                </div>
              )}

              {/* WhatsApp Button */}
              {currentStep === 'contact' && userChoices.selectedMessage && (
                <div className="mt-4">
                  <button
                    onClick={() => openWhatsApp(userChoices.selectedMessage)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
                    </svg>
                    Send Message on WhatsApp
                  </button>
                </div>
              )}
            </div>

            {/* Custom Message Input */}
            {selectedOption === 'custom' && (
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="space-y-3">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none"
                    autoFocus
                  />
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedOption('');
                        setMessage('');
                      }}
                      className="flex-1 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors text-sm"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleCustomMessage}
                      disabled={!message.trim()}
                      className="flex-1 py-2 px-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="bg-white px-4 py-3 border-t border-gray-200">
              <div className="text-center">
                <span className="text-xs text-gray-500">
                  BeeStar Entertainment • WhatsApp: +91 76966 64161
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChatBot;
