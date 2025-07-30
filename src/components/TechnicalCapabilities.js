import React from 'react';

const TechnicalCapabilities = () => {
  const capabilities = [
    {
      title: "AI 인터랙션 시스템",
      description: "머신러닝과 딥러닝을 활용한 지능형 상호작용 시스템 구축",
      details: ["자연어 처리", "컴퓨터 비전", "실시간 분석"]
    },
    {
      title: "얼굴/제스처/감정 인식",
      description: "사용자의 생체신호와 행동 패턴을 실시간으로 분석하는 기술",
      details: ["얼굴 인식", "제스처 감지", "감정 분석"]
    },
    {
      title: "미디어월 + IoT 연동",
      description: "대형 디스플레이와 IoT 기기를 통합한 몰입형 공간 연출",
      details: ["멀티스크린 제어", "센서 연동", "실시간 동기화"]
    },
    {
      title: "Unity/WebXR/TouchDesigner",
      description: "다양한 플랫폼과 도구를 활용한 인터랙티브 콘텐츠 제작",
      details: ["3D 렌더링", "WebXR 개발", "비주얼 프로그래밍"]
    }
  ];

  const techStack = [
    "Unity 3D", "WebXR", "TouchDesigner", "TensorFlow", "OpenCV", "Arduino/Raspberry Pi"
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="serif-font text-5xl md:text-6xl font-light text-black mb-8 tracking-tight">
            주요 기술 역량
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            첨단 기술과 창의적 아이디어의 융합으로 혁신적인 경험을 창조합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="pb-8 border-b border-gray-200 hover:border-gray-400 transition-all duration-300">
                <h3 className="text-xl font-medium text-black mb-4 tracking-wide hover-underline">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light mb-6">
                  {capability.description}
                </p>

                <div className="space-y-2">
                  {capability.details.map((detail, detailIndex) => (
                    <div 
                      key={detailIndex}
                      className="text-sm text-gray-500 font-light"
                    >
                      — {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology stack display */}
        <div className="mt-24 text-center">
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-6">Technology Stack</div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 text-sm font-light text-gray-600 minimal-border hover:text-black transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="section-divider"></div>
    </section>
  );
};

export default TechnicalCapabilities; 
