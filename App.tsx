import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import CreativeGenerator from './components/CreativeGenerator';
import Button from './components/Button';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white relative overflow-x-hidden">
      
      {/* Ambient Background Gradients - Creating depth */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Top Left Glow - Cool white/gray - Increased intensity */}
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-zinc-800/40 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        
        {/* Center Right Subtle Light - Increased visibility */}
        <div className="absolute top-[20%] -right-[20%] w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[100px] opacity-25" />
        
        {/* Bottom Left Accent - Grounding - Increased visibility */}
        <div className="absolute bottom-[-10%] -left-[10%] w-[50vw] h-[50vw] bg-zinc-600/20 rounded-full blur-[140px] opacity-30" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />

          {/* Brand Statement */}
          <section id="about" className="py-32 px-6 border-b border-white/5 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-6 block">에이전시</span>
              <h2 className="text-3xl md:text-5xl font-display leading-tight mb-8">
                우리는 미래를 예측하지 않습니다. <br />
                <span className="text-gray-500">우리는 미래를 그려냅니다.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                THE AWESOME은 차세대 마케팅 컬렉티브입니다. 우리는 고품질의 3D 환경과 치밀한 전략적 사고를 결합하여, 단순한 광고가 아닌 하나의 세계처럼 느껴지는 캠페인을 창조합니다.
              </p>
            </div>
          </section>

          {/* Services / Bento Grid */}
          <section id="services" className="py-32 px-6 relative">
            {/* Subtle Gradient behind cards */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent via-zinc-900/10 to-transparent -z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto">
               <div className="flex justify-between items-end mb-16">
                  <div>
                     <h2 className="text-4xl font-display font-bold mb-2">핵심 역량</h2>
                     <p className="text-gray-500">포괄적인 디지털 전환 솔루션.</p>
                  </div>
                  <Button variant="outline" className="hidden md:flex">전체 서비스 보기</Button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ServiceCard 
                    title="몰입형 웹" 
                    description="WebGL 및 Three.js 기반의 경험을 통해 평면적인 웹사이트를 입체적인 공간 환경으로 변모시킵니다."
                    colSpan="md:col-span-2"
                    icon={
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    }
                  />
                  <ServiceCard 
                    title="브랜드 전략" 
                    description="시장 선도 기업을 위한 데이터 기반 포지셔닝 전략."
                    icon={
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    }
                  />
                  <ServiceCard 
                    title="자동화 콘텐츠" 
                    description="맞춤형 학습 LLM을 활용한 확장 가능한 에셋 제작."
                    icon={
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    }
                  />
                  <ServiceCard 
                    title="공간 컴퓨팅" 
                    description="Vision Pro와 Quest를 위한 준비. 우리는 공간 웹을 구축합니다."
                    colSpan="md:col-span-2"
                     icon={
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  />
               </div>
            </div>
          </section>

          {/* AI Generator Section */}
          <CreativeGenerator />

          {/* CTA Section */}
          <section className="py-40 px-6 text-center relative overflow-hidden">
             {/* Updated subtle background for CTA */}
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 via-transparent to-transparent -z-10" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[128px] -z-10" />

             <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter mb-8">
               더 높이 비상할<br/>준비가 되셨나요?
             </h2>
             <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
               디지털 존재감을 재정의하는 선도적인 브랜드들의 대열에 합류하세요.
             </p>
             <Button className="mx-auto !text-base !px-10 !py-4">
               상담 예약하기
             </Button>
          </section>

          {/* Footer */}
          <footer className="py-12 px-6 border-t border-white/5 bg-black/40 backdrop-blur-md text-sm text-gray-500">
             <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                   <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
                   <span className="text-white font-bold tracking-wide">THE AWESOME</span>
                </div>
                <div className="flex gap-8">
                  <a href="#" className="hover:text-white transition-colors">트위터</a>
                  <a href="#" className="hover:text-white transition-colors">링크드인</a>
                  <a href="#" className="hover:text-white transition-colors">인스타그램</a>
                </div>
                <div>
                   &copy; 2024 THE AWESOME. All rights reserved.
                </div>
             </div>
          </footer>

        </main>
      </div>
    </div>
  );
};

export default App;