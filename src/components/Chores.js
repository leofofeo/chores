import React from 'react';
import Chore from './Chore';

const Chores = props => (
    <div>
        These are your chores (there are currently {props.chores.length}):
        <ul>
            {props.chores.map(chore => (
                <Chore
                    chore={chore}
                    key={chore}
                    handleRemoveChore={props.handleRemoveChore}
                />
            ))}
        </ul>
        {props.chores.length < 1 ? (
            ''
        ) : (
            <button onClick={props.handleRemoveChores}>Clear all chores</button>
        )}
    </div>
);

export default Chores;
