/**
 * 국회의원 데이터 타입
 */
export type MemberType = {
  idx: number; // 고유 식별자
  ordinal: number; // 국회의원의 회차 (e.g. 21대)
  name: string; // 이름
  party: string; // 정당
  committee: string; // 소속 위원회
  district?: string; // 지역구
  gender: string; // 성별
  elections: string; // 당선 횟수
  method: string; // 선출 방식
};
