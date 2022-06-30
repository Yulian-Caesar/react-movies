import React from "react";
import PropTypes from "prop-types";
import { MovieCardContainer, MovieCardTitle, MovieCardYear, MovieCardGenre, MovieCardButton } from "./style";

const MovieCard = ({onClick, title, genres, year, imagePath}) => {
	return (
		<MovieCardContainer onClick={onClick}>
			<img src={imagePath} />
			<MovieCardTitle>{title}</MovieCardTitle>
			<MovieCardYear>{year}</MovieCardYear>
			<MovieCardGenre>{genres}</MovieCardGenre>
			{/* <MovieCardButton >
				<span></span>
				<span></span>
				<span></span>
			</MovieCardButton> */}
		</MovieCardContainer>
	);
}

MovieCard.propTypes = {
	onClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	genres: PropTypes.array.isRequired,
	year: PropTypes.string.isRequired,
	imagePath: PropTypes.string.isRequired
}

export default MovieCard;