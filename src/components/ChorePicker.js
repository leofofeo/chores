import React from 'react';

const addSpacingStyle = {
    margin: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
};

const ChorePicker = props => (
    <div style={addSpacingStyle}>
        <button
            onClick={props.handleSelectRandomChore}
            disabled={!props.hasChores}
            className="big-button"
        >
            What should I do?
        </button>
    </div>
);

export default ChorePicker;
