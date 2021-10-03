import styled from "styled-components";
import { Colors } from "../index";


export const ModalTitle = styled.h3`
    font-size: 40px;
    font-weight: 300;
    color: ${Colors.white};
    text-transform: uppercase;
    margin-bottom: 35px;
`

export const ModalCloseButton = styled.button`
    position: absolute;
    right: 30px;
    top: 30px;
    font-size: 40px;
    color: ${Colors.white};
    cursor: pointer;
`

export const ModalButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 60px;

    button + button {
        margin-left: 15px;
    }
`