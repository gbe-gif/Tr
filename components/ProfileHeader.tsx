import React from 'react';
import { PROFILE } from '../constants';
import { MapPin, Briefcase, GraduationCap, Car } from 'lucide-react';

const ProfileHeader: React.FC = () => {
  return (
    <div className="bg-white pb-6 rounded-b-3xl shadow-sm overflow-hidden">
      <div className="relative w-full aspect-square bg-slate-200">
        <img 
          src="https://i.postimg.cc/k4G25TNN/331.jpg" 
          alt="김영준" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6 pt-20 text-white">
          <div className="flex items-baseline gap-2 mb-1">
            <h2 className="text-3xl font-bold">{PROFILE.name}</h2>
            <span className="text-lg opacity-80">{PROFILE.age}세</span>
            <span className="ml-auto bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono border border-white/30">
              {PROFILE.mbti}
            </span>
          </div>
          <p className="text-slate-200 text-sm font-light leading-relaxed opacity-90">
            {PROFILE.job}
          </p>
        </div>
      </div>

      <div className="px-6 mt-6 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-medium">신체 스펙</span>
            <span className="text-slate-800 font-semibold text-sm">{PROFILE.height} / {PROFILE.weight_lift}</span>
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-slate-400 text-xs font-medium">자산/차량</span>
            <span className="text-slate-800 font-semibold text-sm">자양동 전세 / 아반떼</span>
        </div>
      </div>
      
      <div className="px-6 mt-4 flex flex-wrap gap-2">
         <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg text-xs text-slate-600 border border-slate-100">
            <GraduationCap size={14} /> 서울시립대 화공과
         </div>
         <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg text-xs text-slate-600 border border-slate-100">
            <Car size={14} /> 24년형 법인차
         </div>
         <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg text-xs text-slate-600 border border-slate-100">
            <MapPin size={14} /> {PROFILE.location.split(' ')[1]}
         </div>
      </div>
    </div>
  );
};

export default ProfileHeader;