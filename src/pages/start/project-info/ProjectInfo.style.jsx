import styled from "styled-components";

export const CoordinateBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Img = styled.img`
  margin: 1rem;
  width: 80%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  margin: 3% 10%;
`;

export const PageTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  padding-left: 3rem;
  margin-top: 3%;
`;

export const PagePath = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  background-color: rgb(40, 40, 40);
  color: white;
  margin: 0;
  padding: 1rem;
  width: 80vw;
  height: 1rem;
`;

export const EvalContent = styled.div``;

// 박스 밖 띄우기
export const EvalArea = styled.div`
  margin: 3% 3% 3% 2%;
`;

// 박스 테두리
export const EvalBox = styled.div`
  border: 1px solid black;
  margin: 1%;
`;

// 박스 안에 왼쪽 띄우기
export const PaddingBox = styled.div`
  padding: 1.5rem;
`;

export const BtnAreaSolo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 3%;
`;

export const BtnAreaTwin = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3%;
`;

// 다음 버튼
export const NextBtn = styled.button`
  margin-top: 3rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
`;

// 이전 버튼
export const PrevBtn = styled.button`
  margin-top: 3rem;
  margin-right: 1.5rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
`;

// 테이블
export const Table = styled.td`
  border-collapse: collapse;
`;

export const Td = styled.td`
  padding: 1rem;
`;

// 그리드 데이터 체크 버튼
export const CheckBtn = styled.button`
  padding: 0.3rem 0.5rem;
  font-size: 0.8rem;
  margin: 0.5rem;
`;

export const BtnBox = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
export const GridAndLegend = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

export const GridTable = styled.table`
  width: 60%;
  border-collapse: collapse;
`;

// 범례
export const Legend = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 5rem;
  width: 100%;
`;
export const LegendItem = styled.div`
  border: 1px solid black;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
`;
