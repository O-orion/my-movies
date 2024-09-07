import styled from "styled-components";

export const CardMovie = styled.div<{image?: string}>`
  position: relative;
  height: 200px; /* Ajuste conforme necessário */
  width: 200px;  /* Ajuste conforme necessário */

  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${(props) => props.image});
    background-size: 100% 100%; /* Ajuste para cobrir o contêiner sem distorção */
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.4;
    z-index: 1;

    display: flex;
  }

  /* Conteúdo dentro do card */
  > * {
    position: relative;
    z-index: 2;
  }
`;


export const CardWrapper = styled.div`
  padding: 5px; /* Ajuste o valor conforme necessário */
  box-sizing: border-box;
`;