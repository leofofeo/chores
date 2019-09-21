import React from 'react';

const Chore = props => (
    <li>
        {props.chore}{' '}
        <button
            onClick={e => {
                props.handleRemoveChore(props.chore);
            }}
        >
            remove
        </button>
    </li>
);

export default Chore;
