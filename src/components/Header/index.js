import React from "react";
import { HeaderContainer, HeaderTop, HeaderForm, HeaderTitle } from "./style"
import { Button, Input, Logo, MyModal} from "ui";


function Header({ isPopupOpen, setIsPopupOpen }) {
	const showPopup = () => {
		setIsPopupOpen(!isPopupOpen)
	}

	return (
		<HeaderContainer>
			<HeaderTop>
				<Logo />
				<Button onClick={showPopup} value="+ add movie" type="light" />
				<MyModal isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
			</HeaderTop>
			<HeaderForm>
				<HeaderTitle>FIND YOUR MOViE</HeaderTitle>
				<Input type="text" placeholder="What do you want to watch?"></Input>
				<Button type="default" value="Search"/>
			</HeaderForm>
		</HeaderContainer>
	);
}
export default Header;