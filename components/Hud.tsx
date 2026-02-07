import React, { useState, useEffect } from 'react';
import { Calendar, HeartCrack } from 'lucide-react';

const Hud: React.FC = () => {
  const [days, setDays] = useState(1342);

  // Simulate time passing slightly to make it feel alive
  useEffect(() => {
    const timer = setInterval(() => {
        // Just a visual effect, doesn't actually change day often
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md text-white px-4 py-3 shadow-md flex justify-between items-center border-b border-slate-700">
      <div className="flex items-center gap-2">
        <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded border border-red-500/50 flex items-center gap-1">
          <HeartCrack size={12} />
          위태로움
        </span>
        <h1 className="text-sm font-semibold tracking-wide">고쳐 쓸 수 있을까</h1>
      </div>
      <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
        <Calendar size={14} />
        <span>안 버린지 D+{days}</span>
      </div>
    </div>
  );
};

export default Hud;