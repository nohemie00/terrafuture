import React, { useEffect, useState } from 'react';

const ProjectReferences = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('project-references');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      title: "AX 메타버스 플랫폼",
      description: "몰입형 가상 공간에서의 인터랙티브 경험 플랫폼",
      category: "METAVERSE",
      image: "🌐",
      delay: "0s"
    },
    {
      title: "AX 수족관",
      description: "AI 기반 해양 생물 인터랙티브 전시 시스템",
      category: "INTERACTIVE",
      image: "🐠",
      delay: "0.2s"
    },
    {
      title: "IP 반응형 대화 시스템",
      description: "캐릭터 IP와 실시간 음성 상호작용 솔루션",
      category: "AI VOICE",
      image: "🎤",
      delay: "0.4s"
    },
    {
      title: "기타 레퍼런스",
      description: "다양한 미디어 아트 및 인터랙티브 설치 프로젝트",
      category: "VARIOUS",
      image: "✨",
      delay: "0.6s"
    }
  ];

  return (
    <section id="project-references" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-secondary to-black opacity-80"></div>
        <div className="absolute inset-0 grid-overlay opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-20 fade-in ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-display font-tech font-bold text-white mb-6">
            PROJECT
            <span className="text-pink block">REFERENCES</span>
          </h2>
          <div className="w-24 h-1 bg-pink mx-auto mb-8"></div>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            혁신적인 기술로 구현한 다양한 인터랙티브 미디어 아트 프로젝트
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group cursor-pointer fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: project.delay }}
            >
              {/* Project Card */}
              <div className="card-modern p-6 h-full hover-lift group-hover:border-pink transition-all duration-500">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-pink text-black text-xs font-tech font-bold tracking-wider rounded-full mb-4">
                  {project.category}
                </div>

                {/* Project Image/Icon */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink/20 to-transparent border border-pink/30 rounded-lg flex items-center justify-center text-4xl mb-4 group-hover:border-pink transition-all duration-300 animate-float">
                    {project.image}
                  </div>
                </div>

                {/* Project Info */}
                <div className="text-center">
                  <h3 className="text-xl font-tech font-bold text-white mb-3 group-hover:text-pink transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white leading-relaxed text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={`text-center mt-16 fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.8s' }}>
          <div className="mb-8">
            <p className="text-lg text-accent mb-6">
              더 많은 프로젝트를 확인하고 싶으신가요?
            </p>
            <button className="btn-primary mr-4">
              전체 프로젝트 보기
            </button>
            <button className="btn-modern">
              프로젝트 의뢰하기
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-8 h-8 border border-pink/30 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-10 right-10 w-6 h-6 bg-pink/20 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-4 h-4 border border-pink/50 rotate-45 animate-float hidden lg:block" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default ProjectReferences; 
