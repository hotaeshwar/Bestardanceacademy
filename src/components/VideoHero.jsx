import React, { useEffect, useState } from 'react';
import videoFile from '../assets/images/hero-video.mp4';

const VideoHero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const isIPad = (
        (width === 768) || (width === 820) || (width === 834) || (width === 1024) ||
        navigator.userAgent.includes('iPad') || 
        (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)
      );
      setIsSmallScreen(width < 768 && !isIPad);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getContainerHeight = () => {
    if (typeof window === 'undefined') return 'calc(100vh - 96px)';
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const isIPad = (
      (width === 768 && height === 1024) ||
      (width === 820 && height === 1180) ||
      (width === 834 && height === 1194) ||
      (width === 1024 && height === 1366) ||
      (height === 768 && width === 1024) ||
      (height === 820 && width === 1180) ||
      (height === 834 && width === 1194) ||
      (height === 1024 && width === 1366) ||
      (navigator.userAgent.includes('iPad') || 
       (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document))
    );
    
    if (width < 768) {
      return Math.min((height - 96) * 0.6, 500);
    } else if (isIPad) {
      return Math.min(width * 0.5625, (height - 96) * 0.6);
    } else if (width < 1024) {
      return Math.min((height - 96) * 0.7, 600);
    } else {
      return 'calc(100vh - 96px)';
    }
  };

  // Different approach for small screens vs larger screens
  if (isSmallScreen) {
    return (
      <div 
        className="w-full relative bg-black"
        style={{ 
          marginTop: '96px', 
          height: getContainerHeight(),
          minHeight: '300px'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          <video
            src={videoFile}
            style={{
              height: '100%',
              width: 'auto',
              maxWidth: 'none',
              objectFit: 'cover',
              objectPosition: 'center center',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitTransform: 'translateZ(0)',
              WebkitBackfaceVisibility: 'hidden',
            }}
            autoPlay
            muted
            loop
            playsInline
            title="Be Star Entertainment Video"
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/40 to-transparent z-10" />
      </div>
    );
  }

  // For larger screens, use the original approach
  return (
    <div 
      className="w-full overflow-hidden relative" 
      style={{ 
        marginTop: '96px', 
        height: getContainerHeight(),
        minHeight: '400px'
      }}
    >
      <video
        src={videoFile}
        className="w-full h-full"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          objectFit: 'cover',
          objectPosition: 'center center',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitTransform: 'translateZ(0)',
          WebkitBackfaceVisibility: 'hidden',
        }}
        autoPlay
        muted
        loop
        playsInline
        title="Be Star Entertainment Video"
      />

      <div className="absolute bottom-0 left-0 w-full h-1/4 sm:h-1/3 md:h-1/3 lg:h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10" />
    </div>
  );
};

export default VideoHero;
