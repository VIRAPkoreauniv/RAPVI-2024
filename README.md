# RAPVI
증기침입으로 인해 발생하는 위해성 평가를 위해 설계된 부지개념모델 기반 위해성 계산 웹 어플리케이션입니다.

RAPVI는 한국환경기술원의 지원을 받아 고려대학교 지구환경과학과 환경수리지질연구실에서 제작하였습니다.

🔗 https://rapvi-2024.web.app/

### 📅 개발 기간
<hr/>
- 22.12 ~ 23.03.

### 🤝 개발한 사람들
<hr/>

- 연구 : 배민서, 최이준, 한성경
- 기획 : 김나영, 임정아
- 개발 : 차수지(FE), 나혁주(BE)

### ⚙ 개발 환경
<hr/>

#### FE
- react 18.2.0
- react-router-dom 6.6.1
- styled-components 5.3.6
- react-google-maps/api 2.18.1
- react-apexcharts 1.4.0
- react-icons 4.7.1
- html2canvas 1.4.1
- jspdf 2.5.1
- axios 1.3.2
- i18n 23.12.1

#### BE
- flask

### 🗂 Files
<hr/>

#### FE
`src>pages`
- 오염원 > 오염물질  `1_1_coc`
  - 기본평가 `coc_2.js`
  - 부지기반평가 `coc_1.js`
- 오염원 > 오염심도 `1_2_depth`
  - 기본평가 `depth_2.js`
  - 부지기반평가 `depth_1.js`
    - csv 데이터 처리 `_check_.js`
    - 데이터 확인용 팝업 창 `_pop_.js`
- 오염원 > 오염농도 `1_2_conc`
  - 기본평가 `conc_2.js`
  - 부지기반평가 `conc_1.js`
    - csv 데이터 처리 `_check_.js`
    - 데이터 확인용 팝업 창 `_pop_.js`
- 경로 > 지질매체
  - 기본평가 `geo_1.js`
  - 부지기반평가 `geo_2.js`
    - csv 데이터 처리 `_check.js`
    - 데이터 확인용 팝업 창 `_pop.js`
- 경로 > 건물
  - 기본평가 `found_1.js`
  - 부지기반평가 `found_2.js`
    - csv 데이터 처리 `_check.js`
    - 데이터 확인용 팝업 창 `_pop.js`
- 수용체 > 노출특성
  - 기본평가 `receptor_1.js`
  - 부지기반평가 `receptor_2.js`
    - csv 데이터 처리 `_check.js`
    - 데이터 확인용 팝업 창 `_pop.js`
- 결과 출력
  - 기본평가 `output_1.js`
  - 부지기반평가 `output_2.js`
- 부지기반평가 보고서 PDF 생성
  - `pdf`
- 튜토리얼
  -`tutorial`
  - 위의 파일들과 동일하며, 더미 데이터가 들어가있는 상태
  
#### BE
- `app.py`
