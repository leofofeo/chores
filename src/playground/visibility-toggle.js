const buttonStyle = {
    marginBottom: '20px',
    width: '100px',
    padding: '5px',
    backgroundColor: 'purple',
    color: 'white',
};

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => {
            return {
                toggled: !prevState.toggled,
            };
        });
    }
    render() {
        const divText =
            'Hey! These are some additional details you can now see!';
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button
                    id="toggle-btn"
                    onClick={this.toggle}
                    style={buttonStyle}
                >
                    {this.state.toggled ? 'Hide details' : 'Show details'}
                </button>
                <div>{this.state.toggled ? divText : ''}</div>
            </div>
        );
    }
}
