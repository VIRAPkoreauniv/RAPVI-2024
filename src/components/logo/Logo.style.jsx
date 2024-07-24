import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  margin: 2% 3rem;
  align-items: center;
`;

export const Title = styled.p`
  color: rgb(141, 0, 42);
  font-size: 3rem;
  font-weight: 1000;
  margin: 0rem 1rem 0rem 1rem;
  &:hover {
    cursor: pointer;
  }
`;

export const FullTxtBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export const FullTxt = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
`;
