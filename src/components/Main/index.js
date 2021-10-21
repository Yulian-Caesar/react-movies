import React from "react";
import ErrorBoundary from "../ErrorBoundary";
import MoviesList from '../MoviesList/index';
import { MainContainer, MainNav, MainNavResult, MainNavList, MainNavHeader, MainNavFilter, MainNavFilterSelect } from "./style";

const navList = ['all', 'documentary', 'Comedy', 'Horror', 'crime'];

function Main(props) {
	return (
		<MainContainer>
			<MainNav>
				<MainNavHeader>
					<MainNavList>
						{navList.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</MainNavList>
					<MainNavFilter>
						<span>Sort by</span>
						<MainNavFilterSelect>release date</MainNavFilterSelect>
					</MainNavFilter>
				</MainNavHeader>
				<MainNavResult>333 movies found</MainNavResult>
			</MainNav>
            <ErrorBoundary>
                <MoviesList listInfo={props.listInfo} handleClick={props.handleClick} />
            </ErrorBoundary>
		</MainContainer>
	);
}
export default Main;