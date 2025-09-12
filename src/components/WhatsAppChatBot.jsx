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
      message: 'Hi, I want to know about your dance/fashion services and pricing'
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
    <div style={{ position: 'relative' }}>
      {/* WhatsApp Floating Button - Using inline styles for better control */}
      <div 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0)',
          transition: 'all 0.7s ease',
          pointerEvents: isVisible ? 'auto' : 'none'
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'relative',
            backgroundColor: '#25D366',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            animation: isVisible ? 'pulse 2s infinite' : 'none',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#20BA5A';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#25D366';
            e.target.style.transform = 'scale(1)';
          }}
        >
          {isOpen ? (
            <X style={{ width: '28px', height: '28px', color: 'white' }} />
          ) : (
            // Real WhatsApp Logo
            <svg
              style={{ width: '32px', height: '32px', color: 'white' }}
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
            </svg>
          )}
          
          {/* Notification Badge */}
          <span 
            style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: '#ff4444',
              color: 'white',
              fontSize: '12px',
              fontWeight: 'bold',
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            !
          </span>
        </button>

        {/* Hover Tooltip */}
        <div 
          style={{
            position: 'absolute',
            bottom: '100%',
            right: '0',
            marginBottom: '12px',
            padding: '8px 12px',
            backgroundColor: '#333',
            color: 'white',
            fontSize: '14px',
            borderRadius: '8px',
            whiteSpace: 'nowrap',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          }}
          className="tooltip"
        >
          Need help? Chat with us
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10000,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            padding: '20px',
          }}
        >
          {/* Mobile Backdrop */}
          <div 
            onClick={() => setIsOpen(false)}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}
          />

          {/* Chat Container */}
          <div 
            style={{
              position: 'relative',
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              width: '100%',
              maxWidth: '400px',
              maxHeight: '600px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              animation: 'slideIn 0.4s ease-out',
            }}
          >
            {/* Header */}
            <div 
              style={{
                backgroundColor: '#25D366',
                padding: '20px',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{ position: 'relative' }}>
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    style={{ width: '28px', height: '28px', color: '#25D366' }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.386"/>
                  </svg>
                </div>
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    right: '-4px',
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#4ade80',
                    borderRadius: '50%',
                    border: '2px solid white',
                  }}
                />
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{ fontWeight: '600', fontSize: '18px', margin: 0 }}>Customer Support</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#dcfce7', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', backgroundColor: '#4ade80', borderRadius: '50%', marginRight: '8px' }}></div>
                  Online now
                </p>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '8px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  color: 'white',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#20BA5A'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <X style={{ width: '20px', height: '20px' }} />
              </button>
            </div>

            {/* Chat Body */}
            <div style={{ flex: 1, padding: '20px', backgroundColor: '#f9fafb', overflowY: 'auto' }}>
              
              {/* Welcome Message */}
              <div 
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  border: '1px solid #e5e7eb',
                  marginBottom: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div 
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#25D366',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '4px',
                    }}
                  >
                    <MessageCircle style={{ width: '16px', height: '16px', color: 'white' }} />
                  </div>
                  <div>
                    <p style={{ color: '#1f2937', fontWeight: '500', margin: '0 0 4px 0' }}>Hello there!</p>
                    <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5', margin: 0 }}>
                      How can we assist you today? Choose from the options below or send us a custom message.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {serviceOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => openWhatsApp(option.message)}
                    style={{
                      width: '100%',
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      padding: '16px',
                      border: '1px solid #e5e7eb',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#f9fafb';
                      e.target.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                      e.target.style.borderColor = '#25D366';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.boxShadow = 'none';
                      e.target.style.borderColor = '#e5e7eb';
                    }}
                  >
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#f0fdf4',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#25D366',
                      }}
                    >
                      {option.icon}
                    </div>
                    <span style={{ color: '#374151', fontWeight: '500' }}>{option.text}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div style={{ padding: '20px', backgroundColor: 'white', borderTop: '1px solid #e5e7eb' }}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '24px',
                  padding: '8px',
                }}
              >
                <input
                  type="text"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && openWhatsApp()}
                  placeholder="Type your message here..."
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    padding: '8px 12px',
                    outline: 'none',
                    border: 'none',
                    color: '#374151',
                    fontSize: '14px',
                  }}
                />
                <button
                  onClick={() => openWhatsApp()}
                  disabled={!customMessage.trim()}
                  style={{
                    backgroundColor: customMessage.trim() ? '#25D366' : '#d1d5db',
                    color: 'white',
                    padding: '8px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: customMessage.trim() ? 'pointer' : 'not-allowed',
                    transition: 'background-color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => {
                    if (customMessage.trim()) {
                      e.target.style.backgroundColor = '#20BA5A';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (customMessage.trim()) {
                      e.target.style.backgroundColor = '#25D366';
                    }
                  }}
                >
                  <Send style={{ width: '20px', height: '20px' }} />
                </button>
              </div>
              <p style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', margin: '12px 0 0 0' }}>
                Powered by WhatsApp Business
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse {
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

        button:hover .tooltip {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppChatBot;
