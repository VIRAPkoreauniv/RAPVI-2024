export default {
  coc: {
    pagePath: {
      text1: "위해성 평가",
      text2: "오염원",
      text3: "오염물질",
    },
    pageTitle: "오염물질",
    placeholder: "오염물질을 선택해주세요.",
    info: "※ 아래의 값들은 {{chem}}에 따라 자동으로 입력되며 필요 시 사용자가 수정할 수 있습니다.",
    table: {
      td1: "기호",
      td2: "단위",
      td3: "순수 성분 수용성",
      td4: "표준 온도(25℃)의 헨리 상수",
      td5: "공기에서의 확산성",
      td6: "물에서의 확산성",
      td7: "정상 끓는 점에서의 기화 엔탈피",
      td8: "임계 온도",
      td9: "정상 끓는 점",
      td10: "화합물의 분자량",
    },
    prev: "이전",
    next: "다음",
  },
  depth: {
    pagePath: {
      text1: "위해성 평가",
      text2: "오염원",
      text3: "오염심도",
    },
    pageTitle: "오염심도",
    waterlevel: "지하수위 (단위 : m)",
    elevation: "표고 (단위 : m)",
    popWaterlevel: "오염심도 - 지하수위",
    popElevation: "오염농도 - 표고",
    prev: "이전",
    next: "다음",
  },
  conc: {
    pagePath: {
      text1: "위해성 평가",
      text2: "오염원",
      text3: "오염농도",
    },
    pageTitle: "오염농도",
    alert: "오염원 매체를 선택해주세요",
    select: {
      title: "오염원 매체 선택",
      sat: "포화대(지하수)",
      unsat: "불포화대(토양)",
    },
    info: "※ 오염원 매체를 선택해주세요",
    sat: {
      title: "오염원 매체 : 포화대(지하수)",
      info: "※ 불포화대(토양) 선택 시 지하수 온도는 15℃로 고정됩니다.",
      table: {
        td1: "기호",
        td2: "단위",
        td3: "지하수 온도",
        td4: "매체 농도",
      },
    },
    unsat: {
      title: "오염원 매체 : 불포화대(토양)",
      table: {
        td1: "기호",
        td2: "단위",
        td3: "매체 농도",
      },
      soil: {
        title: "토양흡착특성",
        info: "※ koc와 foc의 값은 오염물질에 따라 자동으로 입력될 수 있으며, 필요 시 사용자가 수정할 수 있습니다.",
        table: {
          td1: "기호",
          td2: "단위",
          td3: "토양-물 분배계수",
          td4: "탄소-물 분배계수",
          td5: "유기물 분배계수",
        },
      },
    },
    pop: {
      satConc: "오염농도 - 포화대(지하수)",
      unsatConc: "오염농도 - 불포화대(토양)",
      deffi: "오염농도 - Deffi",
    },
    prev: "이전",
    next: "다음",
  },
  geo: {
    pagePath: {
      text1: "위해성 평가",
      text2: "경로",
      text3: "지질매체",
    },
    pageTitle: "지질매체",
    select: {
      title: "층서유형 선택",
      single: "단일층",
      multiple: "다중층",
      info1: "층서유형을 선택해주세요.",
      info2: "단일층일 때와 다중층일 때 입력값이 달라집니다.",
    },
    single: {
      title: "지층 토양 유형",
      placeholder: "지층토양유형을 선택해주세요.",
      info: {
        info1:
          "하단의 '입력 가능한 지층토양유형'표를 참고해 지층토양유형을 선택해주세요.",
        info2:
          "지층토양유형을 선택하면 모든 데이터 범위가 선택한 지층토양유형(단일 유형)으로 채워집니다.",
        info3:
          "※ 표 하단의 '+ 다른 지층토양유형 추가하기' 를 클릭하여 사용자 정의 유형을 추가할 수 있습니다.",
      },
      table: {
        title: "입력 가능한 지층 토양 유형",
        td1: "번호",
        td2: "지층 토양 유형",
        add: "+ 다른 지층 토양 유형 추가하기",
      },
    },
    multiple: {
      title: "확산계수 (DeffT)",
      placeholder: "DeffT값을 입력해주세요.",
      info: "엑셀 전처리 파일의 DeffT 시트에서 계산된 값을 입력해주세요.",
    },
    geoPop: "지질매체",
    alert: {
      alert1: "지층 토양 유형을 선택해주세요.",
      alert2: "DeffT을 입력해주세요.",
    },
    prev: "이전",
    next: "다음",
  },
  found: {
    pagePath: {
      text1: "위해성 평가",
      text2: "경로",
      text3: "건물",
    },
    pageTitle: "건물",
    input: {
      title: "건물 기초 유형",
      placeholder: "그리드 값을 입력하세요.",
      openData: "데이터 세부 확인",
      reset: "다시 입력",
      sizeCheck: "입력된 데이터 크기",
      alert: {
        alert1: "입력된 데이터의 크기가 올바르지 않습니다.",
        alert2:
          "잘못된 건물 기초 유형 번호가 포함되어 있습니다.\n하단의 입력 가능한 건물 기초 유형 번호를 확인한 후\n다시 시도해주세요.",
      },
    },
    table: {
      title: "입력 가능한 건물 기초 유형",
      info: "※ 그리드의 각 셀에 해당하는 건물 유형은 아래 표에서 제시한 번호로 표시해야 합니다.",
      td1: "번호",
      td2: "건물기초 유형",
      more: "+ 다른 건물 기초 유형 추가하기",
    },
    alert: "건물 기초 유형 그리드 값을 입력해주세요.",
    pop: "건물",
    prev: "이전",
    next: "다음",
  },
  receptor: {
    pagePath: {
      text1: "위해성 평가",
      text2: "수용체",
      text3: "노출 특성",
    },
    pageTitle: "노출 특성",
    input: {
      title: "노출 특성 유형",
      placeholder: "그리드 값을 입력하세요.",
      openData: "데이터 세부 확인",
      reset: "다시 입력",
      sizeCheck: "입력된 데이터 크기",
      alert: {
        alert1: "입력된 데이터의 크기가 올바르지 않습니다.",
        alert2:
          "잘못된 건물 기초 유형 번호가 포함되어 있습니다.\n하단의 입력 가능한 건물 기초 유형 번호를 확인한 후\n다시 시도해주세요.",
      },
    },
    table: {
      title: "입력 가능한 노출 특성 유형",
      info: "※ 그리드의 각 셀에 해당하는 노출 특성은 아래 표에서 제시한 번호로 표시해야 합니다.",
      td1: "번호",
      td2: "노출 특성",
      more: "+ 다른 노출 특성 유형 추가하기",
    },
    alert: "노출 특성 유형 그리드 값을 입력해주세요.",
    pop: "노출 특성",
    prev: "이전",
    next: "다음",
  },
  output: {
    pagePath: {
      text1: "위해성 평가",
      text2: "결과 확인",
    },
    pageTitle: "결과 확인",
    pdf: "PDF로 보기",
    projectInfo: {
      name: "프로젝트",
      manager: "담당자",
      date: "작업 일시",
    },
    part1: "실내 오염 농도",
    part2: "발암위해도",
    part3: "비발암위해도",
    prev: "이전",
  },
};
