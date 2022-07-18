import React from 'react';
import ErrorBoundary from '../ErrorBoundary';
import MoviesList from '../MoviesList/index';
import { MainContainer, MainNav, MainNavResult, MainNavList, MainNavHeader, MainNavFilter } from './style';
import { useSelector, useDispatch } from 'react-redux'
import { Select } from 'ui'
import { moviesFetchData } from '../../redux/actions';
import { GENRES_NAVIGATION_LIST, GENRE_ALL } from 'constants';

const Main = () => {
	const dispatch = useDispatch();
	const stateMovies = useSelector(state => state.movies)
	const activeTabsClass = 'active';


	const sortBy = (el) => {
		dispatch(moviesFetchData(`?sortBy=${el.value}&sortOrder=asc`));
	}

	const sortByGenre = (e) => {
		let filterGenre = e.target.attributes.value.value;
		const currentElement = e.target;
		const parent = currentElement.parentNode;
		filterGenre === GENRE_ALL ? filterGenre='' : filterGenre

		parent.querySelector(`.${activeTabsClass}`).classList.remove(activeTabsClass);
		currentElement.classList.add(activeTabsClass)
		dispatch(moviesFetchData(`?searchBy=genres&filter=${filterGenre}`))
	}

	return (
		<MainContainer>
			<MainNav>
				<MainNavHeader>
					<MainNavList>
						{GENRES_NAVIGATION_LIST.map((item, index) => {
							if(index === 0) {
								return <li onClick={sortByGenre} value={item} key={index} className={activeTabsClass}>{item}</li>
							}
							return <li onClick={sortByGenre} value={item} key={index}>{item}</li>
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