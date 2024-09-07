import styled from "styled-components";

export const ContainerRated = styled.section`
    position: absolute;
    top: 10px;
    left: 10px;

    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 1;
    z-index: 2000;
`
export const RatedWrapper = styled.div<{width?: string, margin?: string}>`
    width: ${(props) => props.width || 'auto'};
    background-color: #5d5f61ad;
    padding: 7px;
    border-radius: 10px;
    margin: ${(props) => props.margin || 0};
    display: flex;
    align-items: center;
    gap: 5px;
`

export const TextRated = styled.p`
    color: white;
    font-size: 15px;
`
export const IconStar = styled.img`
    height: 20px;
    width: 20px;
`
export const IconGrade = styled.span`

    background-color: #5d5f61ad;
    padding: 5px;
    color: white;
    border-radius: 10px;
`
