import styled from "styled-components";

export const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; /* 2 partes para a primeira coluna e 1 parte para a segunda */
  gap: 30px; /* Espaço entre as colunas */
  width: 100%;
  height: 100vh;
`;

export const FeaturedMovie = styled.div<{$imageUrl: string}>`
  margin-left: 20px;
  width: 100%;
  height: 100%; /* Ocupa toda a altura do contêiner pai */
  background-image: url(${props => props.$imageUrl});
  background-size: 100% 100%; /* Ajuste para cobrir o contêiner sem distorção */
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  opacity: 0.4;
  
`;

export const HighlightsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espaço entre os destaques */
  overflow-y: auto; /* Permite rolar se houver mais itens do que o espaço disponível */
  height: 100%; /* Garante que a lista ocupe toda a altura disponível */
  width: 80%;
  overflow: hidden;
`;

export const HighlightItem = styled.div<{$imageUrl: string}>`
  width: 100%;
  height: 90%;
  position: relative;
  border-radius: 10px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(${props => props.$imageUrl});
    background-size: 100% 120%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    z-index: 1; /* Coloca o fundo abaixo dos filhos */
  }
  
`;