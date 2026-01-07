import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-end pb-32 overflow-hidden">
      {/* Background Spline */}
      <div className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/infinity-0AglOaiuPCeytUJVYdypm05Y/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-110 md:scale-100 pointer-events-auto"
          title="Spline 3D Scene"
        />
        {/* Overlay to ensure text readability if needed, though Spline is usually dark enough */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center pointer-events-none mb-8">
        <div className="pointer-events-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
           <div className="inline-flex rounded-full p-[1px] bg-gradient-to-r from-white/20 via-white/50 to-white/20">
              <button className="bg-black/80 hover:bg-black/50 backdrop-blur-md px-8 py-4 rounded-full text-white font-medium transition-all duration-300">
                경험 시작하기
              </button>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 text-sm">
        스크롤하여 탐색
      </div>
    </div>
  );
};

export default Hero;