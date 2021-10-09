import React from "react";
import { Button, Textarea, InputDate, Select, Input } from 'ui';
import { ModalTitle, ModalButtons, ModalRow, ModalRowItem, ModalRowTitle, ModalForm} from '../style';

function ModalEdit() {
	return (
		<>
			<ModalTitle>Edit</ModalTitle>
			<ModalForm>
				<ModalRow>
					<ModalRowItem>
						<ModalRowTitle>Title</ModalRowTitle>
						<Input placeholder="Name Movie" defaultValue="Moana"/>
					</ModalRowItem>
					<ModalRowItem>
						<ModalRowTitle>RELEASE DATE</ModalRowTitle>
						<InputDate />
					</ModalRowItem>
				</ModalRow>
				<ModalRow>
					<ModalRowItem>
						<ModalRowTitle>movie url</ModalRowTitle>
						<Input placeholder="https://" defaultValue="https://www.moana.com" />
					</ModalRowItem>
					<ModalRowItem>
						<ModalRowTitle>RATING</ModalRowTitle>
						<Input placeholder="7.8" defaultValue="7.6" />
					</ModalRowItem>
				</ModalRow>
				<ModalRow>
					<ModalRowItem>
						<ModalRowTitle>genre</ModalRowTitle>
						<Select placeholder="Select Genre"/>
					</ModalRowItem>
					<ModalRowItem>
						<ModalRowTitle>RUNTIME</ModalRowTitle>
						<Input placeholder="minutes" defaultValue="1h 47min" />
					</ModalRowItem>
				</ModalRow>
				<ModalRow>
					<ModalRowItem>
						<ModalRowTitle>OVERVIEW</ModalRowTitle>
						<Textarea placeholder="Movie description" defaultValue="Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology."/>
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
export default ModalEdit;