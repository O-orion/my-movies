import styled from "styled-components";

export const SearchInput = styled.input`
  background: #191919;
  border: none;
  height: 40px;
  width: 100%;
  border-radius: 10px;
  padding: 10px 10px 10px 40px;
  color: white;

  &::placeholder {
    font-weight: 700;
  }

  @media (min-width: 480px) {
    height: 35px;
    padding: 8px 8px 8px 35px;
  }
`;
