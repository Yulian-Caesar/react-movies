import React from 'react';
import Modal from 'react-modal';
import { Colors, Button, Textarea, InputDate, MySelect } from '../index';
import { ModalCloseButton, ModalTitle, ModalButtons } from './style';

const Yulik = Modal;

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: `${Colors.black}`,
        borderRadius: 'none',
        border: 'none',
        padding: '60px'
    },
    overlay: {
        backgroundColor: 'rgba(35, 35, 35, 0.8)',
    }
};

Modal.setAppElement('body');


const MyModal = ({ isPopupOpen, setIsPopupOpen }) => {

    const closeModal = () => setIsPopupOpen(!isPopupOpen);
    

    return (
        <>  
            <Modal
                isOpen={isPopupOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
                <ModalTitle>ADD MOVIE</ModalTitle>
                <InputDate />
                <Textarea placeholder="Movie description" />
                <MySelect />
                <ModalButtons>
                    <Button value="reset" type="outline" />
                    <Button value="submit" type="default" />
                </ModalButtons>
            </Modal>
        </>
    );
}

export default MyModal;