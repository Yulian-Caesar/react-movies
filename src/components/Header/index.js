import React from "react";
import PropTypes from "prop-types";
import { HeaderContainer, HeaderTop, HeaderForm, HeaderTitle } from "./style"
import { Button, Input, Logo, Modal, ModalAdd } from "ui";
import MovieDetails from '../MovieDetails/index';
import { useMovieDetails } from "../MovieDetails/MovieDetailsContext";

const Header = ({ isPopupOpen, setIsPopupOpen }) => {
	const movieDetails = useMovieDetails()

	const showPopup = () => {
		setIsPopupOpen(!isPopupOpen)
	}

	if(movieDetails.isMovieDetailsOpen == true) {
		return (
			<HeaderContainer type={'movieDetails'}>
				<MovieDetails />
			</HeaderContainer>
		)
	}
	return (
		<HeaderContainer type={'header'}>
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
		</HeaderContainer>
	)
}

Header.propTypes = {
	isPopupOpen: PropTypes.bool.isRequired,
	setIsPopupOpen: PropTypes.func.isRequired
}

export default Header;