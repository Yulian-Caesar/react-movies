import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MovieCardContainer, MovieCardTitle, MovieCardYear, MovieCardGenre, MovieCardButton, MovieCardImg, MovieCardMenuBox, MovieCardButtonClose, MovieCardMenu } from './style';
import { Modal, ModalDelete, ModalAddOrEdit } from 'ui';

const MovieCard = ({ onClick, title, poster_path, release_date, genres, cardData }) => {
	const [ movieCardMenu, setMovieCardMenu ] = useState(false);
	const [ isPopupOpen, setIsPopupOpen] = useState(false);
	const [ isPopupAddOpen, setIsPopupAddOpen] = useState(false);
	const [ isPopupDeleteOpen, setIsPopupDeleteOpen] = useState(false);

	const handlePopup = (popupType) => {
		setMovieCardMenu(!movieCardMenu);
		popupType(!isPopupOpen)
	}

	return (
		<MovieCardContainer>
			<MovieCardImg onClick={onClick}><img src={poster_path} /></MovieCardImg>
			<MovieCardTitle onClick={onClick}>{title}</MovieCardTitle>
			<MovieCardYear>{release_date}</MovieCardYear>
			<MovieCardGenre>
				{genres.map(el => {
					return (
						<li key={el}>{el},</li>
					)
				})}
			</MovieCardGenre>
			<MovieCardMenu>
				<MovieCardButton onClick={() => setMovieCardMenu(!movieCardMenu)}>
					<span></span>
					<span></span>
					<span></span>
				</MovieCardButton>
				{movieCardMenu ? 
					<MovieCardMenuBox>
						<MovieCardButtonClose onClick={() => setMovieCardMenu(false)} >X</MovieCardButtonClose>
						<ul>
							<li><button onClick={() => handlePopup(setIsPopupAddOpen)}>Edit</button></li>
							<li><button onClick={() => handlePopup(setIsPopupDeleteOpen)}>Delete</button></li>
						</ul>
					</MovieCardMenuBox>
					: null
				}
			</MovieCardMenu>
			<Modal isPopupOpen={isPopupAddOpen} setIsPopupOpen={setIsPopupAddOpen}>
				<ModalAddOrEdit 
					isPopupOpen={isPopupAddOpen} 
					setIsPopupOpen={setIsPopupAddOpen} 
					modalTitle='Edit movie'
					cardData={cardData}
					methodType='PUT'
				/>
			</Modal>
			<Modal isPopupOpen={isPopupDeleteOpen} setIsPopupOpen={setIsPopupDeleteOpen}>
				<ModalDelete 
					isPopupOpen={isPopupDeleteOpen} 
					setIsPopupOpen={setIsPopupDeleteOpen} 
					id={cardData.id} 
					methodType='DELETE'
				/>
			</Modal>
		</MovieCardContainer>
	);
}

MovieCard.propTypes = {
	onClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	poster_path: PropTypes.string,
	release_date: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
}

export default MovieCard;