// Genres
export const GENRE_ALL = 'all';
export const GENRE_DOCUMENTARY = 'documentary';
export const GENRE_COMEDY = 'comedy';
export const GENRE_HORROR = 'horror';
export const GENRE_CRIME = 'crime';
export const GENRES_NAVIGATION_LIST = [GENRE_ALL, GENRE_DOCUMENTARY, GENRE_COMEDY, GENRE_HORROR, GENRE_CRIME];
export const GENRES_OPTIONS = [
	{ value: 'Action & Adventure', label: 'Action & Adventure' },
	{ value: 'Drama', label: 'Drama' },
	{ value: 'Biography', label: 'Biography' },
	{ value: 'Music', label: 'Music' },
	{ value: 'Oscar winning Movie', label: 'Oscar winning Movie' }
]
export const GENRES_SORT_BY = [
	{ value: 'release_date', label: 'Release date' },
	{ value: 'vote_average', label: 'Rating' }
]

// URL
export const URL = 'http://localhost:4000/movies/';