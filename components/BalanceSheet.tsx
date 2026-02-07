import React from 'react';
import { CHARMS, FLAWS } from '../constants';
import { CheckCircle2, AlertOctagon, ThumbsUp, ThumbsDown } from 'lucide-react';

const BalanceSheet: React.FC = () => {
  return (
    <div className="px-4 py-8 space-y-8">
      
      {/* Flaws Section */}
      <div className="relative">
        <div className="flex items-center gap-2 mb-4 text-red-600">
          <ThumbsDown size={20} className="fill-red-100" />
          <h3 className="font-bold text-lg">헤어지고 싶은 순간 (킹받음)</h3>
        </div>
        <div className="space-y-3">
          {FLAWS.map((flaw, index) => (
            <div key={index} className="bg-white border-l-4 border-red-400 p-4 rounded-r-xl shadow-sm">
              <div className="flex items-start gap-3">
                <AlertOctagon size={18} className="text-red-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{flaw.label}</h4>
                  <p className="text-slate-600 text-sm leading-snug break-keep">{flaw.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Charms Section */}
      <div className="relative">
        <div className="flex items-center gap-2 mb-4 text-blue-600">
          <ThumbsUp size={20} className="fill-blue-100" />
          <h3 className="font-bold text-lg">놓지 못하는 이유 (매력)</h3>
        </div>
        <div className="space-y-3">
          {CHARMS.map((charm, index) => (
            <div key={index} className="bg-white border-l-4 border-blue-400 p-4 rounded-r-xl shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-blue-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{charm.label}</h4>
                  <p className="text-slate-600 text-sm leading-snug break-keep">{charm.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BalanceSheet;