import React from 'react';

const addSpacingStyle = {
    margin: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
};

export default class AddChore extends React.Component {
    state = {
        err: undefined,
    };
    handleSubmit = e => {
        e.preventDefault();
        const newChore = e.target.chore.value.trim();

        const err = this.props.handleAddChore(newChore);
        if (err) {
            console.log(err);
            this.setState(() => ({ err }));
        }
        e.target.chore.value = '';
    };
    render() {
        return (
            <div style={addSpacingStyle}>
                {this.state.error && <div>{this.state.error}</div>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="chore" />
                    <button>Add chore</button>
                </form>
            </div>
        );
    }
}
