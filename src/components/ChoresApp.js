import React from 'react';
import AddChore from './AddChore';
import Chores from './Chores';
import ChorePicker from './ChorePicker';
import Header from './Header';
import ChoreModal from './ChoreModal';

const addSpacingStyle = {
    margin: '10px',
    paddingTop: '5px',
    paddingBottom: '5px',
};
class ChoresApp extends React.Component {
    state = {
        subTitle: 'Let the app decide which chore you tackle next',
        chores: [],
        selectedChore: undefined,
    };

    handleRemoveChores = () => {
        this.setState(() => ({ chores: [] }));
    };

    handleRemoveChore = choreToRemove => {
        this.setState(prevState => ({
            chores: prevState.chores.filter(chore => chore !== choreToRemove),
        }));
    };

    handleAddChore = value => {
        if (!value) {
            return 'Enter a valid value to add item';
        } else if (this.state.chores.indexOf(value) > -1) {
            return 'This chore already exists';
        }
        this.setState(prevState => ({
            chores: prevState.chores.concat([value]),
        }));
    };

    handleSelectRandomChore = () => {
        const randomIndex = Math.floor(
            Math.random() * this.state.chores.length
        );
        const activity = this.state.chores[randomIndex];
        console.log(activity);
        this.setState(() => ({ selectedChore: activity }));
    };

    handleClearModal = () => {
        console.log('from handle clearModal');
        this.setState(() => ({ selectedChore: undefined }));
    };

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

    render() {
        return (
            <div>
                <Header subtitle={this.state.subTitle} />
                <ChorePicker
                    hasChores={this.state.chores.length > 0}
                    handleSelectRandomChore={this.handleSelectRandomChore}
                />
                <Chores
                    chores={this.state.chores}
                    handleRemoveChores={this.handleRemoveChores}
                    handleRemoveChore={this.handleRemoveChore}
                />
                <AddChore handleAddChore={this.handleAddChore} />
                <ChoreModal
                    selectedChore={this.state.selectedChore}
                    handleClearModal={this.handleClearModal}
                />
            </div>
        );
    }
}

ChoresApp.defaultProps = {
    chores: [],
};

export default ChoresApp;
