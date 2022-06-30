import React from "react";
import PropTypes from "prop-types";
import TextareaContainer from "./style";

const Textarea = ({placeholder, type, defaultValue}) => {
	return (
		<TextareaContainer type={type} placeholder={placeholder} defaultValue={defaultValue}></TextareaContainer>
	);
}

Textarea.propTypes = {
	placeholder: PropTypes.string,
    type: PropTypes.string,
	defaultValue: PropTypes.string,
}

export default Textarea;