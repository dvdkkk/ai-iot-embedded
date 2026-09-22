
import React, { useEffect, useState } from 'react';
import { MessageSquarePlus } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 조금 발생하면 버튼 표시
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 pointer-events-none transition-all duration-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <a 
        href="https://naver.me/Gi0mmGqB" 
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group bg-gradient-to-r from-purple-800 to-indigo-800 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm w-16 h-16 rounded-full shadow-[0_4px_25px_rgba(107,33,168,0.5)] flex flex-col items-center justify-center transition-transform hover:scale-110 active:scale-95 border border-purple-400/30"
        aria-label="상담 신청하기 (새 창 열림)"
      >
        <MessageSquarePlus size={18} className="mb-0.5 group-hover:rotate-6 transition-transform" />
        <span className="text-[11px] font-bold">상담신청</span>
      </a>
    </div>
  );
};
