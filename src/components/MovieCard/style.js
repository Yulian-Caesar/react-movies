import styled from 'styled-components';
import {Colors} from 'ui'

export const MovieCardContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
`

export const MovieCardImg = styled.button`
    width: 100%;
    margin-bottom: 10px;
`

export const MovieCardTitle = styled.button`
    font-size: 18px;
    color: ${Colors.white};
`

export const MovieCardYear = styled.span`
    border: 1px solid #979797;
    border-radius: 4px;
    padding: 5px 10px;
`

export const MovieCardGenre = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 10px;

    li + li {
        margin-left: 5px;
    }
`

export const MovieCardMenu = styled.div`
    position: absolute;
    right: 15px;
    top: 15px;
`

export const MovieCardButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: ${Colors.black};
    z-index: 2;

    > span {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${Colors.white};
    }

    > span + span {
        margin-top: 2px;
    }
`

export const MovieCardMenuBox = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    border-radius: 4px;
    background: ${Colors.black};
    color: ${Colors.white};
    padding: 10px 0;
    width: 190px;
    cursor: default;
    z-index: 3;

    li button {
        width: 100%;
        color: ${Colors.white};
        font-size: 16px;
        text-align: left;
        padding: 10px 20px;

        &:hover {
            background-color: ${Colors.accent};
            transition: 0.5s;
        }
    }
`
export const MovieCardButtonClose = styled.button`
    display: block;
    margin: 0 10px 0 auto;
    color: ${Colors.white};
    font-size: 16px;
`