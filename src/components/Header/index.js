import React from "react";
import { HeaderContainer, HeaderTop, HeaderForm, HeaderTitle } from "./style"
import { Button, Input, Logo, Modal, ModalAdd } from "ui";
import MovieDetails from '../MovieDetails/index';
import { useMovieDetailsToggle } from "../MovieDetails/MovieDetailsContext"

function Header({ isPopupOpen, setIsPopupOpen }) {
	const showPopup = () => {
		setIsPopupOpen(!isPopupOpen)
	}
	const { movieDetails } = useMovieDetailsToggle()

	return (
		<HeaderContainer>
			{ movieDetails ? <MovieDetails /> : (<>
				<HeaderTop>
					<Logo />
					<Button onClick={showPopup} value="+ add movie" type="light" />
					<Modal isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}>
						<ModalAdd />
					</Modal>
				</HeaderTop>
				<HeaderForm>
					<HeaderTitle>FIND YOUR MOViE</HeaderTitle>
					<Input type="text" placeholder="What do you want to watch?"></Input>
					<Button type="default" value="Search"/>
				</HeaderForm>
			</>) }
		</HeaderContainer>
	);
}
export default Header;