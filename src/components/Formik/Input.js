import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { InputContainer, LabelContainer, ErrorContainer } from './Style';


function Input({ type, name, label, placeholder = 'Placeholder', onChange, value } ) {
    return (
        <>
            {label ? <LabelContainer htmlFor={name}>{label}</LabelContainer> : null }
            <InputContainer 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <ErrorContainer>
                <ErrorMessage name={name} />
            </ErrorContainer>
        </>
    )
}

export default Input;