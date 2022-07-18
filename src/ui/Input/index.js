import React from "react";
import PropTypes from "prop-types";
import InputContainer from "./style";

const Input = ({placeholder = 'Placeholder', type, defaultValue}) => {
	return (
		<InputContainer type={type} placeholder={placeholder} defaultValue={defaultValue}></InputContainer>
	);
}

Input.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	defaultValue: PropTypes.string,
}

export default Input;