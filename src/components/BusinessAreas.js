import React, { useEffect, useState } from 'react';

const BusinessAreas = () => {
  const [isVisible, setIsVisible] = useState(true); // 바로 보이도록 true로 설정

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('business-areas');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const businessAreas = [
    {
      title: "AX 콘텐츠 기획 및 제작",
      description: "AI 기반 인터랙티브 콘텐츠, AR/VR, 메타버스 전시 및 교육 콘텐츠, 테마형 영상",
      delay: "0s"
    },
    {
      title: "공간 및 시스템 설계",
      description: "미디어월, IOT 기반 인터랙션 시스템, 몰입형 전시 공간 설계",
      delay: "0.2s"
    },
    {
      title: "영상 소프트웨어 개발",
      description: "인터랙션 제어 시스템, 사용자 맞춤형 콘텐츠 엔진, 데이터 기반 전시 콘텐츠 개발",
      delay: "0.4s"
    }
  ];

  return (
    <section id="business-areas" className="section-padding bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-10"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-display font-tech font-bold text-white mb-6">
            BUSINESS
            <span className="text-pink block">AREAS</span>
          </h2>
          <div className="w-24 h-1 bg-pink mx-auto mb-8"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            혁신적인 기술과 창의적 솔루션으로 몰입형 경험을 설계합니다
          </p>
        </div>

        {/* Business Areas Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {businessAreas.map((area, index) => (
            <div
              key={index}
              className="p-8 hover-lift rounded-lg transition-all duration-300 border hover:border-pink"
              style={{ 
                backgroundColor: '#1a1a1a', 
                borderColor: '#333333'
              }}
            >
              {/* Title */}
              <h3 className="text-2xl font-tech font-bold text-white mb-4 text-center">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-white leading-relaxed text-center mb-6">
                {area.description}
              </p>

              {/* Decorative Line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-pink to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="btn-modern">
            상세 서비스 보기
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 border border-pink rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 left-20 w-6 h-6 border border-pink rounded-full animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default BusinessAreas; 
