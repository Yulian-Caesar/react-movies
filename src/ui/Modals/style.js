import styled from "styled-components";
import { Colors } from "ui";

export const ModalTitle = styled.h3`
    font-size: 40px;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 35px;
`

export const ModalButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;

    button + button {
        margin-left: 15px;
    }
`

export const ModalRow = styled.div`
    display: flex;

    &:not(:last-child) {
        margin-bottom: 30px;
    }
`

export const ModalRowItem = styled.div`
    width: 100%;

    &:nth-child(2) {
        margin-left: 30px;
        max-width: 300px;
    }
`

export const ModalRowTitle = styled.div`
    display: block;
    color: ${Colors.accent};
    text-transform: uppercase;
    margin-bottom: 13px;
`

export const ModalForm = styled.form`
    
`

export const ModalCloseButton = styled.button`
    position: absolute;
    right: 30px;
    top: 30px;
    font-size: 40px;
    color: ${Colors.white};
    cursor: pointer;
`