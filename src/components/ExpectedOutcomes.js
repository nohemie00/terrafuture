import React from 'react';

const ExpectedOutcomes = () => {
  const outcomes = [
    {
      title: "몰입형 경험 제공",
      description: "사용자가 완전히 몰입할 수 있는 차세대 인터랙티브 경험",
      impact: "참여도 300% 증가"
    },
    {
      title: "공간의 콘텐츠화",
      description: "물리적 공간을 디지털 콘텐츠가 살아 숨쉬는 미디어 공간으로 변화",
      impact: "공간 활용도 250% 향상"
    },
    {
      title: "감성 기술 기반 브랜드 인지도 강화",
      description: "감정과 기술이 결합된 독창적인 브랜드 경험으로 강력한 인상 각인",
      impact: "브랜드 인지도 400% 상승"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="serif-font text-5xl md:text-6xl font-light text-black mb-8 tracking-tight">
            기대 효과
          </h2>
          <div className="w-16 h-px bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            혁신적인 기술과 창의적 아이디어의 결합으로 만들어지는 새로운 가치
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              <div className="pb-8">
                <h3 className="text-xl font-medium text-black mb-4 tracking-wide hover-underline">
                  {outcome.title}
                </h3>

                <p className="text-gray-600 leading-relaxed font-light mb-8">
                  {outcome.description}
                </p>

                {/* Impact metric */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Expected Impact</div>
                  <div className="text-lg font-medium text-black">
                    {outcome.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-24 text-center">
          <div className="inline-block">
            <div className="minimal-border px-8 py-4 bg-white hover:bg-gray-50 transition-all duration-300 cursor-pointer group">
              <span className="text-black font-medium tracking-wide hover-underline">프로젝트 시작하기</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-divider"></div>
    </section>
  );
};

export default ExpectedOutcomes; 