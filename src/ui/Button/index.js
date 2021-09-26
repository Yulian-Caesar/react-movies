import React from "react";
import ButtonContainer from "./style";

function Button({value, type}) {
	return (
		<ButtonContainer type={type}>
			{value}
		</ButtonContainer>
	);
}
export default Button;