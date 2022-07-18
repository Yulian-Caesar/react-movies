import  Select, { components } from 'react-select';
import { useField, ErrorMessage } from 'formik';
import React from 'react';
import { LabelContainer, ErrorText } from './Style';
import { Colors } from 'ui';
import ImgArrow from '../../images/arrow.svg';

const selectStyles = {
	option: base => ({
		...base,
		color: Colors.white,
		backgroundColor: Colors.black,
		cursor: 'pointer',
	}),
	singleValue: base => ({
		...base,
		color: Colors.white,
		cursor: 'pointer',
	}),
	menu: base => ({
		...base,
		backgroundColor: Colors.black,
	}),
	indicatorSeparator: base => ({
		...base,
		display: 'none',
	}),
	control: base => ({
		...base,
		boxShadow: 'none',
		border: 'none',
		backgroundColor: 'rgba(50, 50, 50, 0.8)',
		padding: '14px 8px',
		minWidth: '200px',
		cursor: 'pointer',
	}),
	multiValue: base => ({
		...base,
		backgroundColor: Colors.accent,
		color: Colors.white,
	}),
	multiValueLabel: base => ({
		...base,
		color: Colors.white,
	}),
};

const DropdownIndicator = props => {
	return (
		<components.DropdownIndicator {...props}>
			<img src={ImgArrow} />
		</components.DropdownIndicator>
	);
};

export default function SelectField(props) {
	const [field, state, { setValue, setTouched }] = useField(
		props.field.name
	);

	const onChange = (value) => {
		setValue(value);
	};

	return (
		<>
			{props.label ? <LabelContainer htmlFor={props.name}>{props.label}</LabelContainer> : null }
			<Select
				{...props}
				value={state?.value}
				isMulti
				components={{ DropdownIndicator }}
				name={props.name}
				styles={selectStyles}
				id={props.name}
				label={props.label}
				onChange={onChange}
			/>            
		</>
	);
}
