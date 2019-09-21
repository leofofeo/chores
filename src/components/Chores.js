import React from 'react';
import Chore from './Chore';

const Chores = props => (
    <div>
        {props.chores.length > 0 && (
            <div className="widget-header">
                <h3 className=".widget-header__title">
                    These are your chores:
                </h3>
                {props.chores.length < 1 ? (
                    ''
                ) : (
                    <button
                        className="button button--link"
                        onClick={props.handleRemoveChores}
                    >
                        Clear all chores
                    </button>
                )}
            </div>
        )}

        <div className="widget-chores">
            {props.chores.map(chore => (
                <Chore
                    chore={chore}
                    key={chore}
                    handleRemoveChore={props.handleRemoveChore}
                />
            ))}
        </div>
    </div>
);

export default Chores;
