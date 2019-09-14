// import Header from './components/Header';
// import Action from './components/Action';

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
        this.handleAddChore = this.handleAddChore.bind(this);
        this.handleSelectRandomChore = this.handleSelectRandomChore.bind(this);
    }
    handleRemoveChores() {
        this.setState(() => ({ chores: [] }));
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
                <Header subTitle={this.state.subTitle} />
                <Action
                    hasChores={this.state.chores.length > 0}
                    handleSelectRandomChore={this.handleSelectRandomChore}
                />
                <Chores
                    chores={this.state.chores}
                    handleRemoveChores={this.handleRemoveChores}
                />
                <AddChore handleAddChore={this.handleAddChore} />
            </div>
        );
    }
}

ChoresList.defaultProps = {
    chores: [],
};

const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
};

Header.defaultProps = {
    title: 'Chores',
};

const Action = props => {
    return (
        <div style={addSpacingStyle}>
            <button
                onClick={props.handleSelectRandomChore}
                disabled={!props.hasChores}
            >
                What should i do?
            </button>
        </div>
    );
};

const Chores = props => {
    return (
        <div>
            These are your chores (there are currently {props.chores.length}):
            <ul>
                {props.chores.map(chore => (
                    <Chore chore={chore} key={chore} />
                ))}
            </ul>
            {props.chores.length < 1 ? (
                ''
            ) : (
                <button onClick={props.handleRemoveChores}>
                    Clear all chores
                </button>
            )}
        </div>
    );
};

const Chore = props => {
    return <li>{props.chore}</li>;
};

class AddChore extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            err: undefined,
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const newChore = e.target.chore.value.trim();

        const err = this.props.handleAddChore(newChore);
        if (err) {
            console.log(err);
            this.setState(() => ({ err }));
        }
        e.target.chore.value = '';
    }
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

// const User = props => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

const appRoot = document.getElementById('app');
ReactDOM.render(<ChoresList />, appRoot);
