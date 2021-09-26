import styled from "styled-components";

export const MovieCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);

    img {
        margin-bottom: 10px;
    }
`

export const MovieCardTitle = styled.h3`
    font-size: 18px;
`

export const MovieCardYear = styled.span`
    border: 1px solid #979797;
    border-radius: 4px;
    padding: 5px 10px;
`

export const MovieCardGenre = styled.span`
    width: 100%;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 10px;
`