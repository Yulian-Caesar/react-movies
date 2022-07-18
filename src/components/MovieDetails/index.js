import React from "react";
import { MovieDetailsContainer, MovieDetailsClose, MovieDetailsHeader, MovieDetailsMain, MovieDetailsInfo, MovieDetailsRow, MovieDetailsDescription, MovieDetailsTitle, MovieDetailsRating, MovieDetailsGenre, MovieDetailsYear, MovieDetailsRuntime } from "./style"
import { useMovieDetails } from "./MovieDetailsContext";
import { Logo } from "ui"

const MovieDetails = () => {
    const movieDetails = useMovieDetails()
	  const { currentEl, isVisiblePopup } = movieDetails;
	
    if (!movieDetails) return null

	return (
		<MovieDetailsContainer >
			<MovieDetailsHeader>
				<Logo />
				<MovieDetailsClose onClick={() => isVisiblePopup(false)} />
			</MovieDetailsHeader>
			<MovieDetailsMain>
				<img className="img" src={currentEl.poster_path}/>
				<MovieDetailsInfo>
					<MovieDetailsRow type={'mb-0'}>
						<MovieDetailsTitle>{currentEl.title}</MovieDetailsTitle>
						<MovieDetailsRating>{currentEl.vote_average}</MovieDetailsRating>
					</MovieDetailsRow>
					<MovieDetailsRow>
					<	MovieDetailsGenre>
							{currentEl.genres.map((item) => (
								<li key={item}>{item},</li>
							))}
						</MovieDetailsGenre>
					</MovieDetailsRow>
					<MovieDetailsRow>
						<MovieDetailsYear>{currentEl.release_date}</MovieDetailsYear>
						<MovieDetailsRuntime>{currentEl.runtime}min</MovieDetailsRuntime>
					</MovieDetailsRow>
					<MovieDetailsDescription>
						{currentEl.overview}
					</MovieDetailsDescription>
				</MovieDetailsInfo>
			</MovieDetailsMain>
		</MovieDetailsContainer>
	);
}

export default MovieDetails;
