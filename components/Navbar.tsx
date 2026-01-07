import React, { useState, useEffect } from 'react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/60 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
           {/* Logo Image with Safe Fallback */}
           {!logoError ? (
             <img 
               src="https://i.imgur.com/aNq9a0v.png" 
               alt="THE AWESOME" 
               className="h-8 md:h-10 object-contain filter brightness-0 invert" 
               onError={() => setLogoError(true)}
             />
           ) : (
             <span className="text-xl font-display font-bold tracking-tight">THE AWESOME</span>
           )}
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">철학</a>
          <a href="#services" className="hover:text-white transition-colors">역량</a>
          <a href="#lab" className="hover:text-white transition-colors">AI 연구소</a>
          <a href="#work" className="hover:text-white transition-colors">프로젝트</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex text-xs px-4 py-2">
            문의하기
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;