import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Users, Clock, Headphones, Phone } from 'lucide-react';

const WhatsAppChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Your WhatsApp number
  const whatsappNumber = '917696664161';

  // Show widget after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = (message = '') => {
    const text = message || customMessage;
    if (text.trim()) {
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      setCustomMessage('');
      setIsOpen(false);
    }
  };

  const serviceOptions = [
    {
      icon: <Users className="w-4 h-4" />,
      text: 'Tell me about your services',
      message: 'Hi, I want to know about your services and pricing'
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      text: 'Get a quote',
      message: 'Hi, please send me a detailed quote for your services'
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: 'Product information',
      message: 'Hi, I need more information about your products'
    },
    {
      icon: <Headphones className="w-4 h-4" />,
      text: 'Customer support',
      message: 'Hi, I need help with customer support'
    }
  ];

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50 
                      transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl 
                     w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 
                     flex items-center justify-center transform hover:scale-110 
                     transition-all duration-300 animate-pulse-green"
        >
          {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          ) : (
            // Real WhatsApp Logo
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
            </svg>
          )}
          
          {/* Notification Badge */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold 
                          w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center">
            !
          </span>
        </button>

        {/* Hover Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 text-white 
                        text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 pointer-events-none">
          Need help? Chat with us
          <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 
                          border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-end justify-end p-4 sm:p-6 lg:p-8">
          
          {/* Mobile Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-30 lg:bg-transparent"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg 
                          max-h-[85vh] flex flex-col overflow-hidden animate-slide-in">
            
            {/* Header */}
            <div className="bg-[#25D366] px-5 py-4 text-white flex items-center space-x-4">
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
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Customer Support</h3>
                <p className="text-green-100 text-sm flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-2"></div>
                  Online now
                </p>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-green-600 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-5 bg-gray-50 overflow-y-auto">
              
              {/* Welcome Message */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-5">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium mb-1">Hello there!</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      How can we assist you today? Choose from the options below or send us a custom message.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Options */}
              <div className="space-y-3">
                {serviceOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => openWhatsApp(option.message)}
                    className="w-full bg-white hover:bg-gray-50 rounded-xl p-4 border border-gray-200 
                             transition-all duration-200 flex items-center space-x-3 text-left 
                             hover:shadow-md hover:border-[#25D366]"
                  >
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-[#25D366]">
                      {option.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{option.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-5 bg-white border-t border-gray-100">
              <div className="flex items-center space-x-3 bg-gray-50 rounded-full p-2">
                <input
                  type="text"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && openWhatsApp()}
                  placeholder="Type your message here..."
                  className="flex-1 bg-transparent px-3 py-2 outline-none text-gray-700 placeholder-gray-500"
                />
                <button
                  onClick={() => openWhatsApp()}
                  disabled={!customMessage.trim()}
                  className="bg-[#25D366] hover:bg-[#20BA5A] disabled:bg-gray-300 
                           text-white p-2 rounded-full transition-colors duration-200
                           disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-center text-xs text-gray-500 mt-3">
                Powered by WhatsApp Business
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .animate-pulse-green {
          animation: pulseGreen 2s infinite;
        }
        
        @keyframes pulseGreen {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
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
