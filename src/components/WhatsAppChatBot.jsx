import { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Users, Clock, Headphones } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  // Your WhatsApp number
  const whatsappNumber = '917696664161';

  // Show widget after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

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
      message: 'Hi, I want to know about your dance/fashion classes and pricing'
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      text: 'Get a quote',
      message: 'Hi, please send me a detailed quote for your classes'
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: 'Class schedules',
      message: 'Hi, I need information about class schedules and timings'
    },
    {
      icon: <Headphones className="w-4 h-4" />,
      text: 'Customer support',
      message: 'Hi, I need help with registration or have questions'
    }
  ];

  return (
    <>
      {/* Enhanced Chat Button - Following your existing pattern */}
      <div className={`fixed bottom-4 right-4 z-50 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        <button
          onClick={toggleChat}
          className={`relative group w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 ${
            isOpen 
              ? 'bg-gradient-to-br from-red-400 via-red-500 to-pink-500 shadow-red-400/50' 
              : 'bg-[#25D366] hover:bg-[#20BA5A] shadow-green-400/50 hover:shadow-green-400/70'
          }`}
        >
          {/* Animated pulse ring */}
          <div className={`absolute inset-0 rounded-full ${isOpen ? 'bg-red-300' : 'bg-green-300'} opacity-75 animate-ping`}></div>
          <div className={`absolute inset-0 rounded-full ${isOpen ? 'bg-red-300' : 'bg-green-300'} opacity-50 animate-ping`} style={{ animationDelay: '1s' }}></div>
          
          {/* Icon */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            {isOpen ? (
              <X className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform duration-300" />
            ) : (
              // Real WhatsApp Logo
              <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
              </svg>
            )}
          </div>
          
          {/* Notification badge */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">1</span>
            </div>
          )}
        </button>
      </div>

      {/* Enhanced Chat Dialog - Following your mobile-first design */}
      <div
        className={`fixed z-40 transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }
        
        /* Mobile: Full screen overlay */
        inset-0 bg-black bg-opacity-50 backdrop-blur-sm
        
        /* Tablet and up: Card positioning */
        md:inset-auto md:bg-transparent md:backdrop-blur-none
        md:bottom-20 md:right-4 md:w-96 md:h-auto
        
        /* Large desktop */
        lg:right-6 lg:w-96
        `}
      >
        <div 
          className={`w-full h-full bg-white transition-all duration-500 ease-out transform ${
            isOpen 
              ? 'translate-y-0 scale-100' 
              : 'translate-y-full md:translate-y-8 scale-95'
          }
          
          /* Mobile: Full screen */
          md:h-auto md:max-h-[600px] md:rounded-2xl md:shadow-2xl
          
          /* Card shadow and border */
          md:border md:border-gray-200 md:shadow-green-400/20
          
          flex flex-col overflow-hidden
          `}
        >
          {/* Header with WhatsApp branding */}
          <div className="relative bg-[#25D366] text-white p-4 md:p-5">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full transform -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full transform translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Chat with us</h3>
                    <div className="flex items-center text-sm text-green-100">
                      <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                      Online now
                    </div>
                  </div>
                </div>
                
                {/* Close button - Enhanced visibility */}
                <button
                  onClick={toggleChat}
                  className="w-10 h-10 bg-white bg-opacity-30 hover:bg-opacity-50 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg border-2 border-white border-opacity-50"
                >
                  <X className="w-6 h-6 text-white font-bold" />
                </button>
              </div>
              
              <p className="text-sm text-green-100">
                We typically reply instantly on WhatsApp
              </p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="bg-gradient-to-b from-green-50 to-white p-4 border-b border-gray-100">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm border border-gray-200 flex-1">
                <p className="text-sm text-gray-800 font-medium mb-1">Hello there!</p>
                <p className="text-sm text-gray-600">How can we help you today? Choose from the options below or send us a custom message.</p>
              </div>
            </div>
          </div>

          {/* Service Options */}
          <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4">
            <div className="space-y-3">
              {serviceOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(option.message)}
                  className="w-full bg-white hover:bg-green-50 rounded-xl p-4 border border-gray-200 
                           transition-all duration-200 flex items-center space-x-3 text-left 
                           hover:shadow-md hover:border-[#25D366] group"
                >
                  <div className="w-10 h-10 bg-green-50 group-hover:bg-[#25D366] rounded-lg flex items-center justify-center text-[#25D366] group-hover:text-white transition-colors">
                    {option.icon}
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-[#25D366]">{option.text}</span>
                </button>
              ))}
            </div>

            {/* Custom Message Input */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <label className="block text-sm font-medium text-[#25D366] mb-2">
                OR SEND CUSTOM MESSAGE
              </label>
              <div className="flex items-center space-x-3 bg-gray-50 rounded-full p-2">
                <input
                  type="text"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && openWhatsApp()}
                  placeholder="Type your message here..."
                  className="flex-1 bg-transparent px-3 py-2 outline-none text-gray-700 placeholder-gray-500 text-sm"
                />
                <button
                  onClick={() => openWhatsApp()}
                  disabled={!customMessage.trim()}
                  className="bg-[#25D366] hover:bg-[#20BA5A] disabled:bg-gray-300 
                           text-white p-2 rounded-full transition-colors duration-200
                           disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-center text-xs text-gray-500 mt-3">
                Powered by WhatsApp Business
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
