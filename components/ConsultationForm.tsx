
import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { Phone, MapPin, ExternalLink, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { handlePhoneCallOrConsultation } from '../constants';

// 스크롤 애니메이션 컴포넌트
interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-200 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ConsultationForm: React.FC = () => {
  return (
    <section id="consultation" className="py-16 md:py-24 bg-purple-800 text-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 tracking-tight">
                망설이지 마세요.<br/>
                교육 전문가가 <br/>
                친절하게 안내해드립니다.
              </h2>
              <p className="text-lg sm:text-xl font-medium text-white/90 mb-6 leading-relaxed">
                국비지원 자격 여부부터 취업·교육과정까지<br/>
                <span className="border-b-2 border-white font-bold">무료로 상담해드립니다.</span>
              </p>
              
              <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white text-purple-800 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                          <Phone size={24} />
                      </div>
                      <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-purple-200">교육문의</p>
                          <a 
                            href="tel:18775280" 
                            onClick={handlePhoneCallOrConsultation}
                            className="text-2xl sm:text-3xl font-black block hover:text-purple-200 transition-colors cursor-pointer"
                            title="전화문의 (PC에서는 상담신청 창이 열립니다)"
                          >
                            1877-5280
                          </a>
                      </div>
                  </div>
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white text-purple-800 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                          <MapPin size={24} />
                      </div>
                      <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-purple-200">교육장소</p>
                          <p className="text-lg sm:text-xl font-bold">한국직업능력교육원 안산캠퍼스</p>
                      </div>
                  </div>
              </div>
              <p className="font-bold text-base sm:text-lg mt-6 text-purple-100">여러분의 새로운 시작과 꿈을 응원합니다!</p>
            </Reveal>
          </div>

          {/* Right Consultation Button Area */}
          <Reveal delay={200} className="h-full">
            <div className="bg-white text-zinc-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl h-full flex flex-col justify-between border border-purple-100 relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-100 to-indigo-50 rounded-bl-full pointer-events-none opacity-60"></div>
              
              <div className="relative z-10">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 border border-purple-200 text-purple-900 mb-5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-700"></span>
                  </span>
                  <span className="text-xs font-bold tracking-wide">실시간 간편 상담 접수</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight mb-3">
                  1:1 맞춤 무료 교육상담 신청
                </h3>
                
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-6 font-medium break-keep">
                  국비지원 100% 전액 무료 여부, 매월 훈련수당 지급 혜택 및 비전공자 맞춤 취업 로드맵을 전문 상담 교사가 신속하게 안내해 드립니다.
                </p>

                {/* Key Benefits List */}
                <div className="space-y-3 mb-8 bg-zinc-50 p-4 sm:p-5 rounded-2xl border border-zinc-100">
                  <div className="flex items-center gap-2.5 text-sm font-bold text-zinc-800">
                    <CheckCircle2 size={18} className="text-purple-700 shrink-0" />
                    <span>국비지원 과정 (국민내일배움카드)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-bold text-zinc-800">
                    <CheckCircle2 size={18} className="text-purple-700 shrink-0" />
                    <span>매월 최대 훈련장려금 및 수당 지원</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-bold text-zinc-800">
                    <CheckCircle2 size={18} className="text-purple-700 shrink-0" />
                    <span>비전공자/입문자 맞춤 1:1 취업 포트폴리오</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-2">
                {/* Consultation Apply Button */}
                <a
                  href="https://naver.me/Gi0mmGqB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group/btn relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-900 hover:from-purple-900 hover:to-indigo-950 text-white font-black text-lg sm:text-xl py-4 sm:py-5 px-8 rounded-2xl shadow-[0_10px_25px_rgba(107,33,168,0.35)] hover:shadow-[0_15px_35px_rgba(107,33,168,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <Sparkles size={20} className="text-purple-300 group-hover/btn:rotate-12 transition-transform" />
                  <span>상담신청 바로가기</span>
                  <ExternalLink size={20} className="text-purple-300 group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <p className="text-center text-xs text-zinc-400 mt-3 flex items-center justify-center gap-1">
                  <span>* 네이버 폼으로 안전하고 빠르게 신청하실 수 있습니다. (새 창 열림)</span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
