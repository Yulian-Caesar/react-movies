import React from "react";
import TextareaContainer from "./style";

function Textarea({placeholder, type, defaultValue}) {
	return (
		<TextareaContainer type={type} placeholder={placeholder} defaultValue={defaultValue}></TextareaContainer>
	);
}
export default Textarea;