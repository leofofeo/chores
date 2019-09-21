import React from 'react';

const Chore = props => (
    <div className="widget-chores__chore">
        <span className="chore">{props.chore} </span>
        <button
            onClick={e => {
                props.handleRemoveChore(props.chore);
            }}
            className="button button--link"
        >
            remove
        </button>
    </div>
);

export default Chore;
