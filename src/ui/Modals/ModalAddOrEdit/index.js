import React from 'react';
import { Button } from 'ui';
import { ModalTitle, ModalButtons, ModalRow, ModalRowItem } from '../style';
import { ErrorContainer } from '../../../components/Formik/Style';
import { Formik, Field, ErrorMessage } from 'formik';
import FormikControl from '../../../components/Formik/FormikControl';
import { useDispatch } from 'react-redux'
import { moviesListChange, moviesFetchData } from '../../../redux/actions';
import SelectField from '../../../components/Formik/FormikSelect';
import * as Yup from 'yup';
import { GENRES_OPTIONS } from 'constants';
import PropTypes from 'prop-types';


const ModalAddOrEdit = ({ isPopupOpen, setIsPopupOpen, modalTitle, methodType, cardData }) => {
	const dispatch = useDispatch();
	
	const validate = Yup.object({
		title: Yup.string()
			.required('Required field'),
		vote_average: Yup.number()
			.max(100)
			.required('Required field'),
		poster_path: Yup.string().url('Incorrect URL')
			.required('Required field'),
		runtime: Yup.number()
			.max(999)
			.required('Required field'),
		genres: Yup.array().min(1, 'Does not contain 1 required value'),
		overview: Yup.string()
			.required('Required field'),
		release_date: Yup.string()
			.required('Required field')
	})
	
	const genresOjbect = () => {
		if (cardData) {
			return cardData?.genres?.map((g) => ({
				label: g,
				value: g,
			}));
		}
		return null
	}

	const dispatchMovies = (e) => {
		dispatch(moviesFetchData())
	}


	const defaultValues = {
		title: cardData?.title || '',
		release_date: cardData?.release_date || '',
		poster_path: cardData?.poster_path || '',
		vote_average: cardData?.vote_average || '',
		overview: cardData?.overview || '',
		genres: genresOjbect(),
		runtime: cardData?.runtime || '',
	};
		
	const initValues = cardData.id ? {...defaultValues, id: cardData?.id} : defaultValues

	return (
		<>
			<Formik
				initialValues={initValues}
				validationSchema={validate}
				onSubmit={(data) => {
					const genreList = [];
					data.genres.forEach(element => genreList.push(element.label))
					setIsPopupOpen(!isPopupOpen)
					moviesListChange( methodType, {
						title: data.title,
						release_date: data.release_date,
						poster_path: data.poster_path,
						vote_average: data.vote_average,
						genres: genreList,
						id: data.id,
						runtime: data.runtime,
						overview: data.overview
					}, dispatchMovies)
				}}
			>
				{({
					values,
					handleChange,
					handleSubmit,
					resetForm
				}) => (
					<>
						<ModalTitle>{modalTitle}</ModalTitle>
						<form onSubmit={handleSubmit}>
							<ModalRow>
								<ModalRowItem>
									<FormikControl 
										control='input'
										type='text'
										name='title'
										label='Title'
										placeholder='Name Movie'
										onChange={handleChange}
										value={values.title}
									/>
								</ModalRowItem>
								<ModalRowItem>
									<FormikControl 
										control='input'
										type='date'
										name='release_date'
										label='Date'
										placeholder='Date'
										onChange={handleChange}
										value={values.release_date}
									/>
								</ModalRowItem>
							</ModalRow>
							<ModalRow>
								<ModalRowItem>
									<FormikControl 
										control='input'
										type='text'
										name='poster_path'
										label='movie url'
										placeholder='https://'
										onChange={handleChange}
										value={values.poster_path}
									/>
								</ModalRowItem>
								<ModalRowItem>
									<FormikControl 
										control='input'
										type='number'
										name='vote_average'
										label='rating'
										placeholder='7.8'
										onChange={handleChange}
										value={values.vote_average}
									/>
								</ModalRowItem>
							</ModalRow>
							<ModalRow>
								<ModalRowItem>
									<Field
										component={SelectField} 
										name='genres'
										label='genre'
										options={GENRES_OPTIONS}
										onChange={handleChange}
										value={values.genres}
									/>
									<ErrorContainer>
										<ErrorMessage name={'genres'} />
									</ErrorContainer>
								</ModalRowItem>
								<ModalRowItem>
									<FormikControl 
										control='input'
										type='number'
										name='runtime'
										label='runtime'
										placeholder='minutes'
										onChange={handleChange}
										value={values.runtime}
									/>
								</ModalRowItem>
							</ModalRow>
							<ModalRow>
								<ModalRowItem>
									<FormikControl 
										control='textarea'
										type='text'
										name='overview'
										label='overview'
										placeholder='Movie description'
										onChange={handleChange}
										value={values.overview}
									/>
								</ModalRowItem>
							</ModalRow>
							<ModalButtons>
								<Button type='button' value='reset' kind='outline' onClick={resetForm} />
								<Button type='submit' value='submit' kind='default' />
							</ModalButtons>
						</form>
					</>
				)}
			</Formik>
		</>
	);
}

ModalAddOrEdit.propTypes = {
	isPopupOpen: PropTypes.bool.isRequired,
	setIsPopupOpen: PropTypes.func.isRequired,
	modalTitle: PropTypes.string.isRequired,
	methodType: PropTypes.string.isRequired
}

export default ModalAddOrEdit;