import React, { Component } from 'react'
import Select from 'react-select'

const options = [
	{ value: 'action-and-adventure', label: 'Action & Adventure' },
	{ value: 'drama', label: 'Drama' },
	{ value: 'biography', label: 'Biography' },
	{ value: 'music', label: 'Music' },
	{ value: 'oscar', label: 'Oscar winning Movie' }
]

function MySelect({ placeholder, type }) {
	return (
		<Select options={options} />
	);
}
export default MySelect;