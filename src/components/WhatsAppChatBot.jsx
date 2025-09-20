import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, Users, Clock, Headphones, Phone, Bot, Sparkles } from 'lucide-react';

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
            // Real WhatsApp Logo with AI glow
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
          
          {/* AI Notification Badge */}
          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-bold 
                          w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center animate-bounce">
            AI
          </span>
        </button>

        {/* Hover Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white 
                        text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 pointer-events-none">
          🤖 AI Assistant Ready to Help
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
                  🤖 AI Assistant
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">SMART</span>
                </h3>
                <p className="text-purple-100 text-sm flex items-center">
                  <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                  Powered by AI • Always Learning
                </p>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-5 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 overflow-y-auto">
              
              {/* Welcome Message */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100 mb-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5"></div>
                <div className="flex items-start space-x-3 relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium mb-1 flex items-center">
                      Hello! I'm your AI Assistant 
                      <Sparkles className="w-4 h-4 text-purple-500 ml-1 animate-pulse" />
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      I'm here to help you 24/7 with intelligent responses. Choose from the smart options below or ask me anything!
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
                    className="w-full bg-white hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-xl p-4 border border-purple-200 
                             transition-all duration-200 flex items-center space-x-3 text-left 
                             hover:shadow-lg hover:border-purple-400 hover:scale-[1.02] group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 group-hover:from-purple-200 group-hover:to-blue-200 rounded-lg flex items-center justify-center text-purple-600 transition-all duration-200">
                      {option.icon}
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-purple-700 transition-colors duration-200">{option.text}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="p-5 bg-white border-t border-purple-100">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-full p-2 border border-purple-200">
                <input
                  type="text"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && openWhatsApp()}
                  placeholder="Ask me anything... I'm smart! 🤖"
                  className="flex-1 bg-transparent px-3 py-2 outline-none text-gray-700 placeholder-gray-500"
                />
                <button
                  onClick={() => openWhatsApp()}
                  disabled={!customMessage.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-400 
                           text-white p-2 rounded-full transition-all duration-200
                           disabled:cursor-not-allowed transform hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-center text-xs text-purple-600 mt-3 flex items-center justify-center">
                <Bot className="w-3 h-3 mr-1" />
                Powered by Advanced AI Technology
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
