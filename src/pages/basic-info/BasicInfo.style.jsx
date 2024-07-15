import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

// 연구진 정보
export const Person = styled.div`
  margin: 2rem 0.5rem;
`;

export const Part = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
`;
export const Name = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`;
export const Mail = styled.p`
  font-size: 1rem;
`;

// 왼쪽 메뉴
export const LeftMenu = styled.div`
  margin: 3rem 5rem;
  width: 22%;
`;

export const RedTap = styled.div`
  border-left: 0.5rem solid rgb(141, 0, 42);
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const BlackTap = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const MenuTap = styled.p`
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
  margin-left: 0.7rem;
`;

// 왼쪽 메뉴 & 오른쪽 정보 flex box
export const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

// 오른쪽정보
export const TextContainer = styled.div`
  margin: 3.5rem 5rem 3rem 0rem;
  width: 70%;
`;

export const PageTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-left: 1rem;
`;

export const Explain = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  margin-left: 1rem;
`;
export const RedLine = styled.div`
  border: solid 0.2rem rgb(141, 0, 42);
  height: 0;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const GuideLink = styled.p`
  text-decoration: underline;
  font-size: 0.9rem;
  font-weight: 500;
  margin-left: 1rem;
  &:hover,
  &:focus {
    color: blue;
    cursor: pointer;
  }
`;

// 평가 방식 비교
export const Box = styled.div`
  border: 0.4rem solid rgb(224, 214, 198);
  border-radius: 20% 20%;
  margin: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const HorizontalLine = styled.div`
  border-bottom: 0.3rem solid rgb(224, 214, 198);
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const TextBox = styled.div`
  margin-right: 1rem;
`;

export const VideoBox = styled.div`
  margin: 3rem 2rem;
`;

export const HomeImg = styled.img`
  width: 17rem;
  object-fit: contain;
  margin: 0rem 3rem;
`;
