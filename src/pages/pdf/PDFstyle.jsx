import styled from "styled-components";

export const PdfBtn = styled.div`
  top: 0rem;
  display: flex;
  width: 100vw;
  justify-content: flex-end;
`;

export const PDFBtn = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Layout = styled.div`
  margin: 5%;
`;
export const Box = styled.div`
  padding: 3%;
`;

export const A4 = styled.div`
  height: 285vh;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  background: linear-gradient(
    90deg,
    rgb(141, 0, 42) 60%,
    rgb(229, 229, 229) 40%
  );
  padding-left: 5%;
  padding-right: 5%;
`;

export const Crimson = styled.div``;

export const RAPVItitle = styled.h2`
  color: white;
`;

export const Flexrow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 30%;
`;

export const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
`;

export const TdHead = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 1.3rem;
  background-color: lightgray;
  font-weight: 700;
  text-align: center;
  padding: 1rem;
`;

export const TdBody = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 1.3rem;
  padding: 1rem;
`;
export const TdBody2 = styled.td`
  border-left: 1px solid black;
  border-collapse: collapse;
  font-size: 1.3rem;
  padding: 1rem;
  font-weight: 700;
`;
export const TdBody3 = styled.td`
  border-right: 1px solid black;
  border-collapse: collapse;
  font-size: 1.3rem;
  padding: 1rem;
`;

export const TdBody4 = styled.td`
  border-right: 1px solid black;
  border-collapse: collapse;
  font-size: 1.3rem;
  padding: 1rem;
  text-align: center;
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
