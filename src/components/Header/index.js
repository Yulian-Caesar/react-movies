import React from "react";
import PropTypes from "prop-types";
import { HeaderContainer, HeaderTop, HeaderForm, HeaderTitle } from "./style"
import { Button, Input, Logo, Modal, ModalAdd } from "ui";
import MovieDetails from '../MovieDetails/index';
<<<<<<< home-task-6
import { useMovieDetails } from "../MovieDetails/MovieDetailsContext";

const Header = ({ isPopupOpen, setIsPopupOpen }) => {
	const movieDetails = useMovieDetails()
=======
import { useMovieDetailsToggle } from "../MovieDetails/MovieDetailsContext"
>>>>>>> master

	const showPopup = () => {
		setIsPopupOpen(!isPopupOpen)
	}
	const { movieDetails } = useMovieDetailsToggle()

	if(movieDetails.isMovieDetailsOpen == true) {
		return (
			<HeaderContainer type={'movieDetails'}>
				<MovieDetails />
			</HeaderContainer>
		)
	}
	return (
<<<<<<< home-task-6
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
=======
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
>>>>>>> master
		</HeaderContainer>
	)
}

Header.propTypes = {
	isPopupOpen: PropTypes.bool.isRequired,
	setIsPopupOpen: PropTypes.func.isRequired
}

export default Header;