import styled from 'styled-components';
import { Colors } from 'ui';
import headerBg from '../../images/headerBg.jpg';

export const HeaderContainer = styled.header`
    position: relative;
    margin-bottom: 10px;
    background-image: url(${headerBg});

    input {
        grid-area: input;
    }

    button {
        grid-area: button;
    }

    ${props => props.type === 'header' && `
        padding: 20px 55px 150px;
    `}

    ${props => props.type === 'movieDetails' && `
        padding: 0;
    `}
`

export const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
`

export const HeaderTitle = styled.h1`
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 300;
    color: ${Colors.white}; 
    grid-area: title;
`

export const HeaderForm = styled.div`
    display: grid;
    grid-gap: 35px 20px;
    grid-template-columns: 25fr 25fr 25fr 25fr;
    grid-template-areas: 
        'title title title title'
        'input input input button'
`
