import React, { useState } from 'react';
import { HeaderContainer, HeaderTop, HeaderForm, HeaderTitle } from './style'
import { Button, Logo, Modal, ModalAddOrEdit } from 'ui';
import MovieDetails from '../MovieDetails/index';
import { useMovieDetails } from '../MovieDetails/MovieDetailsContext';

const Header = () => {
	const [ isPopupOpen, setIsPopupOpen] = useState(false);
	const movieDetails = useMovieDetails()


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
				<Button onClick={() => setIsPopupOpen(!isPopupOpen)} value='+ add movie' kind='light' />
				<Modal isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}>
					<ModalAddOrEdit 
						isPopupOpen={isPopupOpen} 
						setIsPopupOpen={setIsPopupOpen} 
						modalTitle='Add movie'
						methodType='POST'
						cardData
					/>
				</Modal>
			</HeaderTop>
			<HeaderForm>
				<HeaderTitle>FIND YOUR MOViE</HeaderTitle>
				{/* <Input type='text' placeholder='What do you want to watch?'></Input> */}
				<input type='text' placeholder='What do you want to watch?'></input>
				<Button kind='default' value='Search'/>
			</HeaderForm>
		</HeaderContainer>
	)
}


export default Header;