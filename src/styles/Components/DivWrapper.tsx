import styled from "styled-components";

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  border-radius: 10px;
  padding: 10px;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;
