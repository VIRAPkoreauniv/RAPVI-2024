import styled from "styled-components";

export const LeftMenu = styled.div`
  margin: 3rem 5rem;
  width: 22%;
`;

export const TapWrapper = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: ${({ $currWhere, $menuId }) =>
    $currWhere === $menuId ? "0.5rem solid rgb(141, 0, 42)" : ""};
`;

export const MenuTap = styled.p`
  font-size: 1rem;
  &:hover {
    cursor: pointer;
  }
  margin-left: 0.7rem;
`;
