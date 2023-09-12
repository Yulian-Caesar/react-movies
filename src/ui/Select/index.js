import React from 'react';
import PropTypes from 'prop-types';
import { default as SelectContainer, components } from 'react-select';
import { Colors } from 'ui';
import ImgArrow from 'images/arrow.svg';
import { GENRES_SORT_BY } from 'constants';
import { Link } from 'react-router-dom';


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


const Select = ({ placeholder = 'placeholder', type, onChange}) => {

	if(type === 'sortBy') {
		return (
			<SelectContainer
				components={{ DropdownIndicator }}
				type='checkbox'
				styles={selectStyles}
				options={GENRES_SORT_BY}
				defaultValue={ {value: 'release_date', label: 'Release date'} }
				removeSelected={false}
				placeholder={placeholder}
				type={type}
				onChange={onChange}
			>
			</SelectContainer>
		);
	}
	
}

Select.propTypes = {
	placeholder: PropTypes.string,
    type: PropTypes.string,
}

export default Select;