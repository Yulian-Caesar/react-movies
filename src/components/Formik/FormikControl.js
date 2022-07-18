import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import InputDate from './InputDate';
import FormikSelect from './FormikSelect';

function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <FormikSelect {...rest} />  
        case 'radio':
        case 'checkbox':
        case 'date':
            return <InputDate {... rest} />
        default: return null
    }
}

export default FormikControl;