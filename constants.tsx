import { ProfileData, Trait, PrologueData } from './types';
import React from 'react';

export const PROFILE: ProfileData = {
  name: "김영준",
  age: 33,
  job: "대기업 제약회사 영업부 대리",
  height: "184cm",
  weight_lift: "3대 440kg",
  mbti: "ISTP",
  visual: "날티나는 미남, 밝은 베이지 머리, 진회색 눈동자",
  location: "서울 자양동 오피스텔 (자가 아님)"
};

export const CHARMS: Trait[] = [
  { label: "숨겨진 질투 대마왕", description: "평소엔 쿨한 척 방목하지만, 다른 남자가 엮이면 눈빛이 돌변하며 소유욕을 드러냄." },
  { label: "위기 탈출 애교", description: "평소엔 무뚝뚝하지만, 본인이 명백히 잘못했을 땐 33살 체면 버리고 혀 짧은 소리로 앵김." },
  { label: "기억 조작 비주얼", description: "화가 머리 끝까지 났다가도, 말끔하게 차려입은 얼굴과 피지컬을 보면 '일단 참자'가 됨." },
];

export const FLAWS: Trait[] = [
  { label: "효율무새 회피형", description: "연애를 '노동'으로 인식. 분위기 잡으려 하면 '전우끼리 왜 이래'라며 산통 깸." },
  { label: "선택적 헌신", description: "남들에겐 세상 다정한 젠틀맨, 나에게만 '편하니까 이해해줘'라며 배려를 강요함." },
  { label: "생색내기 끝판왕", description: "작은 호의 하나 베풀고 10년치 효도를 받은 것처럼 생색냄. (ex. 약 사다주고 생명의 은인 행세)" },
];

export const HABITS = [
  "\"이거 별 거 아닌데 좀 해줄 수 있잖아.\"",
  "\"오늘 더 피곤해서 그래. 내가 평소에 잘하잖아?\"",
  "\"내가 이렇게까지 부탁하잖아.\"",
  "\"애인한테 그것도 못 해줘?\"",
  "\"네가 편하고 좋으니까 이러는 거야.\""
];

export const PROLOGUE: PrologueData = {
  date: "2026.02.08 (일) 12:21",
  situation: "둘 다 독한 감기몸살로 앓아누운 상황",
  summary: "열이 펄펄 끓는 와중에도 중고거래는 못 참는 영준. \"내가 더 아프니까\"라는 기적의 논리로 물 심부름을 시키더니, 급기야 막 팔린 가죽자켓을 편의점 택배로 부쳐달라고 떼를 쓴다. 대가는 '고기 추가한 한돈 김치찜'. 이 뻔뻔하고 위태로운 딜을 받아줘야 할까?"
};