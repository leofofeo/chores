import React from 'react';
import ReactDOM from 'react-dom';
import ChoresApp from './components/ChoresApp';

const appRoot = document.getElementById('app');
ReactDOM.render(<ChoresApp />, appRoot);

class OldSyntax {
    constructor() {
        this.name = 'Leo';
    }
}
