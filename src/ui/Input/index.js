import React from "react";
import InputContainer from "./style";

function Input({placeholder = 'Placeholder', type, defaultValue}) {
	return (
		<InputContainer type={type} placeholder={placeholder} defaultValue={defaultValue}></InputContainer>
	);
}
export default Input;