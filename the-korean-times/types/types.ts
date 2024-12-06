/**
 * 국회의원 데이터 타입
 */
export type MemberType = {
  rnum: number; // 고유 식별자
  unitNm: string; // 국회의원의 회차 (e.g. 22대)
  hgNm: string; // 이름
  enNm: string; // 영문 이름
  polyNm:
    | "더불어민주당"
    | "국민의힘"
    | "조국혁신당"
    | "개혁신당"
    | "진보당"
    | "기본소득당"
    | "사회민주당"
    | "무소속"
    | string; // 정당
  cmitNm: string; // 위원회
  origNm?: string; // 지역선거구
  gdrGbnNm?: "남" | "여" | string; // 성별
  reeleGbnNm:
    | "초선"
    | "재선"
    | "3선"
    | "4선"
    | "5선"
    | "6선"
    | "7선"
    | "8선"
    | "9선"
    | "10선"
    | string; // 당선 횟수
  electGbnNm: "지역구" | "비례대표" | string; // 선출 방식
};

/**
 * 찬반 투표 데이터 타입
 */
export type VoteData = {
  totalCnt: number;
  agreeCnt: number;
  disagreeCnt: number;
};

/**
 * 데이터셋 아이템 타입, 실전 예제 기준
 */
export type VoteData2 = {
  agenda: string;
  date: string;
  stats: VoteStats;
  attend: number;
  dataset: VoteDataItem[];
};
export type VoteStats = {
  total: number;
  attend: number;
  agree: number;
  disagree: number;
  abstention: number;
};
export type VoteDataItem = {
  hgNm: string;
  vote: "agree" | "disagree" | "abstention" | "";
};
