import styled from "styled-components";

export const TextDetailMovie = styled.p<{fontSize?: string}>`
    color: #f4f3f3;
    font-size: ${(props) => props.fontSize || '15px'};
    font-weight: 400;

    span {
        display: inline-block; /* Certifique-se de que o span seja tratado como um bloco inline */
        margin-left: 3px; /* Adiciona espaço à direita de cada span */
    }
`
