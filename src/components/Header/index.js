import React from "react";
import { HeaderContainer, HeaderTop, HeaderForm, HeaderTitle } from "./style"
import { Button, Input, Logo } from "ui";

function Header(props) {
	return (
		<HeaderContainer>
			<HeaderTop>
				<Logo />
				<Button type="light" value="+ add movie"/>
			</HeaderTop>
			<HeaderForm>
				<HeaderTitle>FIND YOUR MOViE</HeaderTitle>
				<Input type="default" placeholder="What do you want to watch?"></Input>
				<Button type="default" value="Search"/>
			</HeaderForm>
		</HeaderContainer>
	);
}
export default Header;