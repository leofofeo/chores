import React from 'react';
import ReactDOM from 'react-dom';
import AddChore from './components/AddChore';
import Chores from './components/Chores';
import DecisionMaker from './components/DecisionMaker';
import Header from './components/Header';

const addSpacingStyle = {
    margin: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
};
class ChoresList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subTitle: 'Let the app decide which chore you tackle next',
            chores: props.chores,
        };
        this.handleRemoveChores = this.handleRemoveChores.bind(this);
        this.handleRemoveChore = this.handleRemoveChore.bind(this);
        this.handleAddChore = this.handleAddChore.bind(this);
        this.handleSelectRandomChore = this.handleSelectRandomChore.bind(this);
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('chores');
            const chores = JSON.parse(json);
            if (chores) {
                this.setState(() => ({ chores }));
            }
        } catch (e) {}
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.chores.length !== this.state.chores.length) {
            const json = JSON.stringify(this.state.chores);
            localStorage.setItem('chores', json);
        }
    }

    handleRemoveChores() {
        this.setState(() => ({ chores: [] }));
    }

    handleRemoveChore(choreToRemove) {
        this.setState(prevState => ({
            chores: prevState.chores.filter(chore => chore !== choreToRemove),
        }));
    }

    handleAddChore(value) {
        if (!value) {
            return 'Enter a valid value to add item';
        } else if (this.state.chores.indexOf(value) > -1) {
            return 'This chore already exists';
        }
        this.setState(prevState => ({
            chores: prevState.chores.concat([value]),
        }));
    }

    handleSelectRandomChore() {
        const randomIndex = Math.floor(
            Math.random() * this.state.chores.length
        );
        const activity = this.state.chores[randomIndex];
        console.log(activity);
    }

    render() {
        return (
            <div>
                <Header subtitle={this.state.subTitle} />
                <DecisionMaker
                    hasChores={this.state.chores.length > 0}
                    handleSelectRandomChore={this.handleSelectRandomChore}
                />
                <Chores
                    chores={this.state.chores}
                    handleRemoveChores={this.handleRemoveChores}
                    handleRemoveChore={this.handleRemoveChore}
                />
                <AddChore handleAddChore={this.handleAddChore} />
            </div>
        );
    }
}

ChoresList.defaultProps = {
    chores: [],
};

const appRoot = document.getElementById('app');
ReactDOM.render(<ChoresList />, appRoot);
