import React from "react";
import ButtonContainer from "./style";

function Button({value, type, onClick}) {
	return (
		<ButtonContainer type={type} onClick={onClick}>
			{value}
		</ButtonContainer>
	);
}
export default Button;