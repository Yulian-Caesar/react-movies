import React from "react";
import TextareaContainer from "./style";

function Textarea({placeholder, type}) {
	return (
		<TextareaContainer type={type} placeholder={placeholder}></TextareaContainer>
	);
}
export default Textarea;