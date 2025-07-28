import React from 'react';

const Workflow = () => {
  const steps = [
    {
      number: "01",
      title: "기획 및 공간 분석",
      description: "프로젝트 목표 설정과 공간의 특성 및 사용자 행동 패턴 분석",
      details: ["요구사항 분석", "공간 특성 파악", "사용자 경험 설계"]
    },
    {
      number: "02", 
      title: "시스템/콘텐츠 설계",
      description: "기술적 구조와 인터랙티브 콘텐츠의 통합 설계",
      details: ["시스템 아키텍처", "콘텐츠 스토리보드", "인터랙션 플로우"]
    },
    {
      number: "03",
      title: "개발 및 연동",
      description: "하드웨어와 소프트웨어의 개발 및 통합 테스트",
      details: ["소프트웨어 개발", "하드웨어 연동", "통합 테스트"]
    },
    {
      number: "04",
      title: "현장 구축",
      description: "실제 공간에서의 설치 및 최적화 작업",
      details: ["현장 설치", "환경 최적화", "성능 튜닝"]
    },
    {
      number: "05",
      title: "운영 매뉴얼 제공",
      description: "유지보수와 운영을 위한 가이드 및 지원 체계 구축",
      details: ["운영 가이드", "유지보수 지원", "업데이트 서비스"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="serif-font text-5xl md:text-6xl font-light text-black mb-8 tracking-tight">
            프로젝트 프로세스
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            체계적이고 전문적인 접근 방식으로 완성도 높은 결과물을 제공합니다
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-8">
                {/* Step number */}
                <div className="lg:col-span-2">
                  <div className="text-4xl md:text-5xl font-light text-gray-300 serif-font">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <h3 className="text-2xl md:text-3xl font-light text-black mb-4 tracking-wide hover-underline serif-font">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light mb-6 text-lg">
                    {step.description}
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {step.details.map((detail, detailIndex) => (
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

              {/* Separator line */}
              {index < steps.length - 1 && (
                <div className="mt-16 w-full h-px bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="section-divider"></div>
    </section>
  );
};

export default Workflow; 