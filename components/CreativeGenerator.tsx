import React, { useState } from 'react';
import { generateCreativeAsset } from '../services/geminiService';
import Button from './Button';

const CreativeGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const presets = [
    "네온 신경망 데이터 시각화",
    "추상적인 유리 기하학 건축물",
    "액체 금속 유체 역학 브랜딩"
  ];

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setError(null);
    try {
      const generatedImage = await generateCreativeAsset(prompt);
      setImage(generatedImage);
    } catch (err) {
      setError("크리에이티브 생성에 실패했습니다. API 키 설정을 확인해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lab" className="py-24 px-6 relative border-t border-white/5 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Controls */}
                <div className="space-y-8">
                    <div>
                        <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">Powered by Gemini 2.5 Flash</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">AI 크리에이티브 랩</h2>
                        <p className="text-gray-400 text-lg">
                            "나노 바나나" 엔진의 속도를 경험해보세요. 맞춤형 캠페인 컨셉을 단 몇 초 만에 생성합니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-gray-300">컨셉 프롬프트</label>
                        <div className="relative">
                            <input 
                                type="text"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="비전을 설명해주세요 (예: '빛으로 이루어진 미래 도시')..."
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/40 transition-colors"
                            />
                            <div className="absolute right-2 top-2">
                                <Button 
                                    onClick={handleGenerate} 
                                    disabled={loading || !prompt}
                                    className="!py-2 !px-4 !text-xs"
                                >
                                    {loading ? '생성 중...' : '생성하기'}
                                </Button>
                            </div>
                        </div>
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">또는 프리셋 사용:</p>
                        <div className="flex flex-wrap gap-2">
                            {presets.map(p => (
                                <button 
                                    key={p}
                                    onClick={() => setPrompt(p)}
                                    className="text-xs px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Display Area */}
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black/80 flex items-center justify-center shadow-2xl shadow-black/50">
                    {image ? (
                        <img src={image} alt="Generated Creative" className="w-full h-full object-cover animate-fade-in" />
                    ) : (
                        <div className="text-center p-8">
                             {loading ? (
                                 <div className="flex flex-col items-center gap-4">
                                     <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                     <p className="text-sm text-gray-500 animate-pulse">컨셉 디자인 중...</p>
                                 </div>
                             ) : (
                                <div className="space-y-4 opacity-40">
                                    <div className="w-16 h-16 mx-auto rounded-full border border-white/20 flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-sm">아이디어를 시각화하려면 프롬프트를 입력하세요</p>
                                </div>
                             )}
                        </div>
                    )}
                    
                    {/* Decorative UI Overlay */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-[10px] text-white/30 font-mono">
                        RENDER_ENGINE: GEMINI_2.5_FLASH
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default CreativeGenerator;