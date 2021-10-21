import React from "react";
import PropTypes from "prop-types";
import { MovieCardContainer, MovieCardTitle, MovieCardYear, MovieCardGenre, MovieCardButton } from "./style";
import myImg from "images/filmItem.jpg";
import { useMovieDetailsToggle } from "../MovieDetails/MovieDetailsContext"

function MovieCard({card}) {
	const { handleClick } = useMovieDetailsToggle()
	
	return (
		<MovieCardContainer onClick={() => handleClick(card)}>
			<img src={myImg}/>
			<MovieCardTitle>{card.title}</MovieCardTitle>
			<MovieCardYear>{card.year}</MovieCardYear>
			<MovieCardGenre>{card.genre}</MovieCardGenre>
			<MovieCardButton >
				<span></span>
				<span></span>
				<span></span>
			</MovieCardButton>
		</MovieCardContainer>
	);
}

MovieCard.propTypes = {
	title: PropTypes.string.isRequired,
	genre: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
}

export default MovieCard;