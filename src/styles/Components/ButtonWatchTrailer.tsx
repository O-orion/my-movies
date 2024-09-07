import styled from "styled-components";

export const ButtonWatchTrailler = styled.div<{width: string, fontSize?: string, padding?: string}>`
    width: ${(props) => props.width || '50%'};
    padding: ${(props) => props.padding || '10px'};
    background-color: #888074ac;
    color: #fff;
    border-radius: 10px;
    font-size: ${(props) => props.fontSize || '16px'};
    display: flex;
    align-items: center;

    cursor: pointer;
`