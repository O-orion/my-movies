import styled from "styled-components";

export const ButtonWatchTrailler = styled.div<{width: string}>`
    width: ${(props) => props.width || '50%'};
    padding: 10px;
    background-color: #888074ac;
    color: #fff;
    border-radius: 10px;

    display: flex;
    align-items: center;

    cursor: pointer;
`