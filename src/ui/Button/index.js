import React from 'react';
import PropTypes from 'prop-types';
import ButtonContainer from './style';

const Button = ({value, kind, onClick}) => {
	return (
		<ButtonContainer kind={kind} onClick={onClick}>
			{value}
		</ButtonContainer>
	);
}

Button.propTypes = {
	value: PropTypes.string.isRequired,
	kind: PropTypes.string.isRequired,
	onClick: PropTypes.func
}

export default Button;