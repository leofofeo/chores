import React from 'react';
import Modal from 'react-modal';

const ChoreModal = props => (
    <Modal
        isOpen={!!props.selectedChore}
        contentLabel="Selected Modal"
        onRequestClose={props.handleClearModal}
        ariaHideApp={false}
    >
        <h3>Selected chore:</h3>
        {props.selectedChore && <p>{props.selectedChore}</p>}
        <button onClick={props.handleClearModal}>Okay</button>
    </Modal>
);

export default ChoreModal;
