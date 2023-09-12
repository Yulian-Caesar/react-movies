import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import MoviesList from '../MoviesList/index';
import { MainContainer, MainNav, MainNavResult, MainNavList, MainNavHeader, MainNavFilter } from './style';
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'ui'
import { moviesFetchData } from '../../redux/actions';
import { GENRES_NAVIGATION_LIST, GENRE_ALL } from 'constants';
import { useMoviesList } from '../MoviesList/MoviesListContext';
import { useNavigate, Link } from 'react-router-dom';
import { useMovieDetails } from '../MovieDetails/MovieDetailsContext';
import { useLocation } from 'react-router-dom';
 
const Main = (props) => {
	const dispatch = useDispatch();
	const stateMovies = useSelector(state => state.movies)
	const activeTabsClass = 'active';

	const movieListContext = useMoviesList();


	const movieDetailsContext = useMovieDetails();


	const location = useLocation();
	const navigate = useNavigate(); 
	// console.log(location.pathname.replace('/search/',''))


	const sortBy = (el) => {
		navigate(`/search/${el.value}`);
	}


	// const routeChange = (e) =>{ 
	// 	let path = e.target.textContent;
	// 	navigate(path);
	// }

	// const sortByGenre = (e) => {
	// 	// yulik.changeGenre(e);

	// 	// routeChange(e);


	// 	let filterGenre = e.target.attributes.value.value;
	// 	const currentElement = e.target;
	// 	const parent = currentElement.parentNode;
	// 	filterGenre === GENRE_ALL ? filterGenre='' : filterGenre;

	// 	parent.querySelector(`.${activeTabsClass}`).classList.remove(activeTabsClass);
	// 	currentElement.classList.add(activeTabsClass)
	// 	dispatch(moviesFetchData(`?searchBy=genres&filter=${filterGenre}`))
	// }




	const addClass = (e) => {
		const currentElement = e.target.parentNode;
		const parent = currentElement.closest('ul');
		parent.querySelector(`.${activeTabsClass}`).classList.remove(activeTabsClass);
		currentElement.classList.add(activeTabsClass);

		// ВИДАЛИТИ цю функцію і додавати активний клас до елемента в залежності від URL адреси

		// movieDetailsContext.setIsMovieDetailsOpen(false);

		// yulik.setMyGenre(currentElement.textContent)
	}

	return (
		<MainContainer>
			<MainNav>
				<MainNavHeader>
					<MainNavList>
						{GENRES_NAVIGATION_LIST.map((item, index) => {
							// прибрати if, (перевірятися Active class буде відповідно до URL адреси, + додати movieDetailsContext.setIsMovieDetailsOpen(false) замість функції addClass)
							if(index === 0) {
								return <li onClick={addClass} value={item} key={index} className={activeTabsClass}><Link to="/search">{item}</Link></li>
							}
							return <li onClick={addClass} value={item} key={index} className={item === movieListContext.myGenre ? activeTabsClass : null}><Link to={`/search/${item}`}>{item}</Link></li>
						})}
					</MainNavList>
					<MainNavFilter>
						<span>Sort by</span>
						<Select type='sortBy' onChange={sortBy}/>
					</MainNavFilter>
				</MainNavHeader>
				<MainNavResult>{stateMovies.length} movies found</MainNavResult>
			</MainNav>
            <ErrorBoundary>
                <MoviesList  />
            </ErrorBoundary>
		</MainContainer>
	);
}


export default Main;