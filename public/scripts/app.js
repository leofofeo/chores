'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Header from './components/Header';
// import Action from './components/Action';

var addSpacingStyle = {
    margin: '10px',
    paddingTop: '5px',
    paddingBottom: '5px'
};

var ChoresList = function (_React$Component) {
    _inherits(ChoresList, _React$Component);

    function ChoresList(props) {
        _classCallCheck(this, ChoresList);

        var _this = _possibleConstructorReturn(this, (ChoresList.__proto__ || Object.getPrototypeOf(ChoresList)).call(this, props));

        _this.state = {
            subTitle: 'Let the app decide which chore you tackle next',
            chores: props.chores
        };
        _this.handleRemoveChores = _this.handleRemoveChores.bind(_this);
        _this.handleRemoveChore = _this.handleRemoveChore.bind(_this);
        _this.handleAddChore = _this.handleAddChore.bind(_this);
        _this.handleSelectRandomChore = _this.handleSelectRandomChore.bind(_this);
        return _this;
    }

    _createClass(ChoresList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('chores');
                var chores = JSON.parse(json);
                if (chores) {
                    this.setState(function () {
                        return { chores: chores };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.chores.length !== this.state.chores.length) {
                var json = JSON.stringify(this.state.chores);
                localStorage.setItem('chores', json);
            }
            console.log('componentDidUpdate!');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('component will unmount!');
        }
    }, {
        key: 'handleRemoveChores',
        value: function handleRemoveChores() {
            this.setState(function () {
                return { chores: [] };
            });
        }
    }, {
        key: 'handleRemoveChore',
        value: function handleRemoveChore(choreToRemove) {
            this.setState(function (prevState) {
                return {
                    chores: prevState.chores.filter(function (chore) {
                        return chore !== choreToRemove;
                    })
                };
            });
        }
    }, {
        key: 'handleAddChore',
        value: function handleAddChore(value) {
            if (!value) {
                return 'Enter a valid value to add item';
            } else if (this.state.chores.indexOf(value) > -1) {
                return 'This chore already exists';
            }
            this.setState(function (prevState) {
                return {
                    chores: prevState.chores.concat([value])
                };
            });
        }
    }, {
        key: 'handleSelectRandomChore',
        value: function handleSelectRandomChore() {
            var randomIndex = Math.floor(Math.random() * this.state.chores.length);
            var activity = this.state.chores[randomIndex];
            console.log(activity);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subTitle: this.state.subTitle }),
                React.createElement(Action, {
                    hasChores: this.state.chores.length > 0,
                    handleSelectRandomChore: this.handleSelectRandomChore
                }),
                React.createElement(Chores, {
                    chores: this.state.chores,
                    handleRemoveChores: this.handleRemoveChores,
                    handleRemoveChore: this.handleRemoveChore
                }),
                React.createElement(AddChore, { handleAddChore: this.handleAddChore })
            );
        }
    }]);

    return ChoresList;
}(React.Component);

ChoresList.defaultProps = {
    chores: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: 'Chores'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        { style: addSpacingStyle },
        React.createElement(
            'button',
            {
                onClick: props.handleSelectRandomChore,
                disabled: !props.hasChores
            },
            'What should i do?'
        )
    );
};

var Chores = function Chores(props) {
    return React.createElement(
        'div',
        null,
        'These are your chores (there are currently ',
        props.chores.length,
        '):',
        React.createElement(
            'ul',
            null,
            props.chores.map(function (chore) {
                return React.createElement(Chore, {
                    chore: chore,
                    key: chore,
                    handleRemoveChore: props.handleRemoveChore
                });
            })
        ),
        props.chores.length < 1 ? '' : React.createElement(
            'button',
            { onClick: props.handleRemoveChores },
            'Clear all chores'
        )
    );
};

var Chore = function Chore(props) {
    return React.createElement(
        'li',
        null,
        props.chore,
        ' ',
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleRemoveChore(props.chore);
                }
            },
            'remove'
        )
    );
};

var AddChore = function (_React$Component2) {
    _inherits(AddChore, _React$Component2);

    function AddChore(props) {
        _classCallCheck(this, AddChore);

        var _this2 = _possibleConstructorReturn(this, (AddChore.__proto__ || Object.getPrototypeOf(AddChore)).call(this, props));

        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        _this2.state = {
            err: undefined
        };
        return _this2;
    }

    _createClass(AddChore, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var newChore = e.target.chore.value.trim();

            var err = this.props.handleAddChore(newChore);
            if (err) {
                console.log(err);
                this.setState(function () {
                    return { err: err };
                });
            }
            e.target.chore.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: addSpacingStyle },
                this.state.error && React.createElement(
                    'div',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement('input', { type: 'text', name: 'chore' }),
                    React.createElement(
                        'button',
                        null,
                        'Add chore'
                    )
                )
            );
        }
    }]);

    return AddChore;
}(React.Component);

// const User = props => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(ChoresList, null), appRoot);
