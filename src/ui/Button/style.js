import styled from "styled-components";
import { Theme } from "ui"

const ButtonContainer = styled.button`
    border-radius: 4px;
    font-size: 20px;
    text-transform: uppercase;
    padding: 15px 45px;
    cursor: pointer;
    border: 2px solid;

    ${props => props.type === 'default' && `
        background: ${Theme.colors.accent};
        color: ${Theme.colors.white};
        border-color: ${Theme.colors.accent};
    `}

    ${props => props.type === 'outline' && `
        background: ${Theme.colors.black};
        color: ${Theme.colors.accent};
        border-color: ${Theme.colors.accent};
    `}

    ${props => props.type === 'light' && `
        background: #d6d6d6;
        color: ${Theme.colors.accent};
        border-color: #d6d6d6;
    `}
`

export default ButtonContainer;