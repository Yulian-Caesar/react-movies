import styled from 'styled-components';
import { Colors } from '../index'

const ButtonContainer = styled.button`
    border-radius: 4px;
    font-size: 20px;
    text-transform: uppercase;
    padding: 15px 45px;
    cursor: pointer;
    border: 2px solid;

    ${props => props.kind === 'default' && `
        background: ${Colors.accent};
        color: ${Colors.white};
        border-color: ${Colors.accent};
    `}

    ${props => props.kind === 'outline' && `
        background: ${Colors.black};
        color: ${Colors.accent};
        border-color: ${Colors.accent};
    `}

    ${props => props.kind === 'light' && `
        background: #d6d6d6;
        color: ${Colors.accent};
        border-color: #d6d6d6;
    `}
`

export default ButtonContainer;