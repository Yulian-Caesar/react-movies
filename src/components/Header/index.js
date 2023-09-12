import React, { useState, useEffect } from 'react';
import { HeaderContainer, HeaderTop, HeaderForm, HeaderTitle } from './style'
import { Button, Logo, Modal, ModalAddOrEdit } from 'ui';
import MovieDetails from '../MovieDetails/index';
import { useMovieDetails } from '../MovieDetails/MovieDetailsContext';
import { useDispatch, useSelector } from 'react-redux'
import { moviesFetchData } from '../../redux/actions';
import { useNavigate } from 'react-router';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { useMoviesList } from '../MoviesList/MoviesListContext';

const Header = () => {
	const dispatch = useDispatch();
	const [ isPopupOpen, setIsPopupOpen] = useState(false);
	const movieDetails = useMovieDetails();

	const stateMovies = useSelector(state => state.movies);

    // const yulik = useMoviesList();
	// console.log(stateMovies)
	const myArr = [];
	stateMovies.map((item) => {
		myArr.push(item.id)
	})
	// console.log(myArr);

	const yulik = useMoviesList();
	

	const [ search, setSearch ] = useState('');
	let navigate = useNavigate();

	const changeInputValue = (e) => {
		setSearch(e.target.value)
	}


	const defaultOrder = 'sortOrder=desc';

	const urlConstructor = (
		title = '',
		movieId = '',
		genre = 'comedy',
		order = 'sortOrder=desc'
	) => {
		if(title) {
			return `?${title ? `search=${title}&searchBy=title&` : ''}${movieId ? `movie=${movieId}&` : ''}sortBy=release_date&${order}${genre ? `&filter=${genre}` : ''}`;
		}
		return `?sortBy=vote_count&sortOrder=asc`;
	};

	// `?${search ? `search=${search}&searchBy=title&` : ''}${movieId ? `movie=${movieId}&` : ''}sortBy=release_date&${order}${genre ? `&filter=${genre}` : ''}`;

	const searchQuery = () => {
		dispatch(moviesFetchData(urlConstructor(search)));
		navigate(urlConstructor(search));
	}

	// const location = useLocation();
	// useEffect(() => {
	// 	console.log('Location changed');
	//   }, [location]);
	 


	if(movieDetails.isMovieDetailsOpen == true) {
		return (
			<HeaderContainer type={'movieDetails'}>
				<Routes>
					{myArr.map((item) => {
						return <Route key={item} path={`/search/${item}`} element={ <MovieDetails /> } />
					})}
				</Routes>
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
				<input value={search} onChange={changeInputValue} type='text' placeholder='What do you want to watch?'></input>
				<Button kind='default' value='Search' onClick={searchQuery} />
			</HeaderForm>
		</HeaderContainer>
	)
}


export default Header;