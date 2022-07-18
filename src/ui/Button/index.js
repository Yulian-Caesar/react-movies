import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./style";

const Button = ({value, type, onClick}) => {
	return (
		<ButtonContainer type={type} onClick={onClick}>
			{value}
		</ButtonContainer>
	);
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
}

export default Button;