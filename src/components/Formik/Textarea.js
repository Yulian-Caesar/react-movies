import React from 'react';
import { ErrorMessage } from 'formik';
import { TextareaContainer, LabelContainer, ErrorContainer } from './Style';


function Textarea({ type, name, label, placeholder = 'Placeholder', onChange, value } ) {
    return (
        <>
            {label ? <LabelContainer htmlFor={name}>{label}</LabelContainer> : null }
            <TextareaContainer
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

export default Textarea;