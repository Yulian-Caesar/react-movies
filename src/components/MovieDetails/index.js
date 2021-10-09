import React from "react";
import { MovieDetailsContainer, MovieDetailsClose, MovieDetailsHeader, MovieDetailsMain, MovieDetailsInfo, MovieDetailsRow, MovieDetailsDescription, MovieDetailsTitle, MovieDetailsRating, MovieDetailsGenre, MovieDetailsYear, MovieDetailsRuntime } from "./style"
import { useMovieDetails, useMovieDetailsToggle } from "./MovieDetailsContext";
import { Logo } from "ui"
import myImg from "images/filmItem.jpg";

function MovieDetails() {
    const movieDetails = useMovieDetails()
	const toggle = useMovieDetailsToggle()

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
						<MovieDetailsTitle>Pulp Fiction</MovieDetailsTitle>
						<MovieDetailsRating>8.9</MovieDetailsRating>
						<MovieDetailsGenre>Action and Adventure</MovieDetailsGenre>
					</MovieDetailsRow>
					<MovieDetailsRow>
						<MovieDetailsYear>1994</MovieDetailsYear>
						<MovieDetailsRuntime>2h 34min</MovieDetailsRuntime>
					</MovieDetailsRow>
					<MovieDetailsDescription>
						Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) 
						are two hit men who are out to retrieve a suitcase stolen from their employer, 
						mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked 
						Vincent to take his wife Mia (Uma Thurman) out a few days later 
						when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) 
						is an aging boxer who is paid by Wallace to lose his fight. 
						The lives of these seemingly unrelated people are woven together 
						comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra
					</MovieDetailsDescription>
				</MovieDetailsInfo>
			</MovieDetailsMain>
		</MovieDetailsContainer>
	);
}

export default MovieDetails;
