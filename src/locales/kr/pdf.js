export default {
  save: "PDF 출력/저장",
  basic: {
    projectInfo: {
      rapvi: "RAPVI 기본평가",
      title: "프로젝트 정보",
      name: "프로젝트 명",
      manager: "담당자",
      date: "작업 일시",
    },
    input: {
      title: "입력값",
      material: "오염물질",
      waterlevel: "지하수위",
      elevation: "표고",
      medium: "오염원 매체",
      temperature: "지하수 온도",
      conc: "매체 농도",
      koc: "탄소-물 분배계수",
      foc: "유기물 분배계수",
      geoType: "지층 토양 유형",
      nSA: "지층 전체 공극률",
      nwSA: "지층 물이 채워진 공극률",
      rhoSA: "지층 부피밀도",
      hcz: "모세관대의 높이",
      ncz: "모세관 영역 전체 공극률",
      nwcz: "모세관 영역 물이 채워진 공극률",
      foundType: "건물 기초 유형",
      lb: "건물기초 바닥까지의 깊이",
      lf: "건물기초의 두께",
      eta: "균열이 있는 건물기초 면적의 비율",
      abf: "밀폐된 공간 바닥의 면적",
      hb: "밀폐된 공간의 섞임 높이",
      ach: "실내공기교환율",
      Qsoil_Qb: "건물유입 평균 증기유량 ÷ 건물환기율",
      expType: "노출 특성 유형",
      ef: "노출 기간",
      ed: "노출 빈도",
      et: "노출 시간",
      atc: "발암물질 평균 노출 시간",
      atnc: "비발암물질 평균 노출 시간",
    },
    output: {
      title: "결과",
      result1: "실내 오염 농도",
      result2: "증기침입에 의한 발암위해도",
      result3: "증기침입에 의한 비발암위해도",
    },
  },
  site: {
    header: {
      checkOutput: "출력 값 확인",
      projectInfo: {
        name: "프로젝트명",
        manager: "담당자",
        type: "위해성 평가 방식 : 부지기반평가",
        date: "작업 일시",
        site: "부지 영역",
        coor: "좌표",
      },
    },
    input: {
      coc: {
        title: "오염원-오염물질",
        table: {
          head: {
            text1: "단위",
            text2: "입력 값",
            text3: "선택 물질",
          },
          body: {
            S: "순수 성분 수용성",
            Hc: "표준 온도(25℃)의 헨리 상수",
            Dair: "공기에서의 확산성",
            Dwater: "물에서의 확산성",
            DHvb: "정상 끓는 점에서의 기화 엔탈피",
            Tc: "임계 온도",
            Tb: "정상 끓는 점",
            MW: "화합물의 분자량",
            RfC: "일일 호흡 노출 허용농도",
            Mut: "돌연변이 관여 여부",
          },
        },
      },
      depth: {
        title: "오염원 - 오염심도",
        table: {
          head: {
            text1: "단위",
            text2: "입력 값",
          },
          body: {
            waterlevel: "지하수위",
            legend: "오염심도 (최고심도 = 100 기준)",
            elevation: "표고",
          },
        },
      },
      conc: {
        title: "오염원 - 오염농도",
        table: {
          head: {
            text1: "단위",
            text2: "입력 값",
          },
          body: {
            source: "오염원",
            Ts: "지하수 온도",
            koc: "탄소-물 분배계수",
            foc: "유기물 분배계수",
            Cmedium: "매체 농도",
            legend: "오염농도 (최고농도 = 100 기준)",
          },
        },
      },
      geo: {
        title: "경로 - 지질 매체",
        table: {
          head: {
            text1: "단위",
            text2: "입력 값",
          },
          body: {
            geo: "지질매체",
            nSA: "지층 전체 공극률",
            nwSA: "지층 물이 채워진 공극률",
            rhoSA: "지층 부피 밀도 (Bulk Density)",
            hcz: "모세관대의 높이",
            ncz: "모세관 영역 전체 공극률",
            nwcz: "모세관 영역 물이 채워진 공극률",
            DeffT: "다중 층에서의 확산 계수",
          },
        },
      },
      found: {
        title: "경로 - 건물",
        table: {
          head: {
            text1: "단위",
            text2: "입력 값",
            text3: "번호",
            text4: "건물기초 유형",
          },
          body: {
            found: "건물",
          },
        },
      },
      receptor: {
        title: "수용체 - 노출 특성",
        table: {
          head: {
            text1: "단위",
            text2: "입력 값",
            text3: "번호",
            text4: "노출특성",
          },
        },
      },
    },
    output: {
      result1: "실내 오염 농도",
      result2: "증기침입에 의한 발암위해도",
      result3: "증기침입에 의한 비발암위해도",
    },
  },
};
