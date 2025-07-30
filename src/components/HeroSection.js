import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mov" type="video/quicktime" />
          {/* 영상이 로드되지 않을 경우 대체 배경 */}
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 video-overlay">
          <div className="absolute inset-0 grid-overlay opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/60"></div>
          
          {/* Animated particles effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-pink rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-hero font-tech font-black tracking-tight text-white leading-none mb-4 holographic-text">
              TERRAFUTURE
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl font-primary font-light text-secondary tracking-wide leading-relaxed">
              몰입을 설계하는 AX 솔루션 그룹
            </p>
          </div>
          
          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg md:text-xl font-light text-white tracking-wide leading-relaxed">
              AI 기반 인터랙티브 콘텐츠 • AR/VR 메타버스 • 몰입형 전시 공간 설계
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#project-references" className="btn-primary">
              프로젝트 보기
            </a>
            <a href="#contact" className="btn-modern">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Dots (d'strict style) */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-4">
        {[
          { name: 'HOME', link: '#' },
          { name: 'BUSINESS', link: '#business-areas' },
          { name: 'PROJECTS', link: '#project-references' },
          { name: 'CONTACT', link: '#contact' }
        ].map((item, index) => (
          <a key={item.name} href={item.link} className="flex items-center group cursor-pointer">
            <div className="w-2 h-2 rounded-full border border-pink group-hover:bg-pink transition-all duration-300"></div>
            <span className="ml-4 text-xs text-secondary group-hover:text-pink transition-colors duration-300 font-tech tracking-wider">
              {item.name}
            </span>
          </a>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-xs tracking-widest text-accent uppercase mb-4 font-tech">
          SCROLL DOWN
        </div>
        <div className="w-px h-12 bg-pink mx-auto animate-pulse glow-pink"></div>
      </div>


    </section>
  );
};

export default HeroSection; 
