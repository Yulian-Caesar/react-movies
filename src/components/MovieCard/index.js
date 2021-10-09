import React from "react";
import PropTypes from "prop-types";
import { MovieCardContainer, MovieCardTitle, MovieCardYear, MovieCardGenre, MovieCardButton } from "./style";
import myImg from "images/filmItem.jpg";
import { useMovieDetailsToggle } from "../MovieDetails/MovieDetailsContext";

function MovieCard({title, description, genre, year}) {
	const toggle = useMovieDetailsToggle()
	return (
		<MovieCardContainer onClick={toggle}>
			<img src={myImg}/>
			<MovieCardTitle>{title}</MovieCardTitle>
			<MovieCardYear>{year}</MovieCardYear>
			<MovieCardGenre>{genre}</MovieCardGenre>
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