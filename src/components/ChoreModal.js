import React from 'react';
import Modal from 'react-modal';

const ChoreModal = props => (
    <Modal
        isOpen={!!props.selectedChore}
        contentLabel="Selected Modal"
        onRequestClose={props.handleClearModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected chore:</h3>
        {props.selectedChore && (
            <p className="modal__body">{props.selectedChore}</p>
        )}
        <button onClick={props.handleClearModal} className="button">
            Okay
        </button>
    </Modal>
);

export default ChoreModal;
