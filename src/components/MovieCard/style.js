import styled from "styled-components";
import {Colors} from "ui"

export const MovieCardContainer = styled.div`
    position: relative;
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

export const MovieCardButton = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${Colors.black};

    span {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${Colors.white};
    }

    span + span {
        margin-top: 2px;
    }
`
