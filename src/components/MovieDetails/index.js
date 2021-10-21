import React from "react";
import { MovieDetailsContainer, MovieDetailsClose, MovieDetailsHeader, MovieDetailsMain, MovieDetailsInfo, MovieDetailsRow, MovieDetailsDescription, MovieDetailsTitle, MovieDetailsRating, MovieDetailsGenre, MovieDetailsYear, MovieDetailsRuntime } from "./style"
import { useMovieDetailsToggle } from "./MovieDetailsContext";
import { Logo } from "ui"
import myImg from "images/filmItem.jpg";

function MovieDetails(props) {
	const {toggle, activeItem, movieDetails} = useMovieDetailsToggle()

    if (!movieDetails) return null

	return (
		<MovieDetailsContainer >
			<MovieDetailsHeader>
				<Logo />
				<MovieDetailsClose onClick={toggle} />
			</MovieDetailsHeader>
			<MovieDetailsMain>
				<img className="img" src={myImg}/>
				<MovieDetailsInfo>
					<MovieDetailsRow>
						<MovieDetailsTitle>{activeItem.title}</MovieDetailsTitle>
						<MovieDetailsRating>{activeItem.rating}</MovieDetailsRating>
						<MovieDetailsGenre>{activeItem.genre}</MovieDetailsGenre>
					</MovieDetailsRow>
					<MovieDetailsRow>
						<MovieDetailsYear>{activeItem.year}</MovieDetailsYear>
						<MovieDetailsRuntime>{activeItem.runtime}</MovieDetailsRuntime>
					</MovieDetailsRow>
					<MovieDetailsDescription>
						{activeItem.description}
					</MovieDetailsDescription>
				</MovieDetailsInfo>
			</MovieDetailsMain>
		</MovieDetailsContainer>
	);
}

export default MovieDetails;
