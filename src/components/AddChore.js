import React from 'react';

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
            <div className="widget-form-area">
                {this.state.err && (
                    <p className="add-chore-error">{this.state.err}</p>
                )}
                <form onSubmit={this.handleSubmit} className="add-chore-form">
                    <input type="text" name="chore" />
                    <button className="button">Add chore</button>
                </form>
            </div>
        );
    }
}
