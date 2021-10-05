import React from "react";
import { Button, Textarea, InputDate, Select, Input } from 'ui';
import { ModalTitle, ModalButtons, ModalRow, ModalRowItem, ModalRowTitle, ModalForm} from '../style';

function ModalAdd() {
	return (
		<>
			<ModalTitle>ADD MOVIE</ModalTitle>
			<ModalForm>
				<ModalRow>
					<ModalRowItem>
						<ModalRowTitle>Title</ModalRowTitle>
						<Input placeholder="Name Movie"/>
					</ModalRowItem>
					<ModalRowItem>
						<ModalRowTitle>RELEASE DATE</ModalRowTitle>
						<InputDate />
					</ModalRowItem>
				</ModalRow>
				<ModalRow>
					<ModalRowItem>
						<ModalRowTitle>movie url</ModalRowTitle>
						<Input placeholder="https://"/>
					</ModalRowItem>
					<ModalRowItem>
						<ModalRowTitle>RATING</ModalRowTitle>
						<Input placeholder="7.8"/>
					</ModalRowItem>
				</ModalRow>
				<ModalRow>
					<ModalRowItem>
						<ModalRowTitle>genre</ModalRowTitle>
						<Select placeholder="Select Genre"/>
					</ModalRowItem>
					<ModalRowItem>
						<ModalRowTitle>RUNTIME</ModalRowTitle>
						<Input placeholder="minutes" />
					</ModalRowItem>
				</ModalRow>
				<ModalRow>
					<ModalRowItem>
						<ModalRowTitle>OVERVIEW</ModalRowTitle>
						<Textarea placeholder="Movie description" />
					</ModalRowItem>
				</ModalRow>
				<ModalButtons>
					<Button value="reset" type="outline" />
					<Button value="submit" type="default" />
				</ModalButtons>
			</ModalForm>
		</>
	);
}
export default ModalAdd;