import styled from 'styled-components';
import { Colors } from 'ui';
import CalendarIcon from '../../images/calendar.svg'

export const InputContainer = styled.input`
    border-radius: 4px;
    font-size: 20px;
    padding: 18px;
    cursor: text;
    background: rgba(50, 50, 50, 0.8);
    color: white;
    width: 100%;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
        color: rgba(0, 0, 0, 0);
        opacity: 1;
        display: block;
        background: url(${CalendarIcon}) no-repeat;
        background-size: contain;
        width: 20px;
        height: 20px;
        border-width: thin;
    }
`

export const LabelContainer = styled.label`
    display: block;
    color: ${Colors.accent};
    text-transform: uppercase;
    margin-bottom: 13px;
`

export const TextareaContainer = styled.textarea`
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

export const ErrorContainer = styled.span` 
    display: block;
    color: ${Colors.accent};
    font-size: 14px;
    margin-top: 5px;
`