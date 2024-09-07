import styled from "styled-components";

type ButtonPropns = {
    width: string,
    fontSize?: string,
    padding?: string,
    position?: string,
    bottom?: string,
    left?: string,
    right?: string,
    top?: string
}

export const ButtonWatchTrailler = styled.div<ButtonPropns>`
    width: ${(props) => props.width || '50%'};
    padding: ${(props) => props.padding || '6px'};
    background-color: #888074ac;
    color: #fff;
    border-radius: 10px;
    font-size: ${(props) => props.fontSize || '16px'};
    display: flex;
    align-items: center;

    cursor: pointer;
`