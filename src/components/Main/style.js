import styled from 'styled-components';
import { Colors } from 'ui';

export const MainContainer = styled.main`
    background: #232323;
    padding: 0 55px 75px;
`

export const MainNav = styled.div`
    font-size: 16px;
    color: ${Colors.white};
    margin-bottom: 25px;
`
export const MainNavHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
    border-bottom: 2px solid ${Colors.greyDark}; 
    padding: 20px 0;
    margin-bottom: 25px;
`

export const MainNavList = styled.ul`
    display: flex;

    li {
        cursor: pointer;
        position: relative;
        
        &:before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -43.5px;
            width: 100%;
            height: 0px;
            background-color: ${Colors.accent}; 
        }

        &.active {
            &:before {
                height: 2px;
            }
        }
    }

    li + li {
        margin-left: 30px;
    }
`

export const MainNavFilter = styled.div`
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

    span {
        margin-right: 30px;
    }
`


export const MainNavResult = styled.span`
    font-size: 20px;
`