import React from 'react';
import { PROLOGUE } from '../constants';
import { BookOpen, Clock } from 'lucide-react';

const SurvivalGuide: React.FC = () => {
  return (
    <div className="px-4 pb-12 space-y-6">
      
      {/* Prologue Summary */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
            <BookOpen size={18} className="text-slate-600" />
            <span className="text-sm font-bold text-slate-800">Prologue: 아픈 날의 거래</span>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-3 bg-slate-50 p-2 rounded">
            <Clock size={12} />
            <span>{PROLOGUE.date} | {PROLOGUE.situation}</span>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed text-justify break-keep">
            {PROLOGUE.summary}
        </p>
      </div>

    </div>
  );
};

export default SurvivalGuide;