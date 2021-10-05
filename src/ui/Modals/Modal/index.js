import React from 'react';
import { default as ModalContainer } from 'react-modal';
import { Colors } from 'ui';
import { ModalCloseButton } from '../style';

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
        padding: '60px',
        width: '100%',
        maxWidth: '976px',
        color: `${Colors.white}`
    },
    overlay: {
        backgroundColor: 'rgba(35, 35, 35, 0.8)',
    }
};

ModalContainer.setAppElement('body');


const Modal = ({ isPopupOpen, setIsPopupOpen, children }) => {

    const closeModal = () => setIsPopupOpen(!isPopupOpen);
    

    return (
        <>  
            <ModalContainer
                isOpen={isPopupOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
                {children}
            </ModalContainer>
        </>
    );
}

export default Modal;