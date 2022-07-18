import React from "react";
import { Button } from 'ui';
import { ModalTitle, ModalForm, ModalButtons } from '../style';

const ModalRemove = () => {
	return (
		<>
			<ModalTitle>delete Movie</ModalTitle>
			<ModalForm>
				<span>Are you sure you want to delete this movie?</span>
				<ModalButtons>
					<Button value="confirm" type="default" />
				</ModalButtons>
			</ModalForm>
		</>
	);
}
export default ModalRemove;