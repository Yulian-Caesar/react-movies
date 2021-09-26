import React from "react";
import InputContainer from "./style";

function Input({placeholder, type}) {
	return (
		<InputContainer type={type} placeholder={placeholder}></InputContainer>
	);
}
export default Input;