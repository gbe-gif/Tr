import React from 'react';
import Hud from './components/Hud';
import ProfileHeader from './components/ProfileHeader';
import BalanceSheet from './components/BalanceSheet';
import TabsSection from './components/TabsSection';
import SurvivalGuide from './components/SurvivalGuide';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-10 max-w-md mx-auto shadow-2xl overflow-hidden relative">
      <Hud />
      
      <main className="flex flex-col">
        <ProfileHeader />
        
        <div className="mt-8 px-6">
          <h3 className="text-center text-xl font-bold text-slate-800 mb-3">
            "우리가 권태기일까?"
          </h3>
          <p className="text-center text-sm text-slate-500 leading-relaxed break-keep">
            연애 초반, 세상 누구보다 다정했던 그 남자.<br/>
            하지만 치열한 영업직의 하루하루는 그를<br/>
            '효율 중시형' 룸메이트로 바꿔놓았습니다.<br/>
            <br/>
            미울 때가 더 많지만, 가끔 보이는 질투와<br/>
            술김에 드러나는 뜨거운 본능이<br/>
            아직 이 관계가 끝나지 않았음을 말해줍니다.<br/>
            <br/>
            당신은 이 현실적인 연애의 불씨를<br/>
            다시 살릴 수 있을까요?
          </p>
        </div>

        <BalanceSheet />
        
        <div className="px-4 mb-4 mt-2">
            <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-slate-800 rounded-full"></span>
                관계의 이면 (On/Off)
            </h3>
        </div>
        <TabsSection />
        
        <SurvivalGuide />
      </main>
    </div>
  );
};

export default App;