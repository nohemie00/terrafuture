import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <footer id="contact" className="relative bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-accent to-black"></div>
        <div className="absolute inset-0 grid-overlay opacity-20"></div>
      </div>

      {/* Contact Section */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          {/* Section Header */}
          <div className={`text-center mb-20 fade-in ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-display font-tech font-bold text-white mb-6">
              GET IN
              <span className="text-pink block">TOUCH</span>
            </h2>
            <div className="w-24 h-1 bg-pink mx-auto mb-8"></div>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
              혁신적인 프로젝트를 함께 만들어보세요
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-tech font-bold text-white mb-8">
                프로젝트 문의
              </h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink to-transparent border border-pink rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:contact@terrafuture.co.kr" className="text-pink hover:text-white transition-colors duration-300">
                      contact@terrafuture.co.kr
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink to-transparent border border-pink rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+82-2-0000-0000" className="text-pink hover:text-white transition-colors duration-300">
                      +82-2-0000-0000
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink to-transparent border border-pink rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-secondary">
                      서울특별시 강남구<br />
                      테헤란로 XXX길 XX
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="text-white font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'LinkedIn', url: 'https://linkedin.com/company/terrafuture' },
                    { name: 'Instagram', url: 'https://instagram.com/terrafuture' },
                    { name: 'YouTube', url: 'https://youtube.com/@terrafuture' }
                  ].map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 border border-pink rounded-lg flex items-center justify-center text-pink hover:bg-pink hover:text-black transition-all duration-300 hover-lift"
                    >
                      {social.name.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">이름</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white focus:border-pink focus:outline-none transition-colors duration-300"
                      placeholder="성함을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">회사명</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white focus:border-pink focus:outline-none transition-colors duration-300"
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">이메일</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white focus:border-pink focus:outline-none transition-colors duration-300"
                    placeholder="이메일 주소를 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">프로젝트 유형</label>
                  <select className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white focus:border-pink focus:outline-none transition-colors duration-300">
                    <option>AX 콘텐츠 기획 및 제작</option>
                    <option>공간 및 시스템 설계</option>
                    <option>영상 소프트웨어 개발</option>
                    <option>기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">프로젝트 상세 내용</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-lg text-white focus:border-pink focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="프로젝트에 대한 상세 내용을 작성해주세요"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  프로젝트 문의하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-8 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-2xl font-tech font-bold text-pink">
                TERRAFUTURE
              </div>
              <span className="text-secondary text-sm">
                - ART TECH FACTORY
              </span>
            </div>
            
            <div className="text-secondary text-sm">
              © 2024 TerraFuture. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-6 h-6 border border-pink/30 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-32 right-20 w-8 h-8 bg-pink/10 rounded-full animate-float hidden lg:block" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
};

export default Footer; 