import styled from "styled-components";

export const Header = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;
