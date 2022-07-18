import styled from "styled-components";
import { Colors } from "ui";
import closeButton from 'images/search.svg';

export const MovieDetailsContainer = styled.div`
    position: relative;
    background: ${Colors.black};
    padding: 40px 60px;
    font-weight: 300;
`
export const MovieDetailsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const MovieDetailsClose = styled.button`
    width: 30px;
    height: 30px;
    background: url(${closeButton}) no-repeat center;
`

export const MovieDetailsMain = styled.div`
    display: flex;

    .img {
        width: 100%;
        max-width: 320px;
        flex: none;
        margin-right: 60px;
    }
`
export const MovieDetailsInfo = styled.div`
    
`

export const MovieDetailsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: 30px;

    ${props => props.type === 'mb-0' && `
        margin-bottom: 0
    `}
`

export const MovieDetailsTitle = styled.h3`
    font-size: 40px;
    color: ${Colors.white};
    text-transform: uppercase;
    font-weight: 300;
`

export const MovieDetailsRating = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    color: ${Colors.white};
    width: 60px;
    height: 60px;
    border: 1px solid ${Colors.white};
    border-radius: 50%;
    margin-left: 25px;
`

export const MovieDetailsGenre = styled.ul`
    display: flex;
    width: 100%;
    font-size: 14px;
    margin-top: 10px;
    color: ${Colors.white};
    opacity: 0.5;

    li + li {
        margin-left: 5px;
    }
`

export const MovieDetailsYear = styled.span`
    color: ${Colors.accent};
    font-size: 24px;
`

export const MovieDetailsRuntime = styled.span`
    color: ${Colors.accent};
    font-size: 24px;
    margin-left: 50px;
`

export const MovieDetailsDescription = styled.p`
    color: ${Colors.white};
    font-size: 20px;
    line-height: 1.2;
    opacity: 0.5;
`