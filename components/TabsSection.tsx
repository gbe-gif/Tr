import React, { useState } from 'react';
import { Moon, Flame } from 'lucide-react';

const TabsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'normal' | 'drunk'>('normal');

  return (
    <div className="mx-4 bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
      <div className="bg-slate-100 p-1 flex gap-1 rounded-t-2xl">
        <button
          onClick={() => setActiveTab('normal')}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all ${
            activeTab === 'normal' 
              ? 'bg-white text-slate-800 shadow-sm' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <Moon size={16} />
          평소 (권태기)
        </button>
        <button
          onClick={() => setActiveTab('drunk')}
          className={`flex-1 py-2.5 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all ${
            activeTab === 'drunk' 
              ? 'bg-rose-50 text-rose-600 shadow-sm ring-1 ring-rose-200' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <Flame size={16} />
          만취 시 (열정)
        </button>
      </div>

      <div className="p-6 min-h-[220px] flex flex-col justify-center">
        {activeTab === 'normal' ? (
          <div className="space-y-4 animate-fadeIn">
            <h4 className="text-lg font-bold text-slate-800">
              "피곤해, 좀 떨어져 봐."
              <span className="block text-xs font-normal text-slate-500 mt-1">스킨십을 업무처럼 느끼는 회피형</span>
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              연인을 <strong>'가족'</strong>이나 <strong>'룸메이트'</strong>로 정의하며 로맨틱한 분위기를 사전에 차단합니다. 
              퇴근 후엔 손가락 하나 까딱하기 싫어하며, 당신의 애교도 "안 씻었어" 한 마디로 방어해버리는 철벽남입니다.
            </p>
          </div>
        ) : (
          <div className="space-y-4 animate-fadeIn">
            <h4 className="text-lg font-bold text-rose-700">
              "가만히 있어, 예쁘니까."
              <span className="block text-xs font-normal text-rose-500 mt-1">억눌렀던 소유욕의 폭발</span>
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              알코올이 들어가면 <strong>다른 사람</strong>이 됩니다. 평소의 귀차니즘은 사라지고, 
              그동안 참아왔던 <strong>집착과 본능</strong>을 가감 없이 드러냅니다. 
              투박하지만 거침없는 그의 손길은, 당신이 여전히 그의 <strong>'소유'</strong>이자 <strong>'매력적인 연인'</strong>임을 서늘하게 상기시켜 줍니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsSection;