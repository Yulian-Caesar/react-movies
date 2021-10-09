import styled from "styled-components";
import { Colors } from "../index"

const TextareaContainer = styled.textarea`
    resize: none;
    width: 100%;
    padding: 18px;
    background: rgba(50, 50, 50, 0.95);
    border-radius: 4px;
    border: none;
    font-size: 20px;
    color: ${Colors.white};
    min-height: 200px;
`

export default TextareaContainer;