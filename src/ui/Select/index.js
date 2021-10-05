import React from 'react'
import { default as SelectContainer, components } from 'react-select';
import { Colors } from 'ui';
import ImgArrow from "images/arrow.svg";

const options = [
	{ value: 'action-and-adventure', label: 'Action & Adventure' },
	{ value: 'drama', label: 'Drama' },
	{ value: 'biography', label: 'Biography' },
	{ value: 'music', label: 'Music' },
	{ value: 'oscar', label: 'Oscar winning Movie' }
]

const colourStyles = {
	option: base => ({
		...base,
		color: Colors.white,
		backgroundColor: Colors.black
	}),
	singleValue: base => ({
		...base,
		color: Colors.white,
	}),
	menu: base => ({
		...base,
		backgroundColor: Colors.black
	}),
	indicatorSeparator: base => ({
		...base,
		display: 'none'
	}),
	control: base => ({
		...base,
		boxShadow: 'none',
		border: 'none',
		backgroundColor: 'rgba(50, 50, 50, 0.8)',
		padding: '14px 8px'
	}),
	multiValue: base => ({
		...base,
		backgroundColor: Colors.accent,
		color: Colors.white
	}),
	multiValueLabel: base => ({
		...base,
		color: Colors.white
	}),
};

const DropdownIndicator = props => {
	return (
		<components.DropdownIndicator {...props}>
			<img src={ImgArrow} />
		</components.DropdownIndicator>
	);
};

function Select({ placeholder = "placeholder", type }) {
	return (
		<SelectContainer
			components={{ DropdownIndicator }}
			type="checkbox"
			isMulti
			// classNamePrefix="select"
			styles={colourStyles}
			options={options}
			removeSelected={false}
			placeholder={placeholder}
		>
		</SelectContainer>
	);
}
export default Select;