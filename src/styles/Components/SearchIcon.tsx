import styled from "styled-components";

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: white;
  font-size: 23px;
  pointer-events: none;

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 6px;
  }
`;
