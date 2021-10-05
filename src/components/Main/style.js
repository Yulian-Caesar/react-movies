import styled from "styled-components";

export const MainContainer = styled.main`
    background: #232323;
    padding: 0 55px 75px;
`

export const MainNav = styled.div`
    font-size: 16px;
    color: #FFFFFF;
    margin-bottom: 25px;
`
export const MainNavHeader = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    border-bottom: 1px solid #080707;
    padding: 20px 0;
    margin-bottom: 25px;
`

export const MainNavList = styled.ul`
    display: flex;

    li + li {
        margin-left: 30px;
    }
`

export const MainNavFilter = styled.div`
    color: rgba(255, 255, 255, 0.6);
`

export const MainNavFilterSelect = styled.span`
    position: relative;
    margin-left: 35px;
    color: rgba(255, 255, 255, 1);
    padding-right: 35px;

    &:after {
        content: '';
        position: absolute;
        right: 10px;
        top: 65%;
        transform: translate(0, -50%);
        border: 6px solid transparent;
        border-top: 8px solid #F65261;
    }
`

export const MainNavResult = styled.span`
    font-size: 20px;
`