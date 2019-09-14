class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.alterCounter = this.alterCounter.bind(this);
        this.state = {
            count: props.count,
        };
    }
    alterCounter(event) {
        const id = event.target.id;
        switch (id) {
            case 'incrementBtn':
                this.setState(prevState => {
                    return {
                        count: prevState.count + 1,
                    };
                });
                break;
            case 'decrementBtn':
                this.setState(prevState => {
                    return {
                        count: prevState.count - 1,
                    };
                });
                break;
            default:
                this.setState(() => {
                    return {
                        count: 0,
                    };
                });
        }
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button
                    id="incrementBtn"
                    className="button"
                    onClick={this.alterCounter}
                >
                    + 1
                </button>
                <button
                    id="decrementBtn"
                    className="button"
                    onClick={this.alterCounter}
                >
                    - 1
                </button>
                <button
                    id="counter-btn"
                    className="button"
                    onClick={this.alterCounter}
                >
                    Reset count
                </button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0,
};

const appRoot = document.getElementById('app');
ReactDOM.render(<Counter />, appRoot);
