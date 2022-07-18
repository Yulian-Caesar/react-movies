import React from 'react';
import { Button } from 'ui';
import { ModalTitle, ModalButtons } from '../style';
import { Formik } from 'formik';
import { moviesListChange, moviesFetchData } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

const ModalDelete = ({ isPopupOpen, setIsPopupOpen, methodType, id }) => {
	const dispatch = useDispatch();

	const dispatchMovies = (e) => {
		dispatch(moviesFetchData())
	}	

	return (
		<>
			<Formik
				initialValues={{ 
					title: ''
				}}
				onSubmit={() => {
					setIsPopupOpen(!isPopupOpen)
					moviesListChange(methodType, {}, dispatchMovies, id)
				}}
			>
				{({
					handleSubmit,
				}) => (
					<>
						<ModalTitle>delete Movie</ModalTitle>
						<form onSubmit={handleSubmit}>
							<span>Are you sure you want to delete this movie?</span>
							<ModalButtons>
								<Button type='submit' value='submit' kind='default' />
							</ModalButtons>
						</form>
					</>
				)}
			</Formik>
		</>
	);
}

ModalDelete.propTypes = {
	isPopupOpen: PropTypes.bool.isRequired,
	setIsPopupOpen: PropTypes.func.isRequired,
	methodType: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
}

export default ModalDelete;